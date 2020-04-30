import React from 'react'

import './NavbarList.scss'

const NavBarList = (props) => {
  return (
    <ul className="navbar-list">
      { props.children }
    </ul>
  )
}

export default NavBarList;
