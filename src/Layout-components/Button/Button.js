import React from 'react'

import './Button.scss'

const Button = ({ text = 'Button', disabled = false, icon }) => {
  return (
    <button
      className="btn"
      type="submit"
      disabled={ disabled }
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
