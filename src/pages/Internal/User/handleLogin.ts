import { CompanyService } from '../../../services/Company'

export const handleLoginUser = async (setLoading: any, setErrorResponse: any, state: any, userService: any) => {
  setLoading(true)
  setErrorResponse('')
  try {
    const user = await userService.login({
      email: state.email,
      password: state.password,
      remember: state.remember,
    })
    console.log(user)
    // dar um get em companyid para inserir no localstorage
    console.log(user.data.createdBy)
    const company = await new CompanyService().get(user.data.companyId)
    console.log(company)
    localStorage.setItem('companyLogged', JSON.stringify(user.data))
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
      password: state.password,
      passwordConfirm: state.passwordConfirmation,
      createWithGoogle: false,
      role: state.role
    })
    
    await userService.create({
      email: state.email,
      name: state.name,
      password: state.password,
      passwordConfirm: state.passwordConfirmation,
      createWithGoogle: false,
      role: state.role
    })
    const user = await userService.login({
      email: state.email,
      password: state.password,
      remember: state.remember,
    })

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