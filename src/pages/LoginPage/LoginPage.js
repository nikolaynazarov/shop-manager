import React, { useState } from 'react'

import Input from '../../Layout-components/Input/Input'
import Button from '../../Layout-components/Button/Button'

import './LoginPage.scss'

const LoginPage = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='form-container'>
      <form className='form'>
        <div className='form-header'>
          <h2>Sign In</h2>
        </div>
        <div className='form-control'>
          <Input
            value={ login }
            placeholder='Email'
            onChangeHandler={ (e) => setLogin(e.target.value) } />
          <Input
            value={ password }
            type='password'
            placeholder='Password'
            autoComplete={ 'on' }
            onChangeHandler={ (e) => setPassword(e.target.value) } />
        </div>
        <Button text='Sign in' />
      </form>
    </div>
  )
}

export default LoginPage
