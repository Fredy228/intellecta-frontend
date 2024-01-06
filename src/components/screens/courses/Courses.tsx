import CoursesList from '@/components/ui/card/CoursesList/CoursesList'
import CoursesListOther from '@/components/ui/card/CoursesList/CoursesListOther'
import TestCardList from '@/components/ui/card/testCard/testCardList/TestCardList'
import styles from './courses.module.scss'
import Image from 'next/image'
export default function Courses() {
  return (
    <main className={styles.list}>        
      <h2 className={styles.title}>нові курси вже доступні</h2>
      <input placeholder='Пошук'/>
      <div className={styles.cardWrapper}>
        <CoursesList />
        <div className={styles.cardContainer}>
          <div>
            <TestCardList />
          </div>
          <div className={styles.cardInner}>
            <h1 className={styles.cardTitle}>Не знаєте, який курс обрати?</h1>
            <Image src={`${process.env.NEXT_URL}/img/courses/cardtest.png`} alt='test img' width={150} height={151}/>
            <p className={styles.cardDesc}>Ми створили тест, який вам допоможе обрати напрямок для вашого розвитку або професійного шляху.</p>
          </div>
        </div>
        <div className={styles.cardWrapper}>
          <CoursesListOther/>
          <div className={styles.cardInner}>
            <h1 className={styles.cardTitle}>Не знаєте, який курс обрати?</h1>
            <Image src={`${process.env.NEXT_URL}/img/courses/mentor.png`} alt='test img' width={150} height={151}/>
            <p className={styles.cardDesc}>Ми створили тест, який вам допоможе обрати напрямок для вашого розвитку або професійного шляху.</p>
          </div>
        </div>
      </div>
    </main>
  )
}



