import CoursesByTypes from "@/components/screens/courses/CoursesByTypes/CoursesByTypes";

type TProps = {
  params:{ types:string };
}
export default function typeCourses({params}: TProps) {
  return (
    <main style={{overflowY: 'auto', display:'flex',width:'100%'}}>
      <CoursesByTypes params={params} />
    </main>
  )
}
