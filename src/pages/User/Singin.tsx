import React from 'react';
import {LinkComponent} from '../../components/inputs/link/LinkComponent';
import {ComponentButtonCommon} from '../../components/button/ComponentButtonCommon';
import {CheckboxInput} from '../../components/inputs/CheckboxInput';
import {TextFieldInput} from '../../components/inputs/TextFieldInput';
import NavBar from '../../components/navBar/NavBar';
import {UserService} from '../../services/User/user-http';

export const Singin = () => {
	const [state, setState] = React.useState({
		email: '',
		password: '',
		passwordConfirmation: '',
		name: '',
	});

	const handleSave = async () => {
		const userService = new UserService();
		try {
			await userService.create(state);
		} catch (e) {
			console.error();
		}
	};

	return (
		<div>
			<div>
				<NavBar />
				<div className='row'>
					<div
						id='div-login'
						style={{border: '1px solid'}}
					>
						<div id='div-login-form'>
							<h3 id='h3-entrar'>Registrar</h3>
							<div className='mb-3' id='input-email'>
								<TextFieldInput label='Name' typeInput='text'
									value={state.name}
									onChange={(value: string) => {
										setState({...state, name: value});
									}}
								/>
							</div>
							<div className='mb-3' id='input-email'>
								<TextFieldInput label='E-mail' typeInput='text'
									value={state.email}
									onChange={(value: string) => {
										setState({...state, email: value});
									}}
								/>
							</div>
							<div className='mb-3' id='input-password'>
								<TextFieldInput label='Senha' typeInput='password'
									value={state.password}
									onChange={(value: string) => {
										setState({...state, password: value});
									}} />
							</div>
							<div className='mb-3' id='input-password'>
								<TextFieldInput label='Confirme sua senha' typeInput='password'
									value={state.passwordConfirmation}
									onChange={(value: string) => {
										setState({...state, passwordConfirmation: value});
									}} />
							</div>
							<div className='d-grid' id='button-login' onClick={handleSave}>
								<ComponentButtonCommon text='Registrar' />
							</div>
							<LinkComponent
								hrefLink='/lembrar'
								text='Clique aqui para lembrar a senha'
								size={14}
							/>
							<div id='div-line'>
								<span id='span-separete'>OU</span>
							</div>
							<div className='d-grid' id='button-login-google' onSubmit={handleSave}>
								<ComponentButtonCommon text='Entrar com o GOOGLE' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >);
};
