import { FC } from "react";
import styles from "./StructureItem.module.scss";
import { TStructure } from "@/types/structures";
import Image from "next/image";
export const StructureItem: FC<TStructure> = ({ title, avatar }) => {
  return (
    <li className={styles.card_wrapper}>
      <Image
        src={avatar}
        className={styles.image}
        width={72}
        height={72}
        alt={title}
      />
      <span className={styles.title}>{title}</span>
    </li>
  );
};
