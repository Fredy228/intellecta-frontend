import { Dispatch, FC, SetStateAction } from "react";

import styles from "./schedule-month.module.scss";
import { TLesson } from "@/components/ui/schedule/listschedule";
import MonthItemDay from "@/components/ui/schedule/table-month/item-day/MonthItemDay";
import { getDayUntilFirstDay } from "@/services/schedule/getDayUntilFirstDay";

type Props = {
  listMonth: { [name: string]: TLesson[] };
  setCurrentDayInf: Dispatch<SetStateAction<TLesson[] | null>>;
};
const ScheduleMonth: FC<Props> = ({ listMonth, setCurrentDayInf }) => {
  const keysListDay = Object.keys(listMonth);
  const daysToFirst = getDayUntilFirstDay(keysListDay[0]);

  const plugs = [];

  for (let i = 1; i <= daysToFirst; i++) {
    plugs.push(<li key={i}></li>);
  }

  return (
    <ul
      className={styles.scheduleMonth_list}
      style={
        daysToFirst
          ? { gridTemplateRows: "repeat(6, minmax(50px, 1fr))" }
          : { gridTemplateRows: "repeat(5, minmax(50px, 1fr))" }
      }
    >
      {plugs}
      {keysListDay.map((key) => (
        <li
          key={key}
          className={styles.scheduleMonth_item}
          onClick={() => setCurrentDayInf(listMonth[key])}
        >
          <MonthItemDay keyDay={key} day={listMonth[key]} />
        </li>
      ))}
    </ul>
  );
};
export default ScheduleMonth;
