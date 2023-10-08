import { FC } from "react";

import styles from "./week-item-day.module.scss";
import { TLesson } from "@/components/ui/schedule/listschedule";
import { whatDayOfWeek } from "@/services/schedule/whatDayOfWeek";
import { whatThisDay } from "@/services/schedule/whatThisDay";

type Props = {
  day: TLesson[];
};
const WeekItemDay: FC<Props> = ({ day }) => {
  return (
    <div className={styles.day}>
      <h4 className={styles.day_title}>
        {whatDayOfWeek(day[0].start_date)}, {whatThisDay(day[0].start_date)}
      </h4>
      <span className={styles.day_countLesson}>{day.length} уроків</span>
      <ul className={styles.day_listLesson}>
        {day.map((lesson, index) => (
          <li key={index} className={styles.day_ItemLesson}>
            {index + 1}. {lesson.lesson_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WeekItemDay;
