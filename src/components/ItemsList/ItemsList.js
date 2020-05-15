import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItems, removeItem } from '../../redux/actions'

import Item from './Item'

import './ItemsList.scss'

const ItemsList = ({ items, fetchItems, removeItem }) => {
  useEffect(() => {
    fetchItems()
    // eslint-disable-next-line
  }, [])

  return (
    <ul className="items-list">
      { items ?
        items.map(item => (
          <Item
            key={ item.id }
            id={ item.id }
            label={ item.label }
            amount={ item.amount }
            expDate={ item.expDate }
            removeItem={ removeItem } />
        ))
        : null
      }
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = {
  fetchItems,
  removeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
