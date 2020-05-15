export const setColorThemeToLocalStorage = (theme) => {
  localStorage.setItem('theme', theme);
}

export const getColorThemeFromLocalStorage = () => {
  return localStorage.getItem('theme')
}

const getFormattedMonth = (date) => {
  const month = date.getMonth() + 1;
  return month < 10 ? '0' + month : month;
}

const getFormattedDay = (date) => {
  const day = date.getDate();
  return day < 10 ? '0' + day : day;
}

export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  return `${getFormattedDay(date)}.${getFormattedMonth(date)}.${date.getFullYear()}`;
}