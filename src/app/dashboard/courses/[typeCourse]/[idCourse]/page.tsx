import CoursesById from "@/components/screens/courses/CoursesById/CoursesById";

type TProps = {
  params: { idCourse: string };
};
export default function IdCourses({ params }: TProps) {
  return (
    <main
      style={{
        overflowY: "auto",
        display: "flex",
        width: "100%",
        paddingRight: "15px",
      }}
    >
      <CoursesById idCourse={params.idCourse} />
    </main>
  );
}
