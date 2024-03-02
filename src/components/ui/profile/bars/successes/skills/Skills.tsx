import { IconAddList } from "@/components/reused/Icon/Icon";
import styles from "./skills.module.scss";

export const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <div className={styles.languages}>
      <h1 className={styles.title}>Скіли</h1>
      <ul className={styles.skills_menu_list}>
        {skills.map((lang: string, idx: number) => (
          <li key={idx} className={styles.skills_menu_item}>
            {lang}
          </li>
        ))}
        <button className={styles.add_list}>
          <IconAddList />
        </button>
      </ul>
    </div>
  );
};
