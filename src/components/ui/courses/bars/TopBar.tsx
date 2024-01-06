import { barsLists } from './barsList';
import styles from './bar.module.scss'
export default function TopBar() {
  return (
    <div className={styles.barWrapper}>
        {barsLists.map(list => ( 
            <button key={list.id}>{list.named}</button>
        ))}
    </div>
  )
}
