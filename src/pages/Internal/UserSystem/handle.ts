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

export const handleCreateUser = async (setLoading: any, UserService: any, state: any, createUser?: boolean) => {
  setLoading(true)
  const userService = new UserService()

  try {
    const user = await userService.create({
      email: state.email,
      name: state.name,
      password: state.password,
      passwordConfirm: state.passwordConfirmation,
      createWithGoogle: false,
      role: state.role
    })
    if (createUser) {
      localStorage.setItem('userLogged', JSON.stringify(user.data))
    }

  } catch (error: any) {
    setLoading(false)
    if (error.message != 'Network Error') {
      AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
    } else {
      AlertGeneral({ title: 'Erro', message: 'Verifique sua conexão de internet', type: 'error' })
    }
  }
}
export const handleEditUser = async (setLoading: any, UserService: any, state: any, editUser?: boolean) => {
  setLoading(true)
  const userService = new UserService()

  try {
    const user = await userService.edit({
      email: state.email,
      name: state.name,
      role: state.role,
      _id: state._id
    })
    if (editUser) {
      localStorage.setItem('userLogged', JSON.stringify(user.data))
    }
  } catch (error: any) {
    setLoading(false)
    if (error.message != 'Network Error') {
      AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
    } else {
      AlertGeneral({ title: 'Erro', message: 'Verifique sua conexão de internet', type: 'error' })
    }
  }
}
export const getAllUsers = async (UserService: any) => {
  const userService = new UserService()
  try {
    return await userService.getAll()
  } catch (error: any) {
    AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
  }
}