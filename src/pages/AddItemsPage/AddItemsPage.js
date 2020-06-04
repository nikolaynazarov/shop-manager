import React from 'react'

import ItemsAddForm from '../../components/ItemsAddForm/ItemsAddForm';
import ItemsList from '../../components/ItemsList/ItemsList';

const AddItemsPage = () => {
  return (
    <div className="page-container">
      <ItemsAddForm />
      <ItemsList />
    </div>
  )
}

export default AddItemsPage
