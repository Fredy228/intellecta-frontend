"use client";

import { useSearchParams } from "next/navigation";

import socket from "@/services/socket";
import UseWebRTC, { LOCAL_VIDEO } from "@/services/socket/useWebRTC";
import styles from "./conference-id.module.scss";
import { useEffect } from "react";

type Props = {
  params: { id: string };
};

const ConferenceById = ({ params }: Props) => {
  const searchParams = useSearchParams();
  const nameSubject = searchParams.get("name");
  const { clients, provideMediaRef } = UseWebRTC(params.id);

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
            <li key={clientID} className={styles.conference_itemVideo}>
              <div className={styles.conference_wrapperVideo}>
                <video
                  ref={(instance) => {
                    provideMediaRef(clientID, instance);
                  }}
                  className={styles.conference_video}
                  width={"100%"}
                  height={"100%"}
                  autoPlay={true}
                  playsInline
                  muted={clientID === LOCAL_VIDEO}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
export default ConferenceById;
