import React from 'react'

import './Navbar.scss'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        { props.children }
      </ul>
    </nav>
  )
}

export default Navbar;