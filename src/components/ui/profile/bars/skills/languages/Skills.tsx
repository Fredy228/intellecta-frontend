import { IconAddList } from "@/components/reused/Icon/Icon";
import styles from "@/components/ui/profile/bars/skills/languages/language.module.scss";

export const Skills = ({
  skills,
  rating,
}: {
  skills: string[];
  rating: number;
}) => {
  return (
    <div className={styles.languages}>
      <h1 className={styles.title}>Скіли</h1>
      <ul className={styles.languages_menu_list}>
        {skills.map((lang: string, idx: number) => (
          <li key={idx} className={styles.languages_menu_item}>
            {lang}
          </li>
        ))}
        <button className={styles.add_list}>
          <IconAddList />
        </button>
      </ul>
      <div className={styles.rate}>
        <h2 className={styles.rate_title}>Рейтинг</h2>
        <p className={styles.rate_numbers}>{rating}/10</p>
      </div>
    </div>
  );
};
