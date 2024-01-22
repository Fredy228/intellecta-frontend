import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { TCoursesProps } from "../list";
import styles from "./card.module.scss";

export const CourseItem: FC<TCoursesProps> = async ({

  images,
  types,
  description,
  urlCheck,
                                                      attr,
                                                    }) => {
  return (
    <ul  className={styles.card}>
      <Link href={`/dashboard/courses/${urlCheck}`}>
        <div className={styles.card_top}>
          <Image
            src={images}
            width={109}
            height={108}
            alt="Courses image"
            className={styles.card_img}
            data-attribute={attr}
          />
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
