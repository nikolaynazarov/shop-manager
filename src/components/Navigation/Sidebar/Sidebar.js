import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../../../customHooks/useHooks';

import { CSSTransition } from 'react-transition-group'

import { ReactComponent as MenuIcon } from '../../../icons/list.svg';

import './Sidebar.scss'

const Sidebar = ({ children }) => {

  const node = useRef()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // close sidebar when click outside of navitem
  const clickOutsideHandler = () => {
    setSidebarOpen(false)
  }

  useOnClickOutside(node, clickOutsideHandler)

  return (
    <div className="sidebar" ref={ node }>
      <span className="sidebar-icon" onClick={ () => setSidebarOpen(!sidebarOpen) }>
        <MenuIcon />
      </span>

      <CSSTransition
        in={ sidebarOpen }
        unmountOnExit
        classNames="sidebar"
        timeout={ 700 }
      >
        <ul className="sidebar-menu">
          { children }
        </ul>
      </CSSTransition>
    </div>
  )
}

export default Sidebar;