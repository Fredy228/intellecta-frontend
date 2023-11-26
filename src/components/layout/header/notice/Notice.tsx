import type { FC } from "react";
import { motion } from "framer-motion";

import styles from "./notice.module.scss";
import NoticeItem from "@/components/layout/header/notice/item/NoticeItem";

type Props = {
  isShow: boolean;
};
const Notice: FC<Props> = ({ isShow }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={isShow ? { zIndex: 110 } : {}}
      className={styles.notice}
    >
      <ul className={styles.notice_list}>
        <li className={styles.notice_item}>
          <NoticeItem />
        </li>
        <li className={styles.notice_item}>
          <NoticeItem />
        </li>
      </ul>
    </motion.div>
  );
};
export default Notice;
