import CoursesById from "@/components/screens/courses/CoursesById/CoursesById";

type TProps = {
  params: { idCourse: string | number };
};
export default function IdCourses({ params }: TProps) {
  return <CoursesById params={params.idCourse} />;
}
