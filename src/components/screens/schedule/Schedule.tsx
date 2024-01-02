"use client";

import { type NextPage } from "next";
import { useState } from "react";

import styles from "./schedule.module.scss";

import SelectedCustom, {
  TSelectedItem,
} from "@/components/reused/selected-custom/SelectedCustom";
import { listOption } from "@/components/screens/schedule/listOption";

import { listLesson, TLesson } from "@/components/ui/schedule/listschedule";
import ScheduleWeek from "@/components/ui/schedule/table-week/ScheduleWeek";
import ScheduleControlMonth from "@/components/ui/schedule/control-month/ScheduleControlMonth";
import {
  breakArrLessonTo,
  TBrokeLessons,
} from "@/services/schedule/breakArrLessonTo";
import { whatMothOfYear } from "@/services/schedule/whatMothOfYear";
import ScheduleDayMore from "@/components/ui/schedule/info-day-more/ScheduleDayMore";
import ScheduleMonth from "@/components/ui/schedule/table-month/ScheduleMonth";

const Schedule: NextPage = () => {
  const [currentOption, setCurrentOption] = useState<TSelectedItem>(
    listOption[0],
  );

  //==================
  const lessonBy = breakArrLessonTo(
    currentOption.value as "month" | "week",
    listLesson,
  );

  const [currentDayInf, setCurrentDayInf] = useState<TLesson[] | null>(null);

  const currentMonth = whatMothOfYear(listLesson[0].start_date);

  // console.log("currentDayInf", currentDayInf);
  //==================

  return (
    <main className={styles.schedule}>
      <div className={styles.schedule_titleWrapper}>
        <h2 className={styles.schedule_title}>Твій розклад чекає на тебе</h2>
        <SelectedCustom
          list={listOption}
          currentValue={currentOption}
          setValue={setCurrentOption}
          position={"right"}
        />
      </div>
      <div className={styles.schedule_wrapper}>
        <div className={styles.schedule_container}>
          <div className={`${styles.schedule_innerContainer} ${styles.main}`}>
            {currentOption.value === listOption[0].value ? (
              <ScheduleWeek
                listWeek={lessonBy[0]}
                setCurrentDayInf={setCurrentDayInf}
              />
            ) : (
              <ScheduleMonth
                listMonth={lessonBy[0]}
                setCurrentDayInf={setCurrentDayInf}
              />
            )}

            <ScheduleControlMonth currentMonth={currentMonth} />
          </div>
          <div
            className={`${styles.schedule_innerContainer} ${styles.infoDesktop}`}
          >
            {currentDayInf ? (
              <ScheduleDayMore currentDayInf={currentDayInf} />
            ) : (
              <div className={styles.info_wrapperDefault}>
                <p className={styles.info_textDefault}>
                  Виберіть день для відображення більшої інформації
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Schedule;

/*
SELECT
    WEEK(start_date) AS week_number,
    YEAR(start_date) AS year,
    lesson_name,
    start_date,
    duration_minutes
FROM
    lessons
ORDER BY
    year, week_number, start_date;
 */
