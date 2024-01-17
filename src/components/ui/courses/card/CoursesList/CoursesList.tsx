import { listItem, TCoursesProps } from "../list";
import { CourseItem } from "../CourseItem/CourseItem";
import Link from "next/link";

export default function CoursesList() {
  return (
    <>
      {listItem.map((course: TCoursesProps) => (
        <CourseItem {...course} />
      ))}
    </>
  );
}
