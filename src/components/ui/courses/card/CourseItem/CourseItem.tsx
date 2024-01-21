import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { TCoursesProps } from "../list";
import styles from "./card.module.scss";

export const CourseItem: FC<TCoursesProps> = ({
  images,
  types,
  description,
  urlCheck,
}) => {
  return (
    <ul  className={styles.card}>
      <Link href={`/dashboard/courses/${urlCheck}`}>
        <div className={styles.cardTop}>
          <Image
            src={images}
            width={109}
            height={108}
            alt="Courses image"
            className={styles.cardImg}
          />
          <div>
            <h1 className={styles.title}>{types}</h1>
          </div>
        </div>
        <span className={styles.barWrapper}></span>
        <li className={styles.descriptions}>{description}</li>
      </Link>
    </ul>
  );
};
