import { supBarsLists } from './barsList'
import styles from './bar.module.scss'
export default function SupBar() {
  return (
    <div className={styles.supBarWrapper}>
        {supBarsLists.map(list => ( 
          <button key={list.id}>{list.named}</button>
        ))}
    </div>
  )
}
