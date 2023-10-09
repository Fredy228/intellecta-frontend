export const getDayUntilFirstDay = (dateString: string) => {
  const date = new Date(dateString);

  // Определяем первое число месяца
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  // Определяем день недели первого числа месяца (0 - воскресенье, 1 - понедельник и так далее)
  const dayOfWeekFirstDay = firstDayOfMonth.getDay();

  // Вычисляем количество дней с понедельника до первого числа месяца
  let daysUntilFirstDay = 0;

  if (dayOfWeekFirstDay === 1) {
    // Если первое число месяца приходится на понедельник, то нет дополнительных дней
    daysUntilFirstDay = 0;
  } else if (dayOfWeekFirstDay === 0) {
    // Если первое число месяца приходится на воскресенье, то 6 дней до понедельника
    daysUntilFirstDay = 6;
  } else {
    // В остальных случаях, вычисляем количество дней до понедельника
    daysUntilFirstDay = 1 - dayOfWeekFirstDay;
  }

  return Math.abs(daysUntilFirstDay);
};
