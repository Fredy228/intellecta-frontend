import { FC, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { IFrontCourses } from "@/components/ui/courses/card/list";
import styles from "./courses.module.scss";
import {
  IconBack,
  IconCalendar,
  IconFile,
  IconLearn,
  IconRocket,
  IconTime,
} from "@/components/reused/Icon/Icon";
export const CoursesByIdItem: FC<IFrontCourses> = ({
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
        <div className={styles.top_wrapper}>
          <h1 className={styles.title_page}>{titlePage}</h1>
          <h1 className={styles.description_page}>{descriptionPage}</h1>
        </div>
      </div>
      <ul className={styles.icons_list}>
        <li className={styles.icon_container}>
          <IconRocket />
          11 грудня старт
        </li>
        <li className={styles.icon_container}>
          <IconTime />
          20 занять
        </li>
        <li className={styles.icon_container}>
          <IconCalendar />2 заняття на тиждень
        </li>
        <li className={styles.icon_container}>
          <IconFile />
          сертифікат по закінченню
        </li>
        <li className={styles.icon_container}>
          <IconLearn />
          нагорода від Intellecta
        </li>
      </ul>
      <div className={styles.section_inner}>
        <div className={styles.main_info}>
          <h1 className={styles.title}>{main.mainTitle}</h1>
          <p>{main.mainDescription}</p>
          <h2 className={styles.title}>{target.targetTitle}</h2>
          <ul>
            {target.targetList.map((list: string, index: number) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <aside className={styles.aside_container}>
          <h1 className={styles.title}>{aside?.price}</h1>
          <ul className={styles.price_list}>
            {aside?.asideList.map((list: string, index: number) => (
              <li key={index} className={styles.price_item}>{list}</li>
            ))}
          </ul>
          <button className={styles.send_btn}>Записатися на курс</button>
        </aside>
      </div>
      <div className={styles.mentor}>
        <h1 className={styles.title}>Викладачі:</h1>
        <ul className={styles.mentor_cards}>
          {mentors.map((mentor) => (
            <Fragment key={mentor.idMentor}>
              <div className={styles.mentor_card}>
                <Image
                  src={mentor.imagesMentors}
                  alt={"Mentore Image"}
                  width={150}
                  height={150}
                />
                <li className={styles.mentor_fullName}>{mentor.fullname}</li>
                <li className={styles.mentor_about}>{mentor.about}</li>
              </div>
            </Fragment>
          ))}
        </ul>
      </div>
      <div>
        <h1 className={styles.title_courses}>{coursesProgram.coursesTitle}</h1>
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
