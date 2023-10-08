import { TLesson } from "@/components/ui/schedule/listschedule";

type TBrokeLessons = {
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

  lessons.forEach((lesson) => {
    const separatorKey = `${lesson.year}-${
      lesson[separator === "week" ? "week_number" : "month"]
    }`;
    const dayKey = `${lesson.year}-${lesson.day}`;

    if (!lessonsBy[separatorKey]) {
      lessonsBy[separatorKey] = {};
    }
    if (!lessonsBy[separatorKey][dayKey]) {
      lessonsBy[separatorKey][dayKey] = [];
    }

    lessonsBy[separatorKey][dayKey].push(lesson);
  });

  return Object.values(lessonsBy);
};
