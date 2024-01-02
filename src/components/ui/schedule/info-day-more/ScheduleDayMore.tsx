import { type FC, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import stylesWD from "@/components/ui/schedule/table-week/item-day/week-item-day.module.scss";
import styles from "./info-day-more.module.scss";

import { whatDayOfWeek } from "@/services/schedule/whatDayOfWeek";
import { whatThisDay } from "@/services/schedule/whatThisDay";
import { TLesson } from "@/components/ui/schedule/listschedule";

type Props = {
  currentDayInf: TLesson[];
};
const ScheduleDayMore: FC<Props> = ({ currentDayInf }) => {
  return (
    <div className={styles.dayMore}>
      <h4 className={stylesWD.day_title}>
        {currentDayInf.length
          ? `${whatDayOfWeek(currentDayInf[0].start_date)}, ${whatThisDay(
              currentDayInf[0].start_date,
            )}`
          : "Немає уроків"}
      </h4>
      <span className={stylesWD.day_countLesson}>
        Кількість уроків: {currentDayInf.length}
      </span>
      <ul className={styles.dayMore_listLesson}>
        {currentDayInf.map((lesson, index) => (
          <Fragment key={index}>
            <li className={styles.dayMore_itemLesson}>
              <p className={styles.dayMore_nameLesson}>
                {index + 1}. {lesson.lesson_name}
              </p>
              <span className={styles.dayMore_timeLesson}>
                {lesson.start_date.split(" ")[1].slice(0, 5)} - **:**
              </span>
            </li>
            <li className={styles.dayMore_infoLesson}>
              <Image
                className={styles.dayMore_imgLesson}
                src={`${process.env.NEXT_URL}/img/subjects/history.png`}
                alt={"Icon subject"}
                width={32}
                height={32}
              />
              <Link
                className={styles.dayMore_linkHomework}
                href={"/dashboard/homework"}
              >
                д.з.
              </Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
export default ScheduleDayMore;
