import { ProgramLang } from "@/components/ui/profile/bars/skills/languages/lang-list";
import { IconAddList } from "@/components/reused/Icon/Icon";
import styles from "@/components/ui/profile/bars/skills/languages/language.module.scss";

export const Languages = () => {
  return (
    <div className={styles.languages}>
      <h1 className={styles.title}>Скіли</h1>
      <ul className={styles.languages_menu_list}>
        {ProgramLang.lang.map((lang: string, idx: number) => (
          <li key={idx} className={styles.languages_menu_item}>{lang}</li>
        ))}
        <button className={styles.add_list}>
          <IconAddList />
        </button>
      </ul>
      <div className={styles.rate}>
        <h2 className={styles.rate_title}>Рейтинг</h2>
        <p className={styles.rate_numbers}>7.5/10</p>
      </div>
    </div>
  );
};
