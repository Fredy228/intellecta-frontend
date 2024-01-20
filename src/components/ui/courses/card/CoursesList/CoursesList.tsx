import { listItem, TCoursesProps } from "../list";
import { CourseItem } from "../CourseItem/CourseItem";

export default function CoursesList() {
  return (
    <>
      {listItem.map((course: TCoursesProps, idx:number) => (
        <CourseItem key={idx} {...course} />
      ))}
    </>
  );
}
