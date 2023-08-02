export const handleLoginUser = async (setLoading: any, setErrorResponse: any, state: any, userService: any, navigate: any) => {
  setLoading(true)
  setErrorResponse('')
  try {
    // const user = await userService.login({
    //   email: state.email,
    //   password: state.password,
    //   remember: state.remember
    // })

    localStorage.setItem('sessionToken',' user.data.sessionToken')
    localStorage.setItem('username', 'user.data.name')
    localStorage.setItem('idUser', 'user.data._id')

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

export const handleCreateUser = async (setLoading: any, UserService: any, state: any, navigate: any, setErrorResponse: any) => {
  setLoading(true)
  const userService = new UserService()

  try {
    const user = await userService.create({
      email: state.email,
      name: state.name,
      password: state.password,
      passwordConfirm: state.passwordConfirmation
    })
    localStorage.setItem('sessionToken', user.data.sessionToken)
    localStorage.setItem('username', user.data.name)
    localStorage.setItem('idUser', user.data._id)

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