import React, { useState, createContext } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {

  const [theme, setTheme] = useState('light')

  const changeThemeHandler = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
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

