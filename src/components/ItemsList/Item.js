import React from 'react'

const Item = ({ id, label, amount, expDate, removeItem }) => {
  const removeHandler = () => {
    removeItem(id)
  }

  return (
    <li className="item">
      <span className="item-label">{ label }</span>
      <span className="item-amount">amount: { amount }</span>
      <span className="item-date">expDate: { expDate }</span>
      <span className="item-actions" onClick={ removeHandler }>&times;</span>
    </li>
  )
}

export default Item