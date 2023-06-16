import React, { useState } from 'react'
import { ComponentButtonCommon } from '../../../components/button/ComponentButtonCommon'
import { TextFieldInput } from '../../../components/inputs/TextFieldInput'
import NavBar from '../../../components/navBar/NavBar'
import { UserService } from '../../../services/User/user-http'
import { useNavigate } from 'react-router-dom'
import { LoginGoogle } from '../../../services/User/user-google'
import './stylesUser.sass'

export const Singin = () => {
	const navigate = useNavigate()
	const [state, setState] = React.useState({
		email: '',
		password: '',
		passwordConfirmation: '',
		name: '',
	})
	const [loading, setLoading] = useState(false)
	const [errorResponse, setErrorResponse] = useState('')

	const handleSave = async () => {
		setLoading(true)
		const userService = new UserService()

		try {
			await userService.create({
				email: state.email,
				name: state.name,
				password: state.password,
				passwordConfirm: state.passwordConfirmation,
			})
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

	const handleGoogle = (error: string) => {
		setErrorResponse(error)
	}

	return (
		<div>
			<div>
				<NavBar />
				<div
					id='div-login'
					className='col-md-12'
				>
					<div id='div-login-form' >
						<h3 id='h3-enter-register'>Registrar</h3>
						<div id='input-email' className='m-2'>
							<TextFieldInput
								required={true}
								label='Nome'
								typeInput='text'
								value={state.name}
								onChange={(value: string) => {
									setState({ ...state, name: value })
								}}
							/>
						</div>
						<div id='input-email' className='m-2'>
							<TextFieldInput
								required={true}
								label='E-mail'
								typeInput='text'
								value={state.email}
								onChange={(value: string) => {
									setState({ ...state, email: value })
								}}
							/>
						</div>
						<div id='input-password' className='m-2'>
							<TextFieldInput
								required={true}
								label='Senha' typeInput='password'
								value={state.password}
								onChange={(value: string) => {
									setState({ ...state, password: value })
								}}
							/>
						</div>
						<div id='input-password' className='m-2'>
							<TextFieldInput
								required={true} label='Confirme sua senha' typeInput='password'
								value={state.passwordConfirmation}
								onChange={(value: string) => {
									setState({ ...state, passwordConfirmation: value })
								}}
							/>
						</div>
						<div className='d-grid' id='button-login' onClick={handleSave}>
							<ComponentButtonCommon text='Registrar' loading={loading} />
						</div>
						<div id='error-response'>
							<span >{errorResponse ?? ''}</span>
						</div>
						<div id="div-line">
							<span>OU</span>
						</div>

						<div className='justify-content' id='button-login-google' >
							<LoginGoogle errorResponse={handleGoogle} />
						</div>
					</div>
				</div>
			</div>
		</div >)
}
