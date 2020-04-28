import React from 'react'

const DropdownItem = (props) => {
  const { goToMenu, setActiveMenu } = props;
  return (
    <p className='dropdown-item' onClick={ () => goToMenu && setActiveMenu(goToMenu) } >
      <span className='icon-left'>{ props.leftIcon }</span>
      { props.children }
      <span className='icon-right'>{ props.rightIcon }</span>
    </p>
  )
}

export default DropdownItem;