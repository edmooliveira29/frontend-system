import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { TextFieldInput } from '../../../components/inputs/TextFieldInput'
import { CheckboxInput } from '../../../components/inputs/CheckboxInput'
import { ComponentButtonCommon } from '../../../components/button/ComponentButtonCommon'
import { LinkComponent } from '../../../components/inputs/link/LinkComponent'
import NavBar from '../../../components/navBar/NavBar'
import { UserService } from '../../../services/User/user-http'
import './stylesUser.sass'

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import { handleLoginGoogle } from '../../../services/User/user-google'

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
						<h3 id='h3-enter-register'>Entrar</h3>
						<div className='m-3' id='input-email'>
							<TextFieldInput
								required={true} label='E-mail'
								typeInput='text'
								value={state.email}
								onChange={(value: string) => {
									setState({ ...state, email: value })
								}}
							/>
						</div>
						<div className='m-3' id='input-password'>
							<TextFieldInput
								required={true} label='Senha'
								typeInput='password'
								value={state.password}
								onChange={(value: string) => {
									setState({ ...state, password: value })
								}} />						</div>
						<div className='m-3' id='checkbox-remember'>
							<CheckboxInput label='Lembrar durante 3 dias' />
						</div>
						<div className='d-flex justify-content-evenly' id='button-login' onClick={handleLogin}>
							<ComponentButtonCommon text='Entrar' width='310px' loading={loading} />
						</div>
						<div id='error-response'>
							<span >{errorResponse ?? ''}</span>
						</div>
						<LinkComponent
							hrefLink='/lembrar'
							text='Clique aqui para lembrar a senha'
							size={14}
						/>
						<div id="div-line">
							<span>OU</span>
						</div>
						<Link to='/registrar' className='d-flex justify-content-evenly' id='button-login'>
							<ComponentButtonCommon text='Registrar' width='310px' />
						</Link>

						<div className='justify-content-evenly p-2' id='button-login-google' >
							<GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID_GOOGLE}`} >
								<GoogleLogin
									text='signin_with'
									logo_alignment='left'
									useOneTap
									containerProps={{ style: { width: '310px' } }}
									onSuccess={handleLoginGoogle}
									width='310px'
								/>
							</GoogleOAuthProvider>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
