import { OtherCurses, TCoursesProps } from "../list";
import { CourseItem } from "../CourseItem/CourseItem";
import Link from "next/link";

export default function CoursesListOther() {
  return (
    <>
      {OtherCurses.map((course: TCoursesProps) => (
        <CourseItem {...course} />
      ))}
    </>
  );
}
