export const handleLogin = async (setLoading: any, setErrorResponse: any, state: any, userService: any, navigate: any) => {
    setLoading(true)
    setErrorResponse('')
    try {
        const user = await userService.login({
            email: state.email,
            password: state.password,
            remember: state.remember
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