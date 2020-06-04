import React, { useState } from 'react'

import { CSSTransition } from 'react-transition-group'
// Components
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import NavItem from './NavItem/NavItem'
import Dropwdown from './Dropdown/Dropdown'
import DropdownItem from './Dropdown/DropdownItem'
import NavBarList from './NavbarList/NavBarList'
import MenuItem from '../MenuItem/MenuItem'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

// Icons
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow-right.svg'
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow-left.svg'
import { ReactComponent as GearIcon } from '../../icons/gear.svg'
import { ReactComponent as ProfileMenuIcon } from '../../icons/profile-menu.svg'

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  function calculateHeight(element) {
    const height = element.offsetHeight;
    setMenuHeight(height)
  }

  return (
    <>
      <Navbar>
        <Sidebar>
          <MenuItem to="/" leftIcon={ <ProfileMenuIcon /> }>Home</MenuItem>
          <MenuItem to="/add-items" leftIcon={ <ProfileMenuIcon /> }>Add items</MenuItem>
        </Sidebar>

        <NavBarList>
          <NavItem icon={ <ProfileMenuIcon /> } >
            <Dropwdown height={ menuHeight }>
              <CSSTransition
                in={ activeMenu === 'main' }
                onEnter={ calculateHeight }
                unmountOnExit
                timeout={ 500 }
                classNames='menu-primary'
              >
                <ul className='menu'>
                  <DropdownItem>Profile menu</DropdownItem>
                  <DropdownItem
                    leftIcon={ <GearIcon /> }
                    rightIcon={ <ArrowRightIcon /> }
                    setActiveMenu={ setActiveMenu }
                    goToMenu={ 'settings' }
                  >
                    Settings
                    </DropdownItem>
                </ul>
              </CSSTransition>

              <CSSTransition
                in={ activeMenu === 'settings' }
                onEnter={ calculateHeight }
                unmountOnExit
                timeout={ 500 }
                classNames='menu-secondary'
              >
                <ul className='menu'>
                  <DropdownItem
                    leftIcon={ <ArrowLeftIcon /> }
                    setActiveMenu={ setActiveMenu }
                    goToMenu={ 'main' }
                  />
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings1</DropdownItem>
                  <DropdownItem>Settings2</DropdownItem>
                  <DropdownItem><ThemeSwitcher /></DropdownItem>
                </ul>
              </CSSTransition>
            </Dropwdown>
          </NavItem>
        </NavBarList>

      </Navbar>
    </>
  )
}
