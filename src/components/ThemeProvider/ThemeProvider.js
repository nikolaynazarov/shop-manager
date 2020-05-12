import React, { useState, createContext, useEffect } from 'react'
import { setColorThemeToLocalStorage, getColorThemeFromLocalStorage } from '../../utils/base_utils'

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = getColorThemeFromLocalStorage();
    savedTheme ? setTheme(savedTheme) : setTheme(theme);
  }, [theme])

  const changeThemeHandler = () => {
    if (theme === 'light') {
      setTheme('dark')
      setColorThemeToLocalStorage('dark')
    } else {
      setTheme('light')
      setColorThemeToLocalStorage('light')
    }
  }
  return (
    <ThemeContext.Provider
      value={ {
        theme,
        changeThemeHandler,
      } }
    >
      <div className={ `${theme}-theme` }>
        { props.children }
      </div>
    </ThemeContext.Provider>
  )
}

