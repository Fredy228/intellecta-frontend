import Image from 'next/image';
import styles from './card.module.scss'
import { listItem } from './list';
import { IconLearn, IconRocket, IconTime } from '@/components/reused/Icon/Icon';

export default function cardItem() {
  return (
    <div className={styles.cardWrapper}> 
         {listItem.map(item => ( 
          <div key={item.id} className={styles.card}>
            <div className={styles.cardTop}>
              <Image
                src={item.images}
                width={109}
                height={108}
                alt='Courses image'
                className={styles.cardImg}
              />
              <div>
                <h1 className={styles.title}>{item.types}</h1>
                <div className={styles.cardBottomContent}>
                  <h2 className={styles.subtitle}>{item.company}</h2>
                  <div className={styles.iconWrapper}><IconLearn/></div>
                </div>
              </div>
            </div>
              <div className={styles.barWrapper}>
                <IconRocket/>
                {item.start}
                <IconTime/>
                {item.sessions}
              </div>
            <div className={styles.descriptions}>{item.description}</div>
          </div>
        ))}
    </div>
  )
}
