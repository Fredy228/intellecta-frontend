import { type FC } from "react";

import styles from "./control-month.module.scss";

import { IconSmallRightArrow } from "@/components/reused/Icon/Icon";

type Props = {
  currentMonth: string | null;
};
const ScheduleControlMonth: FC<Props> = ({ currentMonth }) => {
  return (
    <div className={styles.controlMonth}>
      <div className={styles.controlMonth_wrapper}>
        <button
          type={"button"}
          className={`${styles.controlMonth_button} ${styles.prev}`}
        >
          <IconSmallRightArrow />
        </button>
        <span className={styles.controlMonth_value}>{currentMonth}</span>
        <button
          type={"button"}
          className={`${styles.controlMonth_button} ${styles.next}`}
        >
          <IconSmallRightArrow />
        </button>
      </div>
    </div>
  );
};
export default ScheduleControlMonth;
