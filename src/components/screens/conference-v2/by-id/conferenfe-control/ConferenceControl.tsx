import styles from "./conference-control.module.scss";
import Link from "next/link";
import {
  IconCamera,
  IconExit,
  IconFullScreen,
  IconMicrophone,
  IconSmsConf,
} from "@/components/reused/Icon/Icon";
import { Dispatch, FC, SetStateAction, useState } from "react";

type Props = {
  toggleMedia: (turn: boolean, kind: "video" | "audio") => void;
  setTurnVideo: Dispatch<SetStateAction<boolean>>;
  turnVideo: boolean;
  setTurnAudio: Dispatch<SetStateAction<boolean>>;
  turnAudio: boolean;
};

const ConferenceControl: FC<Props> = ({
  toggleMedia,
  setTurnVideo,
  turnVideo,
  setTurnAudio,
  turnAudio,
}) => {
  return (
    <div className={styles.control}>
      <div className={styles.control_wrapper}>
        <ul className={styles.control_list}>
          <li
            className={`${styles.control_item} ${
              turnAudio ? styles.active : ""
            }`}
            onClick={() => {
              toggleMedia(!turnAudio, "audio");
              setTurnAudio((prevState) => !prevState);
            }}
          >
            <IconMicrophone />
          </li>
          <li
            className={`${styles.control_item} ${
              turnVideo ? styles.active : ""
            }`}
            onClick={() => {
              toggleMedia(!turnVideo, "video");
              setTurnVideo((prevState) => !prevState);
            }}
          >
            <IconCamera />
          </li>
          <li className={styles.control_item}>
            <IconSmsConf />
          </li>
          <li className={styles.control_item}>
            <IconFullScreen />
          </li>
        </ul>
        <div className={styles.control_exitWrapper}>
          <Link href={"/dashboard"} className={styles.control_exitLink}>
            Вийти <IconExit />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ConferenceControl;
