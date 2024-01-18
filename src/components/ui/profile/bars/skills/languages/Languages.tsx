import { LanguagesItem } from "@/components/ui/profile/bars/skills/languages/LanguagesItem/LanguagesItem";
import { ProgramLang } from "@/components/ui/profile/bars/skills/languages/LanguagesItem/lang-list";
import { IconAddList } from "@/components/reused/Icon/Icon";
import styles from "@/components/ui/profile/bars/skills/languages/language.module.scss";

export const Languages = () => {
  return (
    <div>
      <h1 className={styles.title}>Скіли</h1>
      <ul className={styles.menuList}>
        {ProgramLang.lang.map((lang: string, idx: number) => (
          <LanguagesItem key={idx} lang={...lang} />
        ))}
        <button className={styles.addList}>
          <IconAddList />
        </button>
      </ul>
      <div className={styles.rate}>
        <h2>Рейтинг</h2>
        <p>7.5/10</p>
      </div>
    </div>
  );
};
