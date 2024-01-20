import { NextPage } from "next";
import Image from "next/image";
import CoursesList from "@/components/ui/courses/card/CoursesList/CoursesList";
import CoursesListOther from "@/components/ui/courses/card/CoursesList/CoursesListOther";
import TestCardList from "@/components/ui/courses/card/TestCard/TestCardList/TestCardList";
import { IconSearchCourses } from "@/components/reused/Icon/Icon";
import styles from "./courses.module.scss";

export const Courses: NextPage = () => {
  return (
    <main className={styles.list}>
      <h2 className={styles.title}>нові курси вже доступні</h2>
      <div className={styles.inputInner}>
        <input placeholder="Пошук" className={styles.input} />
        <button className={styles.searchButton}>
          <IconSearchCourses />
        </button>
      </div>
      <div className={styles.cardWrapper}>
        <CoursesList />
      </div>
      <div className={styles.cardContainer}>
        <TestCardList />
        <div className={styles.cardInner}>
          <h1 className={styles.cardTitle}>Не знаєте, який курс обрати?</h1>
          <Image
            src={`${process.env.NEXT_URL}/img/courses/cardtest.png`}
            alt="test img"
            width={150}
            height={151}
          />
          <p className={styles.cardDesc}>
            Ми створили тест, який вам допоможе обрати напрямок для вашого
            розвитку або професійного шляху.
          </p>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <CoursesListOther />
        <div className={styles.cardInner}>
          <h1 className={styles.cardTitle}>Не знаєте, який курс обрати?</h1>
          <Image
            src={`${process.env.NEXT_URL}/img/courses/mentor.png`}
            alt="test img"
            width={155}
            height={171}
          />
          <p className={styles.cardDesc}>
            Знайди свого спеціаліста та напрямок, в якому хочеш розвиватися!
            Переглядай профілі менторів та обирай, що хочеш вивчати
          </p>
        </div>
      </div>
    </main>
  );
};
