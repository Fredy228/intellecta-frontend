"use client";
import styles from "../courses.module.scss";
import { CoursesByIdItem } from "@/components/ui/courses/card/CoursesByIditem/CoursesByIdItem";
import {
  FrontEndCurses,
  TestingCurses,
  MarketingCurses,
} from "@/components/ui/courses/card/list";
import { usePathname } from "next/navigation";
import { EnumCourses } from "@/enums/courses/courseType-enum";
export default function CoursesById({ idCourse }: { idCourse: string }) {
  const listFrontEnd = FrontEndCurses.find((i) => idCourse === i.id);
  const listTesting = TestingCurses.find((i) => idCourse === i.id);
  const listMarketing = MarketingCurses.find((i) => idCourse === i.id);
  const pathname = usePathname();
  const arr = pathname.split(`/`);
  return (
    <div>
      <div className={styles.cardWrapper}>
        {arr.map((i) =>
          i === EnumCourses.PROGRAMMING ? (
            <CoursesByIdItem key={idCourse} id={idCourse} {...listFrontEnd} />
          ) : i === EnumCourses.TESTING ? (
            <CoursesByIdItem key={idCourse} id={idCourse} {...listTesting} />
          ) : i === EnumCourses.MARKETING ? (
            <CoursesByIdItem key={idCourse} id={idCourse} {...listMarketing} />
          ) : null,
        )}
      </div>
    </div>
  );
}
