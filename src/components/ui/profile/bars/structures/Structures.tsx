import { TStructure } from "@/types/structures";
import styles from "./structures.module.scss";
import { StructureItem } from "@/components/ui/profile/bars/structures/StructureItem/StructureItem";

export function Structures({ list }: { list: TStructure[] }) {
  return (
    <div className={styles.structures_wrapper}>
      <h1 className={styles.title}>Структурні підрозділи</h1>
      <ul className={styles.structures}>
        {list.map((structure: TStructure, idx: number) => (
          <StructureItem key={idx} {...structure} />
        ))}
      </ul>
      <button className={styles.showAll}>Переглянути всі</button>
    </div>
  );
}
