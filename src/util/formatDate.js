export const formatDate = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date)) {
    throw new Error("Invalud date format");
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = weekDays[date.getDay()];

  return `${month}.${day < 10 ? "0" : ""}${day} (${dayOfWeek})`;
};
