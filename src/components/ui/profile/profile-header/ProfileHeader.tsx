"use client";

import Image from "next/image";
import {
  IconLearnVerSec,
  IconSettingsProfile,
  IconVerify,
} from "@/components/reused/Icon/Icon";

import styles from "./profileHeader.module.scss";

export const ProfileHeader = ({
  avatar,
  name,
  role,
  subtitle,
}: {
  avatar: string | null;
  name: string;
  role: string;
  subtitle: string;
}) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.card_avatar}
        src={
          avatar ? avatar : `${process.env.NEXT_URL}/img/sidebar/avatar1.png`
        }
        alt={""}
        sizes="100vw"
        width={150}
        height={150}
        style={{
          width: "100%",
          maxWidth: "150px",
          height: "auto",
        }}
      />
      <div className={styles.card_wrapper}>
        <div className={styles.card_title_wrapper}>
          <IconVerify />
          <h1 className={styles.title}>{name}</h1>
        </div>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.knowledge}>
          <IconLearnVerSec />
          <h3 className={styles.role}>{role}</h3>
        </div>
      </div>
      <button className={styles.settings}>
        <IconSettingsProfile />
      </button>
    </div>
  );
};
