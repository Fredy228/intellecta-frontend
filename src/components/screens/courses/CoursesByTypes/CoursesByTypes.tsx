import SupBar from '@/components/ui/courses/bars/SupBar'
import { CourseTypeItem } from '@/components/ui/courses/card/CourseTypeItem/CourseTypeItem'
import { FrontEndCurses, IFrontCourses } from '@/components/ui/courses/card/list'
import React from 'react'

type TProps = {
    params:{ types: string };
  }

export default function CoursesByTypes({params}: TProps) {
  return (
    <div> 
        <h2>нові курси вже доступні</h2>
        <SupBar/>
        {FrontEndCurses.map((course: IFrontCourses) => (
            <CourseTypeItem {...course} />
        ))}
    </div>
  )
}
