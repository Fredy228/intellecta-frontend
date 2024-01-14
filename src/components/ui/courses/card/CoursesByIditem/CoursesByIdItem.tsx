import { FC, Fragment } from "react";
import { TFrontCourses } from "@/components/ui/courses/card/list";
import Link from "next/link";
import Image from "next/image";
import styles from "./courses.module.scss";
import {
  IconBack,
  IconCalendar,
  IconFile,
  IconLearn,
  IconRocket,
  IconTime,
} from "@/components/reused/Icon/Icon";
export const CoursesByIdItem: FC<TFrontCourses> = ({
  id,
  titlePage,
  descriptionPage,
  target,
  main,
  mentors,
  aside,
  coursesProgram,
}) => {
  return (
    <section className={styles.section} key={id}>
      <div className={styles.container}>
        <div className={styles.backMenu}>
          <IconBack />
          <Link href={`/dashboard/courses/`}>Повернутися</Link>
        </div>
        <div>
          <h1 className={styles.titlePage}>{titlePage}</h1>
          <h1 className={styles.descriptionPage}>{descriptionPage}</h1>
        </div>
      </div>
      <ul className={styles.iconsList}>
        <li>
          <IconRocket />
          11 грудня старт
        </li>
        <li>
          <IconTime />
          20 занять
        </li>
        <li>
          <IconCalendar />2 заняття на тиждень
        </li>
        <li>
          <IconFile />
          сертифікат по закінченню
        </li>
        <li>
          <IconLearn />
          нагорода від Intellecta
        </li>
      </ul>
      <div className={styles.seciotnInner}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>{main.mainTitle}</h1>
          <p>{main.mainDescription}</p>
          <h2 className={styles.title}>{target.targetTitle}</h2>
          <ul>
            {target.targetList.map((list: string, index: number) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <aside className={styles.asideContainer}>
          <h1 className={styles.title}>{aside?.price}</h1>
          <ul className={styles.priceList}>
            {aside?.asideList.map((list: string, index: number) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          <button className={styles.sendBtn}>Записатися на курс</button>
        </aside>
      </div>
      <div className={styles.mentorContainer}>
        <h1 className={styles.title}>Викладачі:</h1>
        <ul className={styles.mentorCards}>
          {mentors.map((mentor) => (
            <Fragment key={mentor.idMentor}>
              <div className={styles.mentorCard}>
                <Image
                  src={mentor.imagesMentors}
                  alt={"Mentore Image"}
                  width={150}
                  height={150}
                />
                <li className={styles.mentorFullName}>{mentor.fullname}</li>
                <li className={styles.mentorAbout}>{mentor.about}</li>
              </div>
            </Fragment>
          ))}
        </ul>
      </div>
      <div>
        <h1 className={styles.titleCourses}>{coursesProgram.coursesTitle}</h1>
        <Image
          src={coursesProgram.coursesImg ? coursesProgram.coursesImg : ""}
          alt={""}
          width={1200}
          height={450}
        />
      </div>
    </section>
  );
};
