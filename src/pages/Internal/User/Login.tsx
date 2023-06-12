import React, { useState } from 'react'
import { TextFieldInput } from '../../../components/inputs/TextFieldInput'
import { CheckboxInput } from '../../../components/inputs/CheckboxInput'
import { ComponentButtonCommon } from '../../../components/button/ComponentButtonCommon'
import { LinkComponent } from '../../../components/inputs/link/LinkComponent'
import './stylesUser.sass'
import NavBar from '../../../components/navBar/NavBar'
import { Link } from 'react-router-dom'
import { UserService } from '../../../services/User/user-http'
import { useNavigate } from 'react-router-dom'

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'

export const Login: React.FC = () => {
	const [state, setState] = React.useState({
		email: '',
		password: '',
		passwordConfirmation: '',
		username: '',
	})
	const [loading, setLoading] = useState(false)
	const [errorResponse, setErrorResponse] = useState('')
	const navigate = useNavigate()
	const userService = new UserService()

	const handleLogin = async () => {
		setLoading(true)
		setErrorResponse('')
		try {
			const user = await userService.login({
				email: state.email,
				password: state.password,
			})
			localStorage.setItem('username', user.data.name)
			localStorage.setItem('idUser', user.data._id)

			navigate('/dashboard')
		} catch (error: any) {
			setLoading(false)

			setErrorResponse(error.response.data.message)
		}
	}
	const handleLoginGoogle = async (credentialResponse: any) => {
		if (credentialResponse.credential != null) {
			const USER_CREDENTIAL: any = jwtDecode(credentialResponse.credential)
			try {
				const user = await userService.login({
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

	return (
		<div>
			<NavBar />
			<div className='row'>
				<div
					id='div-login'
					style={{ border: '1px solid' }}
					className='col-md-12'
				>
					<div id='div-login-form'>
						<h3 id='h3-entrar'>Entrar</h3>
						<div className='mb-3' id='input-email'>
							<TextFieldInput
								required={true} label='E-mail' typeInput='text'
								value={state.email}
								onChange={(value: string) => {
									setState({ ...state, email: value })
								}}
							/>
						</div>
						<div className='mb-3' id='input-password'>
							<TextFieldInput
								required={true} label='Senha' typeInput='password'
								value={state.password}
								onChange={(value: string) => {
									setState({ ...state, password: value })
								}} />						</div>
						<div className='mb-3' id='checkbox-remember'>
							<CheckboxInput label='Lembrar durante 3 dias' />
						</div>
						<div className='d-flex justify-content-evenly' id='button-login' onClick={handleLogin}>
							<ComponentButtonCommon text='Entrar' loading={loading} />
						</div>
						<div id='error-response'>
							<span >{errorResponse ?? ''}</span>
						</div>
						<LinkComponent
							hrefLink='/lembrar'
							text='Clique aqui para lembrar a senha'
							size={14}
						/>
						<div id='div-line'>
							<span id='span-separete'>OU</span>
						</div>
						<Link to='/registrar'>

							<div className='d-flex justify-content-evenly' id='button-login'>
								<ComponentButtonCommon text='Cadastrar'/>
							</div>
						</Link>

						<div className='d-flex justify-content-evenly m-3' id='button-login-google' >
							<GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID_GOOGLE}`} >
								<GoogleLogin
									text='signin_with'
									logo_alignment='center'
									useOneTap
									containerProps={{ style: { display:'block', alignContent: 'center' } }}
									onSuccess={handleLoginGoogle}
								/>
							</GoogleOAuthProvider>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
