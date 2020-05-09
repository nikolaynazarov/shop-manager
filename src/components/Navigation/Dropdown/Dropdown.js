import React from 'react'

import './Dropdown.scss'

const Dropwdown = ({ children, height }) => {

  return (
    <ul className="dropdown" style={ { height } }>
      { children }
    </ul>
  )
}

export default Dropwdown;