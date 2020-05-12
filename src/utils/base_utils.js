export const setColorThemeToLocalStorage = (theme) => {
  localStorage.setItem('theme', theme);
}

export const getColorThemeFromLocalStorage = () => {
  return localStorage.getItem('theme')
}