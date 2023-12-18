import { AlertGeneral } from '../../../components'

export const handleLoginUser = async (setLoading: any, setErrorResponse: any, state: any, userService: any) => {
  setLoading(true)
  setErrorResponse('')
  try {
    const user = await userService.login({
      email: state.email,
      password: state.password,
      remember: state.remember,
    })

    localStorage.setItem('userLogged', JSON.stringify(user.data))
    return user.data
  } catch (error: any) {
    setLoading(false)
    if (error.message != 'Network Error') {
      setErrorResponse(error.response.data.message)
    } else {
      setErrorResponse('Verifique sua conexão de internet')
    }
  }
}

export const handleCreateUser = async (props: { UserService: any, state: any, createUser?: boolean }) => {
  const { UserService, state, createUser } = props
  const userService = new UserService()

  const user = await userService.create(state)
  if (createUser) {
    localStorage.setItem('userLogged', JSON.stringify(user.data))
  }
  return user

}
export const handleEditUser = async (props: { UserService: any, state: any, editUser?: boolean }) => {
  const { UserService, state, editUser } = props

  const userService = new UserService()

  const user = await userService.edit(state)
  if (editUser) {
    localStorage.setItem('userLogged', JSON.stringify(user.data))
  }
  return user

}
export const getAllUsers = async (UserService: any) => {
  const userService = new UserService()
  try {
    return await userService.getAll()
  } catch (error: any) {
    AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
  }
}