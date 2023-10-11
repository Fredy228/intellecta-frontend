import { TLesson } from "@/components/ui/schedule/listschedule";
import { getNumberDayInMonth } from "@/services/schedule/getNumberDayInMonth";
import { getDayUntilFirstDay } from "@/services/schedule/getDayUntilFirstDay";

export type TBrokeLessons = {
  [name: string]: TLesson[];
};

type TScheduleLessons = {
  [name: string]: TBrokeLessons;
};

export const breakArrLessonTo = (
  separator: "month" | "week",
  lessons: TLesson[],
): TBrokeLessons[] => {
  const lessonsBy: TScheduleLessons = {};

  if (separator === "week") {
    lessons.forEach((lesson) => {
      const separatorKey = `${lesson.year}-${lesson.week_number}`;
      const dayKey = `${lesson.year}-${lesson.day}`;

      if (!lessonsBy[separatorKey]) {
        lessonsBy[separatorKey] = {};
      }
      if (!lessonsBy[separatorKey][dayKey]) {
        lessonsBy[separatorKey][dayKey] = [];
      }

      lessonsBy[separatorKey][dayKey].push(lesson);
    });
  }

  if (separator === "month") {
    const { countDayInMonth, year } = getNumberDayInMonth(
      lessons[0].start_date,
    );

    for (let day = 1; day < countDayInMonth; day++) {
      const separatorKey = `${year}-${lessons[0].month}`;
      const dayKey = `${year}-${
        lessons[0].month < 10 ? `0${lessons[0].month}` : lessons[0].month
      }-${day < 10 ? `0${day}` : day}`;

      if (!lessonsBy[separatorKey]) {
        lessonsBy[separatorKey] = {};
      }
      if (!lessonsBy[separatorKey][dayKey]) {
        lessonsBy[separatorKey][dayKey] = [];
      }
      const dayLessons = lessons.filter((lesson) => lesson.day === day);
      if (dayLessons.length) {
        dayLessons.forEach((lesson) => {
          lessonsBy[separatorKey][dayKey].push(lesson);
        });
      }
    }
  }

  return Object.values(lessonsBy);
};
