import React from 'react'

import { ReactComponent as DeleteIcon } from '../../icons/trash.svg'

const Item = ({ id, label, amount, expDate, removeItem }) => {
  const removeHandler = () => {
    removeItem(id)
  }

  return (
    <li className="item">
      <p className="item-label">{ label }</p>
      <p className="item-info">
        <span className="item-amount">amount: { amount }</span>
        <span className="item-date">expDate: { expDate }</span>
      </p>
      <span className="item-actions" onClick={ removeHandler }><DeleteIcon /></span>
    </li>
  )
}

export default Item