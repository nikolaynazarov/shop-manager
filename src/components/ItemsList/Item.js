import React from 'react'

import { ReactComponent as DeleteIcon } from '../../icons/trash.svg'

const Item = ({ id, label, amount, expDate, removeItem }) => {
  const removeHandler = () => {
    removeItem(id)
  }

  return (
    <li className="item">
      <span className="item-wrapper">
        <p className="item-label"><strong>{ label }</strong></p>
        <p className="item-info">
          <span className="item-info-amount">amount: { amount }</span>
          <span className="item-info-date">expire date: { expDate }</span>
        </p>
      </span>
      <span className="item-actions" onClick={ removeHandler }><DeleteIcon /></span>
    </li>
  )
}

export default Item