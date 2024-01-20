"use client";
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
  const listFrontEnd: IFrontCourses | undefined = FrontEndCurses?.find(
    (i: IFrontCourses) => idCourse === i.id,
  );
  const listTesting: IFrontCourses | undefined = TestingCurses?.find(
    (i) => idCourse === i.id,
  );
  const listMarketing: IFrontCourses | undefined = MarketingCurses?.find(
    (i) => idCourse === i.id,
  );
  const pathname = usePathname();
  const arr = pathname.split(`/`);
  if (listFrontEnd && listTesting && listMarketing) {
    return (
      <>
        {arr.map((i) =>
          i === EnumCourses.PROGRAMMING ? (
            <CoursesByIdItem key={idCourse} {...listFrontEnd} />
          ) : i === EnumCourses.TESTING ? (
            <CoursesByIdItem key={idCourse} {...listTesting} />
          ) : i === EnumCourses.MARKETING ? (
            <CoursesByIdItem key={idCourse} {...listMarketing} />
          ) : null,
        )}
      </>
    );
  } else {
    return null;
  }
}
