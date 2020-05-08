import React from 'react'

import './Input.scss'

const Input = ({ value, onChangeHandler, name, type = 'text', placeholder = 'Placeholder' }) => {
  return (
    <input
      type={ type }
      className="custom-input"
      name={ name }
      placeholder={ placeholder }
      value={ value }
      onChange={ onChangeHandler }
    />
  )
}

export default Input
