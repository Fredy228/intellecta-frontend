import Link from "next/link";
import { FC } from "react";
import { TCoursesProps } from "../list";
import styles from "./card.module.scss";
import {IconsImport, listOptionsImg} from "@/components/reused/Icon/IconsImport";

export const CourseItem: FC<TCoursesProps> =  ({
  types,
  description,
  urlCheck,
}) => {
  return (
    <ul  className={styles.card}>
      <Link href={`/dashboard/courses/${urlCheck}`}>
        <div className={styles.card_top}>
              <IconsImport />
          <div className={styles.type_container}>
            <h1 className={styles.title}>{types}</h1>
          </div>
        </div>
        <span className={styles.bar_wrapper}></span>
        <li className={styles.descriptions}>{description}</li>
      </Link>
    </ul>
  );
};
