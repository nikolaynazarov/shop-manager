import React, { useState, useRef } from 'react'

import './NavItem.scss'
import { useOnClickOutside } from '../../../customHooks/useHooks'

const NavItem = (props) => {
  const node = useRef()
  const [open, setOpen] = useState(false)

  // close dropdown when click outside of navitem
  const clickOutsideHandler = () => {
    setOpen(false)
  }

  useOnClickOutside(node, clickOutsideHandler)

  const openHandler = () => {
    setOpen(!open)
  }
  return (
    <li className="nav-item" ref={ node }>
      <span className="nav-item-btn" onClick={ openHandler } >
        { props.icon }
      </span>

      { open && props.children }
    </li>
  )
}

export default NavItem;
