import React, { useState } from 'react'
import jwtDecode from 'jwt-decode'
import { UserService } from './user-http'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { ActionsTypes } from '../../redux/actions/reducers'
import { useDispatch } from 'react-redux'

export const LoginGoogle: React.FC<any> = ({ errorResponse }) => {
  const userService = new UserService()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const handleLoginGoogle = async (credentialResponse: any) => {
    setLoading(true)
    let USER_CREDENTIAL: any
    if (credentialResponse.credential != null) {
      USER_CREDENTIAL = jwtDecode(credentialResponse.credential)

      let userLogged
      try {
        userLogged = await userService.login({
          email: USER_CREDENTIAL.email,
          password: process.env.REACT_APP_CLIENT_PASSWORD_DEFAULT_GOOGLE,
          remember: true
        })

      } catch (error: any) {
        if (error.message == 'Network Error') {
          errorResponse('Verifique sua conexão de internet')
          setLoading(false)
          return
        } else {

          userLogged = await userService.create({
            email: USER_CREDENTIAL.email,
            name: USER_CREDENTIAL.name,
            password: process.env.REACT_APP_CLIENT_PASSWORD_DEFAULT_GOOGLE,
            passwordConfirm: process.env.REACT_APP_CLIENT_PASSWORD_DEFAULT_GOOGLE,
            profilePicture: USER_CREDENTIAL.picture
          })
        }
      }


      if (userLogged) {
        localStorage.setItem('userLogged', JSON.stringify(userLogged.data))
        dispatch({ type: ActionsTypes.USER_LOGGED, payload: userLogged.data })
        setLoading(false)
        navigate('/dashboard')
      }
    }
  }
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID_GOOGLE}`
    } >
      {!loading ? <GoogleLogin
        text='signup_with'
        locale='PT-BR'
        logo_alignment='left'
        useOneTap={false}
        containerProps={{ style: { width: '310px' } }}
        onSuccess={handleLoginGoogle}
        width='310px'
      /> : <div className="spinner-border" style={{ width: '20px', height: '20px', color: 'black' }} role="status" />}
    </GoogleOAuthProvider>)
}
