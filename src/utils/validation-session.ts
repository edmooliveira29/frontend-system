import jwtDecode, { JwtPayload } from 'jwt-decode'
import { AlertGeneral } from '../components'

const sessionTokenExpiry = (sessionToken: string) => {
  const decoded = jwtDecode(sessionToken) as JwtPayload
  const expirationTime = decoded.exp || 0
  const currentTime = Math.floor(Date.now() / 1000)
  if (currentTime > expirationTime) {
    AlertGeneral({ title: 'Aviso', message: 'Sua sessão expirou. Por favor entre novamente', type: 'warning' })
    localStorage.clear()
    return false
  } else {
    return true
  }
}

export const userIsAlreadyLoggedIn = () => {
  const userLogged: any = JSON.parse(localStorage.getItem('userLogged') as any)
  if (userLogged !== null) {
    return sessionTokenExpiry(userLogged.sessionToken)
  } else {
    return false
  }
}