import { FC } from "react";
import { TAchievement } from "@/components/ui/profile/bars/skills/achievements/achieveList";
import styles from "./AchievmentItem.module.scss";
export const AchievmentItem: FC<TAchievement> = ({ icon, named,bg }) => {
  return (
      <div className={styles.card_wrapper}>
          <li className={styles.card_icon} style={{background:bg}}>
              {icon}
          </li>
        <li className={styles.named}>{named}</li>
      </div>
  );
};
