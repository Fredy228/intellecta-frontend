import { AchievmentItem } from "@/components/ui/profile/bars/skills/achievements/AchievmentItem/AchievmentItem";
import styles from "./achievement.module.scss";
import {
  Achieve,
  TAchievivList,
} from "@/components/ui/profile/bars/skills/achievements/achieveList";
export const Achievement = () => {
  return (
    <div>
      <h1 className={styles.title}>Досягнення</h1>
      <ul className={styles.achievement_container}>
        {Achieve.map((achive: TAchievivList, idx:number) => (
          <AchievmentItem key={idx} {...achive} />
        ))}
      </ul>
    </div>
  );
};
