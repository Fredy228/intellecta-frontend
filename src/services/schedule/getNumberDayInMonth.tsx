export const getNumberDayInMonth = (
  dateString: string,
): { countDayInMonth: number; year: number } => {
  const date = new Date(dateString);

  let countDayInMonth = 0;
  let year = 0;

  if (date) {
    year = date.getFullYear();
    const month = date.getMonth();

    // Чтобы получить последний день месяца, мы устанавливаем день в 0
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Получаем день из последней даты месяца
    countDayInMonth = lastDayOfMonth.getDate();
  }

  return { countDayInMonth, year };
};
