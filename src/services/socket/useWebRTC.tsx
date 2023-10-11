import { useCallback, useEffect, useRef, useState } from "react";
// import SimplePeer from "simple-peer";

import socket from "@/services/socket/index";
import { Actions } from "@/enums/socket/actions";
import useStateWithCallback from "@/services/socket/useStateWithCallback";
import { useRouter } from "next/navigation";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";

export const LOCAL_VIDEO: string = "LOCAL_VIDEO";

export default function UseWebRTC(roomID: string) {
  const [clients, updateClients, deleteState] = useStateWithCallback([]);
  const router = useRouter();

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

  const toggleMedia = (turn: boolean, kind: "video" | "audio"): void => {
    if (!turn) {
      for (const peerID in peerConnections.current) {
        const connection = peerConnections.current[peerID];
        connection.getSenders().forEach((sender) => {
          if (sender.track && sender.track.kind === kind) {
            sender.track.enabled = false;
          }
        });
      }
      // Также отключите свое собственное видео
      if (localMediaStream.current) {
        localMediaStream.current[
          kind === "video" ? "getVideoTracks" : "getAudioTracks"
        ]().forEach((track) => {
          track.enabled = false;
        });
      }
    } else {
      for (const peerID in peerConnections.current) {
        const connection = peerConnections.current[peerID];
        connection.getSenders().forEach((sender) => {
          if (sender.track && sender.track.kind === kind) {
            sender.track.enabled = true;
          }
        });
      }
      // Также включите свое собственное видео
      if (localMediaStream.current) {
        localMediaStream.current[
          kind === "video" ? "getVideoTracks" : "getAudioTracks"
        ]().forEach((track) => {
          track.enabled = true;
        });
      }
    }
  };

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
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          {
            urls: process.env.TURN_SERVER_URL || "",
            username: process.env.TURN_SERVER_USER || "",
            credential: process.env.TURN_SERVER_PASSWORD || "",
          },
        ],
      };

      peerConnections.current[peerID] = new RTCPeerConnection(configuration);
      // peerConnections.current[peerID] = new SimplePeer({
      //   initiator: createOffer,
      // });

      peerConnections.current[peerID].onicecandidate = (event) => {
        console.log("event.candidate", event.candidate);
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
              element.srcObject = remoteStream ? remoteStream : null;
            } else {
              // FIX LONG RENDER IN CASE OF MANY CLIENTS
              let settled = false;
              const interval = setInterval(() => {
                const element = peerMediaElements.current[peerID];
                if (element) {
                  element.srcObject = remoteStream ? remoteStream : null;
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
      try {
        localMediaStream.current = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: {
            width: {
              exact: 640,
            },
            height: {
              exact: 360,
            },
          },
        });
      } catch (e) {
        console.error("1Error getting useMedia", e);
        try {
          localMediaStream.current = await navigator.mediaDevices.getUserMedia(
            {},
          );
        } catch (e) {
          console.error("2Error getting useMedia", e);
          localMediaStream.current = null;
          getToastify(
            "Ви не можете увійти в конференцію, поки не надасте доступ до камері/мікрофону",
            ToastifyEnum.WARNING,
            7000,
          );
          router.push("/dashboard");
        }
      }

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
        console.error("3Error", e);
      });

    return () => {
      if (localMediaStream.current) {
        localMediaStream.current.getTracks().forEach((track) => {
          track.stop();
        });
        socket.emit(Actions.LEAVE);
      }
    };
  }, [roomID]);

  return { clients, provideMediaRef, toggleMedia };
}
