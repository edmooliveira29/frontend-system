import React, { useState } from 'react'
import jwtDecode from 'jwt-decode'
import { UserService } from './user-http'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

export const LoginGoogle: React.FC<any> = ({ errorResponse }) => {
    const userService = new UserService()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleLoginGoogle = async (credentialResponse: any) => {
        setLoading(true)
        let USER_CREDENTIAL: any
        if (credentialResponse.credential != null) {
            USER_CREDENTIAL = jwtDecode(credentialResponse.credential)
            try {
                await userService.login({
                    email: USER_CREDENTIAL.email,
                    password: process.env.REACT_APP_CLIENT_PASSWORD_DEFAULT_GOOGLE,
                })
            } catch (error: any) {
                if (error.message == 'Network Error') {
                    errorResponse('Verifique sua conexão de internet')
                    setLoading(false)

                    return
                } else if (error.message != "Usuário autenticado com sucesso") {
                    await userService.create({
                        email: USER_CREDENTIAL.email,
                        name: USER_CREDENTIAL.name,
                        password: process.env.REACT_APP_CLIENT_PASSWORD_DEFAULT_GOOGLE,
                        passwordConfirm: process.env.REACT_APP_CLIENT_PASSWORD_DEFAULT_GOOGLE,
                    })
                }
            }

            localStorage.setItem('username', USER_CREDENTIAL.name)
            localStorage.setItem('picture_profile', USER_CREDENTIAL.picture)
            setLoading(false)

            navigate('/dashboard')
        }
    }

    return (
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID_GOOGLE}`
        } >
            {!loading ? <GoogleLogin
                text='signup_with'
                logo_alignment='left'
                useOneTap={false}
                containerProps={{ style: { width: '310px' } }}
                onSuccess={handleLoginGoogle}
                width='310px'
            /> : <div className="spinner-border text-dark" role="status" />}
        </GoogleOAuthProvider>)
}
