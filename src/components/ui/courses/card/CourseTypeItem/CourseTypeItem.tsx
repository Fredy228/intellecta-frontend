import { IFrontCourses } from "../list";
import { FC } from "react";
import Link from "next/link";
import { IconLearn, IconRocket, IconTime } from "@/components/reused/Icon/Icon";
import styles from "@/components/ui/courses/card/CourseItem/card.module.scss";

export const CourseTypeItem: FC<IFrontCourses> = ({
  id,
  types,
  company,
  description,
  urlCheck,
    icon,
    bg,
}) => {
  return (
    <ul className={styles.card}>
      <Link href={`/dashboard/courses/${urlCheck}/${id}`}>
        <div className={styles.card_top} >
          <div className={styles.card_image} style={{background:bg}}>
            {icon}
          </div>
          <div>
            <h1 className={styles.title}>{types}</h1>
            <div className={styles.subtitle_wrapper}>
              <h2 className={styles.subtitle}>{company}</h2>
              <li className={styles.icon_container}>
                <IconLearn />
              </li>
            </div>
          </div>
        </div>
        <div className={styles.bar_wrapper}>
          <li className={styles.icon_container}>
            <IconRocket />
            <p>11 грудня старт</p>
          </li>
          <li className={styles.icon_container}>
            <IconTime />
            <p>20 занять</p>
          </li>
        </div>
        <li className={styles.descriptions}>{description}</li>
      </Link>
    </ul>
  );
};
