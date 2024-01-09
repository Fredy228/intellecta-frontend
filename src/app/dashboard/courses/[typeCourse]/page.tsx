import CoursesByTypes from "@/components/screens/courses/CoursesByTypes/CoursesByTypes";

type TProps = {
  params: { typeCourse: string };
};
export default function typeCourses({ params }: TProps) {
  return (
    <main style={{ overflowY: "auto", display: "flex", width: "100%" }}>
      <CoursesByTypes typeCourses={params.typeCourse} />
    </main>
  );
}
