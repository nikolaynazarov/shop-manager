import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItems, removeItem } from '../../redux/actions'

import Item from './Item'
import Pagination from '../Pagination/Pagination'

import './ItemsList.scss'

const ItemsList = ({ items, fetchItems, removeItem }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(1)

  useEffect(() => {
    fetchItems()
    // eslint-disable-next-line
  }, [])

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <>
      <ul className="items-list">
        { items ?
          currentItems.map(item => (
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
      <Pagination
        itemsPerPage={ itemsPerPage }
        totalItems={ items.length }
        currentPage={ currentPage }
        setCurrentPage={ setCurrentPage }
      />
    </>
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
