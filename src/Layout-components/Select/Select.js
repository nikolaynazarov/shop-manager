import React from 'react'

import './Select.scss'

const Select = ({ children, onChange, value, label }) => {
  return (
    <div>
      <label>{ label }</label>
      <select className="select-box" onChange={ onChange } value={ value } >
        { children }
      </select>
    </div>
  )
}

export default Select
