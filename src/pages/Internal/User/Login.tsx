import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { TextFieldInput, LinkComponent, CheckboxInput } from '../../../components/inputs'
import { ComponentButtonCommon } from '../../../components/button/ComponentButtonCommon'
import { UserService } from '../../../services/User/user-http'
import { LoginGoogle } from '../../../services/User/user-google'
import { handleLoginUser } from './handleLogin'
import './stylesUser.sass'
import { userIsAlreadyLoggedIn, validateFields } from '../../../utils'
import { useDispatch } from 'react-redux'
import { ActionsTypes } from '../../../redux/actions/reducers'

export const Login = () => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    username: '',
    remember: false
  })
  const [loading, setLoading] = useState(false)
  const [errorResponse, setErrorResponse] = useState('')
  const navigate = useNavigate()
  const userService = new UserService()
  const dispatch = useDispatch()
  const handleLoginHook = async () => {
    const translations = { email: 'Email', password: 'Senha' }
    const { email, password } = state

    if (!validateFields({ email, password }, translations)) {
      return false
    }
    const userLogged = await handleLoginUser(setLoading, setErrorResponse, state, userService)
    if (userLogged) {
      dispatch({ type: ActionsTypes.USER_LOGGED, payload: userLogged })
      navigate('/dashboard')
    }
  }
  
  useEffect(() => {
    userIsAlreadyLoggedIn(navigate, '/dashboard')
  }, [])

  return (
    <>
      <div id='div-login'>
        <div id='div-login-form'>
          <h3 id='h3-enter-register'>Entrar</h3>
          <div className='m-3' id='input-email-login'>
            <TextFieldInput
              id={'email'}
              required={true} label='E-mail'
              typeInput='text'
              value={state.email}
              onChange={(value: string) => { setState({ ...state, email: value }) }}
            />
          </div>
          <div className='m-3' id='input-password-login'>
            <TextFieldInput
              id={'password'}
              required={true}
              label='Senha'
              typeInput='password'
              value={state.password}
              onChange={(value: string) => { setState({ ...state, password: value }) }} />
          </div>
          <div className='m-3' id='checkbox-remember'>
            <CheckboxInput
              label='Lembrar durante 7 dias'
              onChange={() => { setState({ ...state, remember: !state.remember }) }} />
          </div>
          <div className='d-flex justify-content-evenly' id='button-login' onClick={handleLoginHook}>
            <ComponentButtonCommon text='Entrar' sizeWidth='310px' loading={loading} id='enter' />
          </div>
          <div id='error-response'>
            <span >{errorResponse ? errorResponse : ''}</span>
          </div>
          <LinkComponent
            hrefLink='/lembrar'
            text='Clique aqui para lembrar a senha'
            size='12px'
          />
          <div id="div-line">
            <span>OU</span>
          </div>
          <Link to='/registrar' className='d-flex justify-content-evenly' id='button-login'>
            <ComponentButtonCommon text='Registrar' sizeWidth='310px' id='register' />
          </Link>

          <div className='justify-content-evenly p-2' id='button-login-google' >
            <LoginGoogle errorResponse={(error: any) => setErrorResponse(error.message)} />
          </div>
        </div>
      </div>
    </>
  )

}
