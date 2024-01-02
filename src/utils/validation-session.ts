import jwtDecode, { JwtPayload } from 'jwt-decode'
import { AlertGeneral } from '../components'

const sessionTokenExpiry = (sessionToken: string, navigate: any, route?: string) => {
  const decoded = jwtDecode(sessionToken) as JwtPayload
  console.log(decoded)
  const expirationTime = decoded.exp || 0
  const currentTime = Math.floor(Date.now() / 1000)
  if (currentTime > expirationTime) {
    AlertGeneral({ title: 'Aviso', message: 'Sua sessão expirou. Por favor entre novamente', type: 'warning' })
    localStorage.clear()
    navigate('/entrar')
  } else if (route) {
    navigate(route)
  }
}

export const userIsAlreadyLoggedIn = (navigate: any, route?: string) => {
  const userLogged: any = JSON.parse(localStorage.getItem('userLogged') as any)
  if (userLogged !== null) {
    sessionTokenExpiry(userLogged.sessionToken, navigate, route)
  }
}