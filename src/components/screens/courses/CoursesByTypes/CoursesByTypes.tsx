import SupBar from '@/components/ui/courses/bars/SupBar'
import { CourseTypeItem } from '@/components/ui/courses/card/CourseTypeItem/CourseTypeItem'
import { AllCoursesType, IFrontCourses } from '@/components/ui/courses/card/list'
import styles from '../courses.module.scss';

export default function CoursesByTypes({typeCourses}: {typeCourses: string}) {
  return (
    <div> 
        <h2>нові курси вже доступні</h2>
        <SupBar/>
        <div className={styles.cardWrapper}>
          {AllCoursesType[typeCourses] 
          ? 
          AllCoursesType[typeCourses].map((courses:IFrontCourses) =>  <CourseTypeItem {...courses} />)  
          : 
          "Not found"}
        </div>
    </div>
  )
}
