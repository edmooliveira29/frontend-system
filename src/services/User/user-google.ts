import jwtDecode from 'jwt-decode'
import { UserService } from './user-http'
import { useNavigate } from 'react-router-dom'

export const handleLoginGoogle = async (credentialResponse: any) => {
    const userService = new UserService()
    const navigate = useNavigate()
    if (credentialResponse.credential != null) {
        const USER_CREDENTIAL: any = jwtDecode(credentialResponse.credential)
        try {
            await userService.login({
                email: USER_CREDENTIAL.email,
                password: process.env.REACT_APP_CLIENT_PASSWORD_DEFAULT_GOOGLE,
            })
        } catch (error: any) {
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