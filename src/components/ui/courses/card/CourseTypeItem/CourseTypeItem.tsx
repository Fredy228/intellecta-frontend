import Image from 'next/image'
import { IFrontCourses } from '../list'
import { FC } from 'react'
import Link from 'next/link'
import { IconLearn, IconRocket, IconTime } from '@/components/reused/Icon/Icon'
import styles from '@/components/ui/courses/card/CourseItem/card.module.scss'

export const CourseTypeItem: FC<IFrontCourses> = ({id, images, types, company, description,urlCheck}) => {
  return (
        <ul key={id} className={styles.card}>
          <Link href={`/dashboard/courses/${urlCheck}/${id}`}>
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
                  <div>
                    <h2 className={styles.subtitle}>{company}</h2>
                    <IconLearn/>
                  </div>
                </div>
              </div>
              <div className={styles.barWrapper}>
                <IconRocket/>
                <p>11 грудня старт</p>
                <IconTime/>
                <p>20 занять</p>
              </div>
              <li className={styles.descriptions}>{description}</li>
          </Link>
        </ul>
  )
}
