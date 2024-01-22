"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import {
  IconLearnVerSec,
  IconSettingsProfile,
  IconVerify,
} from "@/components/reused/Icon/Icon";

import styles from "./cardProfile.module.scss";

import { selectUser } from "@/redux/user/selectors";
export const CardProfile = () => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.card}>
      <Image
        className={styles.card_avatar}
        src={
          user.image
            ? user.image
            : `${process.env.NEXT_URL}/img/sidebar/avatar.png`
        }
        alt={""}
        width={150}
        height={150}
      />
      <div className={styles.cardWrapper}>
        <div className={styles.titleWrapper}>
          <IconVerify />
          <h1
            className={styles.title}
          >{`${user.lastName} ${user.firstName}`}</h1>
        </div>
        <h2 className={styles.subtitle}>User at Intellecta</h2>
        <div className={styles.knowledge}>
          <IconLearnVerSec />
          <h3 className={styles.role}>користувач</h3>
        </div>
      </div>
      <button className={styles.settings}>
        <IconSettingsProfile />
      </button>
    </div>
  );
};
