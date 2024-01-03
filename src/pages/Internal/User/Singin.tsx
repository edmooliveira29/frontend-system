import React, { useState } from 'react'
import { ComponentButtonCommon } from '../../../components/button/ComponentButtonCommon'
import { TextFieldInput } from '../../../components/inputs'
import NavBar from '../../../components/navBar/NavBar'
import { LoginGoogle } from '../../../services/User'
import { UserService } from '../../../services/User'
import { useNavigate } from 'react-router-dom'
import { handleCreateCompany } from './handleLogin'
import './stylesUser.sass'
import { validateFields } from '../../../utils'
import { CompanyService } from '../../../services/Company'

export const Singin = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    name: '',
    username: '',
    role: 'owner',
  })
  const [loading, setLoading] = useState(false)
  const [errorResponse, setErrorResponse] = useState('')

  const handleCreateCompanyHook = async () => {
    const translations = { name: 'Nome', email: 'Email', password: 'Senha', passwordConfirmation: 'Confirme sua senha' }
    const { name, email, password, passwordConfirmation } = state

    if (!validateFields({ name, email, password, passwordConfirmation }, translations)) {
      return false
    }
    handleCreateCompany(setLoading, CompanyService, UserService, state, navigate, setErrorResponse)
  }

  return (
    <>
      <div>
        <NavBar />
        <div id='div-login' className='col-md-12'>
          <div id='div-login-form'>
            <h3 id='h3-enter-register'>Registrar</h3>
            <div id='input-name-singin' className='m-2'>
              <TextFieldInput
                id={'name'}
                required={true}
                label='Nome da empresa'
                typeInput='text'
                value={state.name}
                onChange={(value: string) => {
                  setState({ ...state, name: value })
                }}
              />
            </div>
            <div id='input-email-singin' className='m-2'>
              <TextFieldInput
                id={'email'}
                required={true}
                label='E-mail'
                typeInput='text'
                value={state.email}
                onChange={(value: string) => {
                  setState({ ...state, email: value })
                }}
              />
              <TextFieldInput
                id={'username'}
                required={true}
                label='Nome do usuário principal'
                typeInput='text'
                value={state.username}
                onChange={(value: string) => {
                  setState({ ...state, username: value })
                }}
              />
            </div>
            <div id='input-password-singin' className='m-2'>
              <TextFieldInput
                id={'password'}
                required={true}
                label='Senha' typeInput='password'
                value={state.password}
                onChange={(value: string) => {
                  setState({ ...state, password: value })
                }}
              />
            </div>
            <div id='input-password-confirmation-singin' className='m-2'>
              <TextFieldInput
                id={'passwordConfirmation'}
                required={true} label='Confirme sua senha' typeInput='password'
                value={state.passwordConfirmation}
                onChange={(value: string) => {
                  setState({ ...state, passwordConfirmation: value })
                }}
              />
            </div>
            <div className='d-grid' id='button-login' onClick={handleCreateCompanyHook}>
              <ComponentButtonCommon text='Registrar' loading={loading} id='register-singin' />
            </div>
            <div id='error-response'>
              <span >{errorResponse ?? ''}</span>
            </div>
            <div id="div-line">
              <span>OU</span>
            </div>

            <div className='justify-content' id='button-login-google' >
              <LoginGoogle setErrorResponse={(error: string) => setErrorResponse(error)} />
            </div>
          </div>
        </div>
      </div>
    </>)
}
