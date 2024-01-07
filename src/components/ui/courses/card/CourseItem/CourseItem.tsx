import styles from './card.module.scss'
import Image from 'next/image'
import { TCoursesProps } from '../list'
import { FC } from 'react'
import Link from 'next/link'
import { IconRocket, IconTime } from '@/components/reused/Icon/Icon'

export const CourseItem: FC<TCoursesProps> = ({id, images, types, description}) => {
  return (
        <ul key={id} className={styles.card}>
          <Link href={`/dashboard/courses/${types}`}>
              <div className={styles.cardTop}>
                <Image
                  src={images}
                  width={109}
                  height={108}
                  alt='Courses image'
                  className={styles.cardImg}
                />
                <div>
                  <h1 className={styles.title}>{types}</h1>
                </div>
              </div>
              <span className={styles.barWrapper}></span>
              <li className={styles.descriptions}>{description}</li>
          </Link>
        </ul>
  )
}
