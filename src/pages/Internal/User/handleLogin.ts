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

export const handleCreateUser = async (setLoading: any, UserService: any, state: any, navigate: any, setErrorResponse: any) => {
  setLoading(true)
  const userService = new UserService()

  try {
    const user = await userService.create({
      email: state.email,
      name: state.name,
      password: state.password,
      passwordConfirm: state.passwordConfirmation,
      createWithGoogle: false
    })
    localStorage.setItem('userLogged', JSON.stringify(user.data))

    navigate('/dashboard')
  } catch (error: any) {
    setLoading(false)
    if (error.message != 'Network Error') {
      setErrorResponse(error.response.data.message)
    } else {
      setErrorResponse('Verifique sua conexão de internet')
    }
  }
}