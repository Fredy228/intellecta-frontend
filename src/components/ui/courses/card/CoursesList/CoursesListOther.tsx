import { OtherCurses, TCoursesProps } from '../list';
import { CourseItem } from '../CourseItem/CourseItem';


export default function CoursesListOther() {
  return (
    <>
      {OtherCurses.map((course: TCoursesProps) => (
          <CourseItem {...course}/>
      ))}
    </>
  )
}
