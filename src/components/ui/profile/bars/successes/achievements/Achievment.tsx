import { AchievmentItem } from "@/components/ui/profile/bars/successes/achievements/AchievmentItem/AchievmentItem";
import styles from "./achievement.module.scss";
import { TAchievement } from "@/types/achievements";
export const Achievement = ({
  achievements,
}: {
  achievements: TAchievement[];
}) => {
  return (
    <div className={styles.achievement_wrapper}>
      <h1 className={styles.title}>Досягнення</h1>
      <ul className={styles.achievement_container}>
        {achievements.map((achievement: TAchievement, idx: number) => (
          <AchievmentItem key={idx} {...achievement} />
        ))}
      </ul>
    </div>
  );
};
