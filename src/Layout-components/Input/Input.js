import React from 'react'

import './Input.scss'

const Input = ({ value, onChangeHandler, name, type = 'text', autoComplete = 'off', placeholder = 'Placeholder' }) => {
  return (
    <input
      type={ type }
      className="custom-input"
      name={ name }
      placeholder={ placeholder }
      value={ value }
      onChange={ onChangeHandler }
      autoComplete={ autoComplete }
    />
  )
}

export default Input
