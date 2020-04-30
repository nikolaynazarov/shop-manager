import React from 'react'

import './Navbar.scss'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      { props.children }
    </nav>
  )
}

export default Navbar;