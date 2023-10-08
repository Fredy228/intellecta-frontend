export const whatThisDay = (date: string): number | null => {
  const dateFormatRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  const isValidDate = dateFormatRegex.test(date);

  if (!isValidDate) return null;

  const parts = date.split(" ");
  const datePart = parts[0];
  const dateComponents = datePart.split("-");

  return parseInt(dateComponents[2], 10);
};
