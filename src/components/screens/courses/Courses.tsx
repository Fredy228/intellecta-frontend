import SupBar from './bars/SupBar';
import TopBar from './bars/TopBar';
import CardItem from './card/CardItem';
import styles from './courses.module.scss'
export default function Courses() {
  return (
    <div>        
      <h2 className={styles.title}>нові курси вже доступні</h2>
      <TopBar/>
      <SupBar/>
      <CardItem/>
    </div>
  )
}



