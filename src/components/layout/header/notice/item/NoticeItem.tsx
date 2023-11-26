import type { FC } from "react";
import styles from "@/components/ui/home/list-subjects/list-subjects.module.scss";
import Image from "next/image";
import { IconSmallRightArrow } from "@/components/reused/Icon/Icon";

type Props = {};
const NoticeItem: FC<Props> = () => {
  return (
    <div className={styles.listSubjects_itemWrapp}>
      <div className={styles.listSubjects_itemWrapperImg}>
        <Image
          src={`${process.env.NEXT_URL}/img/notice/notice-time.png`}
          alt={"Іконка повідомлення"}
          width={"32"}
          height={"32"}
          className={styles.listSubjects_itemImg}
        />
      </div>
      <div className={styles.listSubjects_itemNameWrapper}>
        <p className={styles.listSubjects_itemName}>Математика</p>
        <span className={styles.listSubjects_itemTeacher}>
          Скоро срок сдачи дз!
        </span>
      </div>
      <div className={styles.listSubjects_itemArrowWrapper}>
        <IconSmallRightArrow />
      </div>
    </div>
  );
};
export default NoticeItem;
