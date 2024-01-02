import React, { useState } from 'react'
import jwtDecode from 'jwt-decode'
import { UserService } from './user-http'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { ActionsTypes } from '../../redux/actions/reducers'
import { useDispatch } from 'react-redux'
import { CompanyService } from '../Company'

export const LoginGoogle = (props: { setErrorResponse: any }) => {
  const { setErrorResponse } = props
  const userService = new UserService()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const handleLoginGoogle = async (credentialResponse: any) => {
    setLoading(true)
    let USER_CREDENTIAL: any
    let userLogged
    if (credentialResponse.credential != null) {
      USER_CREDENTIAL = jwtDecode(credentialResponse.credential)
      try {
        userLogged = await userService.login({
          email: USER_CREDENTIAL.email,
          remember: true,
          loginWithGoogle: true
        })
        if (userLogged) {
          const companyService = new CompanyService()
          const company = await companyService.get(userLogged.data.createdByTheCompanyId)
          localStorage.setItem('company', JSON.stringify(company.data))
          localStorage.setItem('userLogged', JSON.stringify(userLogged.data))
          dispatch({ type: ActionsTypes.USER_LOGGED, payload: userLogged.data })
          setLoading(false)
          navigate('/dashboard')
        }
      } catch (error: any) {
        if (error.message == 'Network Error') {
          setErrorResponse('Verifique sua conexão de internet')
          setLoading(false)
          return
        }
        setLoading(false)

      }
      if (!userLogged) {
        try {
          const companyService = new CompanyService()

          const company = await companyService.create({
            email: USER_CREDENTIAL.email,
            name: USER_CREDENTIAL.name,
            password: USER_CREDENTIAL.password,
            passwordConfirm: USER_CREDENTIAL.passwordConfirmation,
            createWithGoogle: false,
            role: 'owner'
          })
          userLogged = await userService.create({
            email: USER_CREDENTIAL.email,
            name: USER_CREDENTIAL.name,
            profilePicture: USER_CREDENTIAL.picture,
            createWithGoogle: true,
            role: 'owner',
            createdByTheCompanyId: company.data._id
          })
          if (userLogged) {
            localStorage.setItem('userLogged', JSON.stringify(userLogged.data))
            localStorage.setItem('company', JSON.stringify(company.data))

            dispatch({ type: ActionsTypes.USER_LOGGED, payload: userLogged.data })
            setLoading(false)
            navigate('/dashboard')
          }
        } catch (error: any) {
          setErrorResponse(error.response.data.message)
          setLoading(false)
          return
        }
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
