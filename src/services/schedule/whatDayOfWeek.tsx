import { DayNamesEnum } from "@/enums/names-calendar-enum";

export const whatDayOfWeek = (startDateString: string) => {
  const startDate = new Date(startDateString);

  const dayNames = [
    DayNamesEnum.Sunday,
    DayNamesEnum.Monday,
    DayNamesEnum.Tuesday,
    DayNamesEnum.Wednesday,
    DayNamesEnum.Thursday,
    DayNamesEnum.Friday,
    DayNamesEnum.Saturday,
  ];

  let dayOfWeek = null;

  if (startDate) {
    const numberDay = startDate.getDay();

    dayOfWeek = dayNames[numberDay];
  }

  return dayOfWeek;
};
