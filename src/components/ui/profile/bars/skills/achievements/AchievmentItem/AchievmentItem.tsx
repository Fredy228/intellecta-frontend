import Image from "next/image";
import { FC, Fragment } from "react";
import { TAchievivList } from "@/components/ui/profile/bars/skills/achievements/achieveList";
import styles from "./AchievmentItem.module.scss";
export const AchievmentItem: FC<TAchievivList> = ({ id, images, named }) => {
  return (
    <>
      <div key={id} className={styles.cardWrapper}>
        <Image src={images} alt={"card images"} width={75} height={75} />
        <li className={styles.named}>{named}</li>
      </div>
    </>
  );
};
