import React from 'react'

import './Button.scss'

const Button = ({ text = 'Button', icon }) => {
  return (
    <button
      className="btn"
      type="submit"
    >
      { text }
      { icon ?
        <span className="btn-icon">
          { icon }
        </span>
        :
        null
      }
    </button>
  )
}

export default Button
