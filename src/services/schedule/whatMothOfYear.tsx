import { MonthNamesEnum } from "@/enums/names-calendar-enum";

export const whatMothOfYear = (startDateString: string): string | null => {
  const startDate = new Date(startDateString);

  const monthNames = [
    MonthNamesEnum.January,
    MonthNamesEnum.February,
    MonthNamesEnum.March,
    MonthNamesEnum.April,
    MonthNamesEnum.May,
    MonthNamesEnum.June,
    MonthNamesEnum.July,
    MonthNamesEnum.August,
    MonthNamesEnum.September,
    MonthNamesEnum.October,
    MonthNamesEnum.November,
    MonthNamesEnum.December,
  ];

  let month = null;

  if (startDate) {
    const numberDay = startDate.getMonth();

    month = monthNames[numberDay];

    month = month + " " + `${startDate.getFullYear()}`;
  }

  return month;
};
