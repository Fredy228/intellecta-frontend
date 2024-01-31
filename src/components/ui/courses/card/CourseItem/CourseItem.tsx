import Link from "next/link";
import { FC } from "react";
import { TCoursesProps } from "../list";
import styles from "./card.module.scss";

export const CourseItem: FC<TCoursesProps> = ({
  types,
  description,
  urlCheck,
  bg,
  images,
}) => {
  return (
    <ul className={styles.card}>
      <Link href={`/dashboard/courses/${urlCheck}`}>
        <div className={styles.card_top}>
          <div className={styles.card_image} style={{ background: bg }}>
            {images}
          </div>
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
