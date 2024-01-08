'use client'
import { EnumCourses } from '@/app/dashboard/courses/[typeCourse]/page'
import SupBar from '@/components/ui/courses/bars/SupBar'
import { CourseTypeItem } from '@/components/ui/courses/card/CourseTypeItem/CourseTypeItem'
import { FrontEndCurses, IFrontCourses, TestingCurses } from '@/components/ui/courses/card/list'
import { usePathname } from 'next/navigation'

export default function CoursesByTypes() {
  const pathname = usePathname()
  return (
    <div> 
        <h2>нові курси вже доступні</h2>
        <span>{pathname}</span>
        <SupBar/>
        {pathname === EnumCourses.programming
        ? 
        FrontEndCurses.map((course: IFrontCourses) => (
            <CourseTypeItem {...course} />
        ))
        :
        pathname === EnumCourses.testing 
        ?  
        TestingCurses.map((course: IFrontCourses) => (
          <CourseTypeItem {...course} />
      ))
        :
        // TestingCurses.map((course: IFrontCourses) => (
        //   <CourseTypeItem {...course} />
        // ))
        null
      }
        
    </div>
  )
}
