import { useCallback, useEffect, useRef } from "react";

import socket from "@/services/socket/index";
import { Actions } from "@/enums/socket/actions";
import useStateWithCallback from "@/services/socket/useStateWithCallback";
import { log } from "util";
import { getToastify } from "@/services/toastify";

export const LOCAL_VIDEO: string = "LOCAL_VIDEO";

export default function UseWebRTC(roomID: string) {
  const [clients, updateClients, deleteState] = useStateWithCallback([]);

  const peerConnections = useRef<{ [peerID: string]: RTCPeerConnection }>({});
  const localMediaStream = useRef<MediaStream | null>(null);
  const peerMediaElements = useRef<{
    [LOCAL_VIDEO: string]: HTMLVideoElement | null;
  }>({
    [LOCAL_VIDEO]: null,
  });

  const addNewClient = useCallback(
    (newClient: string, cb: Function) => {
      if (!clients.includes(newClient)) {
        console.log("newClient", newClient);
        // updateClients((prev: string[]) => [...prev, newClient], cb);
        updateClients(newClient, cb);
      }
    },
    [clients, updateClients],
  );

  const provideMediaRef = useCallback(
    (id: string, node: HTMLVideoElement | null) => {
      peerMediaElements.current[id] = node;
    },
    [],
  );

  useEffect(() => {
    async function handleNewPear({
      peerID,
      createOffer,
    }: {
      peerID: string;
      createOffer: boolean;
    }) {
      if (peerID in peerConnections.current) {
        return console.warn(`Already connected to peer ${peerID}`);
      }

      const configuration = {
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      };

      peerConnections.current[peerID] = new RTCPeerConnection(configuration);

      peerConnections.current[peerID].onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit(Actions.RELAY_ICE, {
            peerID,
            iceCandidate: event.candidate,
          });
        }
      };

      let tracksNumber = 0;
      peerConnections.current[peerID].ontrack = ({
        streams: [remoteStream],
      }) => {
        tracksNumber += 1;

        if (tracksNumber === 2) {
          // video & audio tracks received
          tracksNumber = 0;
          addNewClient(peerID, () => {
            const element = peerMediaElements.current[peerID];
            if (element) {
              element.srcObject = remoteStream;
            } else {
              // FIX LONG RENDER IN CASE OF MANY CLIENTS
              let settled = false;
              const interval = setInterval(() => {
                const element = peerMediaElements.current[peerID];
                if (element) {
                  element.srcObject = remoteStream;
                  settled = true;
                }

                if (settled) {
                  clearInterval(interval);
                }
              }, 1000);
            }
          });
        }
      };

      if (localMediaStream.current) {
        localMediaStream.current.getTracks().forEach((track) => {
          if (localMediaStream.current)
            peerConnections.current[peerID].addTrack(
              track,
              localMediaStream.current,
            );
        });
      }

      if (createOffer) {
        const offer = await peerConnections.current[peerID].createOffer();

        await peerConnections.current[peerID].setLocalDescription(offer);

        socket.emit(Actions.RELAY_SDP, {
          peerID,
          sessionDescription: offer,
        });
      }
    }

    socket.on(Actions.ADD_PEER, handleNewPear);

    return () => {
      socket.off(Actions.ADD_PEER);
    };
  }, []);

  useEffect(() => {
    async function setRemoteMedia({
      peerID,
      sessionDescription,
    }: {
      peerID: string;
      sessionDescription: RTCSessionDescription;
    }) {
      await peerConnections.current[peerID].setRemoteDescription(
        new RTCSessionDescription(sessionDescription),
      );

      if (sessionDescription.type === "offer") {
        const answer = await peerConnections.current[peerID].createAnswer();

        await peerConnections.current[peerID].setLocalDescription(answer);

        socket.emit(Actions.RELAY_SDP, {
          peerID,
          sessionDescription: answer,
        });
      }
    }

    socket.on(Actions.SESSION_DESCRIPTION, setRemoteMedia);

    return () => {
      socket.off(Actions.SESSION_DESCRIPTION);
    };
  }, []);

  useEffect(() => {
    socket.on(
      Actions.ICE_CANDIDATE,
      ({
        peerID,
        iceCandidate,
      }: {
        peerID: string;
        iceCandidate: RTCIceCandidate;
      }) => {
        peerConnections.current[peerID].addIceCandidate(
          new RTCIceCandidate(iceCandidate),
        );
      },
    );

    return () => {
      socket.off(Actions.ICE_CANDIDATE);
    };
  }, []);

  useEffect(() => {
    socket.on(Actions.REMOVE_PEER, ({ peerID }) => {
      if (peerConnections.current[peerID]) {
        peerConnections.current[peerID].close();
      }

      delete peerConnections.current[peerID];
      delete peerMediaElements.current[peerID];

      deleteState(peerID);
    });

    return () => {
      socket.off(Actions.REMOVE_PEER);
    };
  }, []);

  useEffect(() => {
    async function startCapture() {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: 854,
          height: 480,
        },
      });

      addNewClient(LOCAL_VIDEO, () => {
        const localVideoElement = peerMediaElements.current[LOCAL_VIDEO];

        if (localVideoElement) {
          localVideoElement.volume = 0;
          localVideoElement.srcObject = localMediaStream.current;
        }
      });
    }

    startCapture()
      .then(() => socket.emit(Actions.JOIN, { room: roomID }))
      .catch((e) => {
        console.error("Error getting useMedia");
        console.error(e);
      });

    return () => {
      if (localMediaStream.current) {
        console.log("Start unmounting component");
        localMediaStream.current.getTracks().forEach((track) => {
          console.log("Stopping track");
          console.log(track);
          track.stop();
        });
        socket.emit(Actions.LEAVE);
        console.log("End unmounting component");
      }
    };
  }, [roomID]);

  return { clients, provideMediaRef };
}
