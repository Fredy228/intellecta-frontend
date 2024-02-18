import { AchievmentItem } from "@/components/ui/profile/bars/skills/achievements/AchievmentItem/AchievmentItem";
import styles from "./achievement.module.scss";
import {
  TAchievement,
} from "@/components/ui/profile/bars/skills/achievements/achieveList";
export const Achievement = ({achievements} : { achievements: TAchievement[] }) => {
  return (
    <div className={styles.acivement_container}>
      <h1 className={styles.title}>Досягнення</h1>
      <ul className={styles.achievement_container}>
        {achievements.map((achive: TAchievement, idx:number) => (
          <AchievmentItem key={idx} {...achive} />
        ))}
      </ul>
    </div>
  );
};
