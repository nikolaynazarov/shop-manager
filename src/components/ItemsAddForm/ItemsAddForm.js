import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/actions'

import Input from '../../Layout-components/Input/Input'
import Button from '../../Layout-components/Button/Button'

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
    props.addItem(state)
    setState({
      label: '',
      amount: '',
      expDate: ''
    })
  }

  return (
    <form onSubmit={ submitHandler } >
      <Input name="label" value={ state.label } onChangeHandler={ inputHandler } />
      <Input name="amount" value={ state.amount } type={ 'number' } onChangeHandler={ inputHandler } />
      <Input name="expDate" value={ state.expDate } type={ 'date' } onChangeHandler={ inputHandler } />
      <Button text={ 'Save' } />
    </form>
  )
}

const mapDispatchToProps = {
  addItem,
}

export default connect(null, mapDispatchToProps)(ItemsAddForm)
