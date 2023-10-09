import { FC } from "react";

import styles from "./month-item-day.module.scss";
import { TLesson } from "@/components/ui/schedule/listschedule";
import { whatThisDay } from "@/services/schedule/whatThisDay";

type Props = {
  day: TLesson[];
  keyDay: string;
};
const MonthItemDay: FC<Props> = ({ day, keyDay }) => {
  const date = new Date(keyDay);
  const numberDay = date.getDate();
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  return (
    <div className={styles.day}>
      <span
        className={`${styles.day_number} ${isWeekend ? styles.weekend : ""}`}
      >
        {numberDay}
      </span>
    </div>
  );
};
export default MonthItemDay;
