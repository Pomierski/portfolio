export const getMonthDiffUntillNow = (start: Date) => {
  const dateNow = new Date();
  const dateNowMonths = dateNow.getFullYear() * 12 + dateNow.getMonth();
  const startMonths = start.getFullYear() * 12 + start.getMonth();
  return dateNowMonths - startMonths;
};
