import React from 'react'

import './MenuItem.scss';

const MenuItem = (props) => {
  return (
    <p className="menu-item">
      <span className='icon-left'>{ props.leftIcon }</span>
      <span className="menu-item-text">{ props.children }</span>
    </p>
  )
}

export default MenuItem
