import CoursesByTypes from "@/components/screens/courses/CoursesByTypes/CoursesByTypes";
import { EnumCourses } from "@/enums/courses/courseType-enum";

type TProps = {
  params: { typeCourse: EnumCourses };
};
export default function typeCourses({ params }: TProps) {
  return (
    <main style={{ overflowY: "auto", display: "flex", width: "100%" }}>
      <CoursesByTypes typeCourses={params.typeCourse} />
    </main>
  );
}
