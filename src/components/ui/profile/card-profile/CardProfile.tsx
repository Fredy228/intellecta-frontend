import Image from "next/image";
import {
  IconLearnVerSec,
  IconSettingsProfile,
  IconVerify,
} from "@/components/reused/Icon/Icon";
import styles from "./cardProfile.module.scss";
export const CardProfile = () => {
  return (
    <div className={styles.card}>
      <Image
        src={`${process.env.NEXT_URL}/img/profile/avatar.png`}
        alt={""}
        width={150}
        height={150}
      />
      <div className={styles.cardWrapper}>
        <div className={styles.titleWrapper}>
          <IconVerify />
          <h1 className={styles.title}>Смагрович Олексій</h1>
        </div>
        <h2 className={styles.subtitle}>Full Stack developer at Intellecta</h2>
        <div className={styles.knowledge}>
          <IconLearnVerSec />
          <h3 className={styles.role}>ментор</h3>
        </div>
      </div>
      <button className={styles.settings}>
        <IconSettingsProfile />
      </button>
    </div>
  );
};
