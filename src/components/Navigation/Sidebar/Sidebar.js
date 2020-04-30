import React, { useState, useRef, useEffect } from 'react'

import { CSSTransition } from 'react-transition-group'

import { ReactComponent as MenuIcon } from '../../../icons/list.svg';

import './Sidebar.scss'

const Sidebar = (props) => {

  const node = useRef()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    document.addEventListener("click", clickOutsideHandler);
    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, []);

  // close sidebar when click outside of navitem
  const clickOutsideHandler = (e) => {
    if (node.current && !node.current.contains(e.target)) {
      setSidebarOpen(false)
    }
  }

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
          { props.children }
        </ul>
      </CSSTransition>
    </div>
  )
}

export default Sidebar;