import React from 'react'

const DropdownItem = (props) => {
  const { goToMenu, setActiveMenu } = props;

  const changeMenuHandler = () => {
    if (goToMenu) {
      goToMenu && setActiveMenu(goToMenu)
    }

    return;
  }
  return (
    <li className='dropdown-item' onClick={ changeMenuHandler } >
      { props.leftIcon }
      { props.children }
      { props.rightIcon }
    </li>
  )
}

export default DropdownItem;