import React from 'react'

import { Link } from 'react-router-dom'

import './MenuItem.scss';

const MenuItem = ({ leftIcon, children, to }) => {
  return (
    <Link className="menu-item" to={ to }>
      <span className='icon-left'>{ leftIcon }</span>
      <span className="menu-item-text">{ children }</span>
    </Link>
  )
}

export default MenuItem
