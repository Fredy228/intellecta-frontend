import { FC } from "react";
import { TAchievement } from "@/types/achievements";
import styles from "./AchievmentItem.module.scss";
export const AchievmentItem: FC<TAchievement> = ({ icon, named, bg }) => {
  return (
    <li className={styles.card_wrapper}>
      <div className={styles.card_icon} style={{ background: bg }}>
        {icon}
      </div>
      <span className={styles.named}>{named}</span>
    </li>
  );
};
