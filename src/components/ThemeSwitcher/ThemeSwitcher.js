import React, { useContext } from 'react'

import { ThemeContext } from '../ThemeProvider/ThemeProvider'

import './ThemeSwitcher.scss'

const ThemeSwitcher = () => {
  const { changeThemeHandler } = useContext(ThemeContext);

  return (
    <div className="theme-switch-wrapper">
      <label htmlFor="checkbox">Dark Theme:</label>
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={ changeThemeHandler }
        />
        <div className="slider round" />
      </label>
    </div>
  )
}

export default ThemeSwitcher
