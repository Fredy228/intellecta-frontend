import CoursesByTypes from "@/components/screens/courses/CoursesByTypes/CoursesByTypes";

export enum EnumCourses {
  programming = '/dashboard/courses/programming',
  testing = '/dashboard/courses/testing',
  marketing = '/dashboard/courses/marketing',
}
export default function typeCourses({ params: { typeCourse: EnumCourses } }) {
  return (
    <main style={{overflowY: 'auto', display:'flex',width:'100%'}}>
      <CoursesByTypes params={EnumCourses.params}/>
    </main>
  )
}
