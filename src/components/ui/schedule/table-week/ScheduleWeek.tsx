import { FC } from "react";

import styles from "./schedule-week.module.scss";
import { TLesson } from "@/components/ui/schedule/listschedule";
import WeekItemDay from "@/components/ui/schedule/table-week/item-day/WeekItemDay";

type Props = {
  listWeek: { [name: string]: TLesson[] };
};

const ScheduleWeek: FC<Props> = ({ listWeek }) => {
  const keysListDay = Object.keys(listWeek);

  return (
    <ul className={styles.scheduleWeek_list}>
      {keysListDay.map((key) => (
        <li key={key} className={styles.scheduleWeek_item}>
          <WeekItemDay day={listWeek[key]} />
        </li>
      ))}
    </ul>
  );
};
export default ScheduleWeek;
