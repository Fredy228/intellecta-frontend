import type { FC } from "react";

import styles from "./notice.module.scss";
import NoticeItem from "@/components/layout/header/notice/item/NoticeItem";

const Notice: FC = () => {
  return (
    <div className={styles.notice}>
      <ul className={styles.notice_list}>
        <li className={styles.notice_item}>
          <NoticeItem />
        </li>
        <li className={styles.notice_item}>
          <NoticeItem />
        </li>
      </ul>
    </div>
  );
};
export default Notice;
