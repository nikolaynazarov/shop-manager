import React from 'react'

import './Input.scss'

const Input = ({ value, onChangeHandler, type = 'text', placeholder = 'Placeholder' }) => {
  return (
    <input
      type={ type }
      className="custom-input"
      placeholder={ placeholder }
      value={ value }
      onChange={ onChangeHandler }
    />
  )
}

export default Input
