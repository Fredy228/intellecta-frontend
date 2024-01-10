import CoursesById from "@/components/screens/courses/CoursesById/CoursesById";

type TProps = {
  params: { idCourse: string };
};
export default function IdCourses({ params }: TProps) {
  return <CoursesById idCourse={params.idCourse} />;
}
