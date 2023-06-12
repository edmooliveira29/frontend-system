import React from 'react'
import jwtDecode from 'jwt-decode'
import { UserService } from './user-http'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

export const LoginGoogle = () => {
    const userService = new UserService()
    const navigate = useNavigate()

    const handleLoginGoogle = async (credentialResponse: any) => {
        let USER_CREDENTIAL: any
        if (credentialResponse.credential != null) {
            USER_CREDENTIAL = jwtDecode(credentialResponse.credential)
            try {
                await userService.login({
                    email: USER_CREDENTIAL.email,
                    password: process.env.REACT_APP_CLIENT_PASSWORD_DEFAULT_GOOGLE,
                })

            } catch (error: any) {
                console.log(error)
                if (error.message != "Usuário autenticado com sucesso") {
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
            navigate('/dashboard')
        }
    }
    return (
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID_GOOGLE}`
        } >
            <GoogleLogin
                text='signup_with'
                context='use'
                logo_alignment='left'
                useOneTap
                containerProps={{ style: { width: '310px' } }}
                onSuccess={handleLoginGoogle}
                width='310px'
            />
        </GoogleOAuthProvider>)
}
