import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import NavItem from './NavItem/NavItem'
import Dropwdown from './Dropdown/Dropdown'
import DropdownItem from './Dropdown/DropdownItem'

import { CSSTransition } from 'react-transition-group'


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
        <NavItem icon={ <ProfileMenuIcon /> } >
          <Dropwdown>
            <div className='dropdown' style={ { height: menuHeight } }>
              <CSSTransition
                in={ activeMenu === 'main' }
                onEnter={ calculateHeight }
                unmountOnExit
                timeout={ 500 }
                classNames='menu-primary'
              >
                <div className='menu'>
                  <DropdownItem>My Profile</DropdownItem>
                  <DropdownItem
                    leftIcon={ <GearIcon /> }
                    rightIcon={ <ArrowRightIcon /> }
                    setActiveMenu={ setActiveMenu }
                    goToMenu={ 'settings' }
                  >
                    Settings
          </DropdownItem>
                </div>
              </CSSTransition>

              <CSSTransition
                in={ activeMenu === 'settings' }
                onEnter={ calculateHeight }
                unmountOnExit
                timeout={ 500 }
                classNames='menu-secondary'
              >
                <div className='menu'>
                  <DropdownItem
                    leftIcon={ <ArrowLeftIcon /> }
                    setActiveMenu={ setActiveMenu }
                    goToMenu={ 'main' }
                  />
                  <DropdownItem>Settings</DropdownItem>
                  <DropdownItem>Settings1</DropdownItem>
                  <DropdownItem>Settings2</DropdownItem>
                  <DropdownItem>Settings3</DropdownItem>
                </div>
              </CSSTransition>
            </div>
          </Dropwdown>
        </NavItem>
      </Navbar>
    </>
  )
}
