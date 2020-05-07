import React, { useContext } from 'react'

import { ThemeContext } from '../ThemeProvider/ThemeProvider'

import './ThemeSwitcher.scss'

const ThemeSwitcher = () => {
  const { theme, changeThemeHandler } = useContext(ThemeContext);

  return (
    <div className="theme-switch-wrapper">
      <label htmlFor="theme-checkbox">Dark Theme:</label>
      <label className="theme-switch" htmlFor="theme-checkbox">
        <input
          type="checkbox"
          id="theme-checkbox"
          checked={ theme === 'dark' ? true : false }
          onChange={ changeThemeHandler }
        />
        <div className="slider round" />
      </label>
    </div>
  )
}

export default ThemeSwitcher
