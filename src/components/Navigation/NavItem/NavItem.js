import React, { useState, useRef, useEffect } from 'react'

import './NavItem.scss'

const NavItem = (props) => {
  const node = useRef()
  const [open, setOpen] = useState(false)


  useEffect(() => {
    document.addEventListener("click", clickOutsideHandler);
    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, []);

  // close dropdown when click outside of navitem
  const clickOutsideHandler = (e) => {
    if (node.current && !node.current.contains(e.target)) {
      setOpen(false)
    }
  }

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
