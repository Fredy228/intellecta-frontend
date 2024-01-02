import { type Dispatch, type FC, type SetStateAction } from "react";

import styles from "./schedule-week.module.scss";

import { TLesson } from "@/components/ui/schedule/listschedule";
import WeekItemDay from "@/components/ui/schedule/table-week/item-day/WeekItemDay";

type Props = {
  listWeek: { [name: string]: TLesson[] };
  setCurrentDayInf: Dispatch<SetStateAction<TLesson[] | null>>;
};

const ScheduleWeek: FC<Props> = ({ listWeek, setCurrentDayInf }) => {
  const keysListDay = Object.keys(listWeek);

  return (
    <ul className={styles.scheduleWeek_list}>
      {keysListDay.map((key) => (
        <li
          key={key}
          className={styles.scheduleWeek_item}
          onClick={() => setCurrentDayInf(listWeek[key])}
        >
          <WeekItemDay day={listWeek[key]} />
        </li>
      ))}
    </ul>
  );
};
export default ScheduleWeek;
