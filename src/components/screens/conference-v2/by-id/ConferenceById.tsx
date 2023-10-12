"use client";

import { useSearchParams } from "next/navigation";

import socket from "@/services/socket";
import UseWebRTC, { LOCAL_VIDEO } from "@/services/socket/useWebRTC";
import styles from "./conference-id.module.scss";
import ConferenceControl from "@/components/screens/conference/by-id/conferenfe-control/ConferenceControl";
import Image from "next/image";
import { useState } from "react";

type Props = {
  params: { id: string };
};

const flexPositionVideo = (count: number) => {
  if (count === 1) {
    return { width: "640px", height: "360px" };
  }
  if (count >= 2 && count <= 4) {
    return { width: "50%", height: count > 2 ? "50%" : "70%" };
  }
  if (count >= 5 && count <= 6) {
    return { width: "33.3333%", height: "50%" };
  }
  if (count >= 7 && count <= 8) {
    return { width: "25%", height: "50%" };
  }
  if (count >= 9 && count <= 15) {
    return { width: "20%", height: "33.3333%" };
  }
};

const ConferenceById = ({ params }: Props) => {
  const searchParams = useSearchParams();
  const nameSubject = searchParams.get("name");
  const { clients, provideMediaRef, toggleMedia } = UseWebRTC(params.id);

  const [turnVideo, setTurnVideo] = useState(true);
  const [turnAudio, setTurnAudio] = useState(true);

  return (
    <main className={styles.conference}>
      <div>
        <h2 className={styles.conference_title}>
          Зараз транслюється "{nameSubject}"
        </h2>
      </div>
      <div className={styles.conference_wrapper}>
        <ul className={styles.conference_listVideo}>
          {clients.map((clientID, index) => (
            <li
              key={clientID}
              className={styles.conference_itemVideo}
              style={flexPositionVideo(clients.length)}
            >
              <div className={styles.conference_wrapperVideo}>
                <Image
                  className={styles.conference_defultAvatar}
                  src={`${process.env.NEXT_URL}/img/avatars/avatar-conf.png`}
                  alt={"Avatar default for conference"}
                  width={"489"}
                  height={"640"}
                  priority={true}
                />

                <video
                  ref={(instance) => {
                    provideMediaRef(clientID, instance);
                  }}
                  className={`${styles.conference_video} ${
                    clientID === LOCAL_VIDEO && !turnVideo ? styles.disable : ""
                  }`}
                  width={"100%"}
                  height={"100%"}
                  autoPlay={true}
                  playsInline
                  muted={clientID === LOCAL_VIDEO}
                />

                <div className={styles.conference_nameWrapper}>
                  <span className={styles.conference_name}>
                    {clientID === LOCAL_VIDEO ? "Це я :)" : clientID}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ConferenceControl
          toggleMedia={toggleMedia}
          turnVideo={turnVideo}
          turnAudio={turnAudio}
          setTurnVideo={setTurnVideo}
          setTurnAudio={setTurnAudio}
        />
      </div>
    </main>
  );
};
export default ConferenceById;
