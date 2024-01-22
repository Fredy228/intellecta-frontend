import Image from 'next/image'
import { Fragment } from 'react'
import { supBarsLists } from './barsList'
import styles from './bar.module.scss'
export default function SupBar() {
  return (
    <div className={styles.supBarWrapper}>
        {supBarsLists.map(list => ( 
          <Fragment key={list.id}>
            <button className={styles.btn}>
              <Image src={list.images} width={25} height={25} alt='courses icon'/>
              {list.named}
            </button>
          </Fragment>
        ))}
    </div>
  )
}
