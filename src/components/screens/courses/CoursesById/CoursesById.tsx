"use client";
import styles from "../courses.module.scss";
import { CoursesByIdItem } from "@/components/ui/courses/card/CoursesByIditem/CoursesByIdItem";
import {
  FrontEndCurses,
  TestingCurses,
  MarketingCurses,
  IFrontCourses,
} from "@/components/ui/courses/card/list";
import { usePathname } from "next/navigation";
import { EnumCourses } from "@/enums/courses/courseType-enum";
export default function CoursesById({ idCourse }: { idCourse: string }) {
  const listFrontEnd: IFrontCourses = FrontEndCurses.find(
    (i) => idCourse === i.id,
  );
  const listTesting: IFrontCourses = TestingCurses.find(
    (i) => idCourse === i.id,
  );
  const listMarketing: IFrontCourses = MarketingCurses.find(
    (i) => idCourse === i.id,
  );
  const pathname = usePathname();
  const arr = pathname.split(`/`);
  return (
    <div>
      <div className={styles.cardWrapper}>
        {arr.map((i) =>
          i === EnumCourses.PROGRAMMING ? (
            <CoursesByIdItem key={idCourse} {...listFrontEnd} />
          ) : i === EnumCourses.TESTING ? (
            <CoursesByIdItem key={idCourse} {...listTesting} />
          ) : i === EnumCourses.MARKETING ? (
            <CoursesByIdItem key={idCourse} {...listMarketing} />
          ) : null,
        )}
      </div>
    </div>
  );
}
