import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/actions'

import Input from '../../Layout-components/Input/Input'
import Button from '../../Layout-components/Button/Button'

import { formatDate } from '../../utils/base_utils'

import './ItemsAddForm.scss'

const ItemsAddForm = (props) => {
  const [state, setState] = useState({
    label: '',
    amount: '',
    expDate: '',
  })

  const inputHandler = (e) => {
    e.persist();
    setState(prevState => {
      return {
        ...prevState,
        ...{
          [e.target.name]: e.target.value
        }
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.addItem({
      label: state.label,
      amount: state.amount,
      expDate: formatDate(state.expDate)
    })
    setState({
      label: '',
      amount: '',
      expDate: ''
    })
  }

  return (
    <form onSubmit={ submitHandler } className="itemsAddForm" >
      <Input name="label" value={ state.label } placeholder={ 'Item label' } onChangeHandler={ inputHandler } />
      <Input name="amount" value={ state.amount } placeholder={ 'Amount' } type={ 'number' } onChangeHandler={ inputHandler } />
      <Input name="expDate" value={ state.expDate } type={ 'date' } onChangeHandler={ inputHandler } />
      <span className="form-button">
        <Button
          text={ 'Save' }
          disabled={ state.label.length && state.amount.length && state.expDate.length ? false : true } />
      </span>
    </form>
  )
}

const mapDispatchToProps = {
  addItem,
}

export default connect(null, mapDispatchToProps)(ItemsAddForm)
