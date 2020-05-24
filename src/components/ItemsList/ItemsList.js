import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItems, removeItem } from '../../redux/actions'

import Item from './Item'
import Select from '../../Layout-components/Select/Select'
import Pagination from '../Pagination/Pagination'

import { formatDate } from '../../utils/base_utils'

import './ItemsList.scss'

const ItemsList = ({ items, fetchItems, removeItem }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const itemsPerPageOptions = [5, 10, 15, 20, 50]

  useEffect(() => {
    fetchItems()
    // eslint-disable-next-line
  }, [])

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem).sort((a, b) => new Date(a.expDate) - new Date(b.expDate));

  const pageOptionsHandler = (e) => {
    setItemsPerPage(e.target.value)
  }

  return (
    <div className="items-list">

      { !items.length ?
        <div className="items-list-message"><h3>No items added</h3></div>
        :
        <div className="items-list-options">
          <Select label={ "Items/page" } value={ itemsPerPage } onChange={ pageOptionsHandler } >
            { itemsPerPageOptions.map(option => <option key={ option } value={ option }>{ option }</option>) }
          </Select>
        </div>
      }

      <ul>
        { items ?
          currentItems.map(item => (
            <Item
              key={ item.id }
              id={ item.id }
              label={ item.label }
              amount={ item.amount }
              expDate={ formatDate(item.expDate) }
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
    </div>
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
