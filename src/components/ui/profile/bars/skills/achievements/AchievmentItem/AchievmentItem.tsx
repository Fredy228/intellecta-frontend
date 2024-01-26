import Image from "next/image";
import { FC } from "react";
import { TAchievivList } from "@/components/ui/profile/bars/skills/achievements/achieveList";
import styles from "./AchievmentItem.module.scss";
export const AchievmentItem: FC<TAchievivList> = ({ images, named }) => {
  return (
      <div className={styles.card_wrapper}>
        <Image src={images} alt={"card images"}
               sizes="100vw"
               width={0}
               height={0}
               className={styles.card_achive_img}
               style={{
                   width: '100%',
                   height: 'auto',
               }}
        />
        <li className={styles.named}>{named}</li>
      </div>
  );
};
