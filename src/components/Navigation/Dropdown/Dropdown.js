import React from 'react'

import './Dropdown.scss'

const Dropwdown = (props) => {

  return (
    <ul>
      { props.children }
    </ul>
  )
}

export default Dropwdown;