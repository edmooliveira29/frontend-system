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

export const Login: React.FC = () => {
	const [state, setState] = React.useState({
		email: '',
		password: '',
		passwordConfirmation: '',
		username: '',
	})
	const [errorResponse, setErrorResponse] = useState('')
	const navigate = useNavigate()
	const handleKeyEnter = async (e: React.KeyboardEvent) => {
		if (e.key == 'Enter') {
			await handleLogin()
		}
	}
	const handleLogin = async () => {
		const userService = new UserService()
		setErrorResponse('')
		try {
			await userService.login({
				email: state.email,
				password: state.password,
			})
			navigate('/dashboard')
		} catch (error: any) {
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
						<h3 id='h3-entrar'>Entrar</h3>
						<div className='mb-3' id='input-email' onKeyDown={handleKeyEnter}>
							<TextFieldInput
								required={true} label='E-mail' typeInput='text'
								value={state.email}
								onChange={(value: string) => {
									setState({ ...state, email: value })
								}}
							/>
						</div>
						<div className='mb-3' id='input-password' onKeyDown={handleKeyEnter}>
							<TextFieldInput
								required={true} label='Senha' typeInput='password'
								value={state.password}
								onChange={(value: string) => {
									setState({ ...state, password: value })
								}}
							/>
						</div>
						<div className='mb-3' id='checkbox-remember'>
							<CheckboxInput label='Lembrar durante 3 dias' />
						</div>
						<div className='d-grid' id='button-login'>
							<ComponentButtonCommon text='Entrar' onClick={handleLogin} />
						</div>
						<div>
							<span id='error-response'>{errorResponse}</span>
						</div>
						<Link to='/lembrar' id='link-remember'>Clique aqui para lembrar a senha</Link>
						<div id='div-line'>
							<span id='span-separete'>OU</span>
						</div>
						<Link to='/registrar' id='button-login-google'>
								<ComponentButtonCommon text='Entrar com o GOOGLE' />
						</Link>
						<Link to='/lembrar' id='link-create'>Criar conta</Link>
					</div>
				</div>
			</div>
		</div >
	)
}
