import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { TextFieldInput, LinkComponent, CheckboxInput } from '../../../../components/inputs'
import { ComponentButtonCommon } from '../../../../components/button/ComponentButtonCommon'
import NavBar from '../../../../components/navBar/NavBar'
import { UserService } from '../../../../services/User/user-http'
import { LoginGoogle } from '../../../../services/User/user-google'
import '../stylesUser.sass'
import { handleLogin } from './handleLogin'

export const Login: React.FC = () => {
	const [state, setState] = React.useState({
		email: '',
		password: '',
		username: '',
		remember: false
	})
	const [loading, setLoading] = useState(false)
	const [errorResponse, setErrorResponse] = useState('')
	const navigate = useNavigate()
	const userService = new UserService()

	const handleLoginHook = async () => {
		handleLogin(setLoading, setErrorResponse, state, userService, navigate)
	}

	const handleGoogle = (error: string) => {
		setErrorResponse(error)
	}

	return (
		<>
			<div>
				<NavBar />
				<div id='div-login'>
					<div id='div-login-form'>
						<h3 id='h3-enter-register'>Entrar</h3>
						<div className='m-3' id='input-email'>
							<TextFieldInput
								required={true} label='E-mail'
								typeInput='text'
								value={state.email}
								onChange={(value: string) => { setState({ ...state, email: value }) }}
							/>
						</div>
						<div className='m-3' id='input-password'>
							<TextFieldInput
								required={true}
								label='Senha'
								typeInput='password'
								value={state.password}
								onChange={(value: string) => { setState({ ...state, password: value }) }} />
						</div>
						<div className='m-3' id='checkbox-remember'>
							<CheckboxInput
								label='Lembrar durante 7 dias'
								onChange={() => { setState({ ...state, remember: !state.remember }) }} />
						</div>
						<div className='d-flex justify-content-evenly' id='button-login' onClick={handleLoginHook}>
							<ComponentButtonCommon text='Entrar' width='310px' loading={loading} />
						</div>
						<div id='error-response'>
							<span >{errorResponse ?? ''}</span>
						</div>
						<LinkComponent
							hrefLink='/lembrar'
							text='Clique aqui para lembrar a senha'
							size='12px'
						/>
						<div id="div-line">
							<span>OU</span>
						</div>
						<Link to='/registrar' className='d-flex justify-content-evenly' id='button-login'>
							<ComponentButtonCommon text='Registrar' width='310px' />
						</Link>

						<div className='justify-content-evenly p-2' id='button-login-google' >
							<LoginGoogle errorResponse={handleGoogle} />
						</div>
					</div>
				</div>
			</div>
		</>
	)

}
