import { CompanyService } from '../../../services/Company'

export const handleLoginUser = async (setLoading: any, setErrorResponse: any, state: any, userService: any) => {
  setLoading(true)
  setErrorResponse('')
  try {
    const user = await userService.login({
      username: state.username,
      password: state.password,
      remember: state.remember,
    })
    const company = await new CompanyService().get(user.data.createdByTheCompanyId)
    localStorage.setItem('userLogged', JSON.stringify(user.data))
    localStorage.setItem('company', JSON.stringify(company.data))
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

export const handleCreateCompany = async (setLoading: any, CompanyService: any, UserService: any, state: any, navigate: any, setErrorResponse: any) => {
  setLoading(true)
  const companyService = new CompanyService()
  const userService = new UserService()
  try {
    const company =await companyService.create({
      email: state.email,
      name: state.name,
      createWithGoogle: false,
    })
    await userService.create({
      email: state.email,
      username: state.username,
      name: state.name,
      password: state.password,
      passwordConfirm: state.passwordConfirmation,
      createWithGoogle: false,
      role: state.role,
      createdByTheCompanyId: company.data._id
    })
    const user = await userService.login({
      username: state.username,
      password: state.password,
      remember: state.remember,
    })

    localStorage.setItem('userLogged', JSON.stringify(user.data))
    localStorage.setItem('company', JSON.stringify(company.data))
    navigate('/dashboard')
    return user.data
  } catch (error: any) {
    console.trace()
    setLoading(false)
    if (error.message != 'Network Error') {
      setErrorResponse(error.response.data.message)
    } else {
      setErrorResponse('Verifique sua conexão de internet')
    }
  }
}