import React from 'react';
import {TextFieldInput} from '../../components/inputs/TextFieldInput';
import {CheckboxInput} from '../../components/inputs/CheckboxInput';
import {ComponentButtonCommon} from '../../components/button/ComponentButtonCommon';
import {LinkComponent} from '../../components/inputs/link/LinkComponent';
import './stylesUser.sass';
import NavBar from '../../components/navBar/NavBar';

const Login: React.FC = () => {
	function onClick() {
		console.log('aqui');
	}

	return (
		<div onSubmit={onClick}>
			<NavBar />
			<div className='row'>
				<div
					id='div-login'
					style={{border: '1px solid'}}
					className='col-md-12'
				>
					<form id='form-login'>
						<h3 id='h3-entrar'>Entrar</h3>
						<div className='mb-3' id='input-email'>
							<TextFieldInput label='E-mail' typeInput='text' />
						</div>
						<div className='mb-3' id='input-password'>
							<TextFieldInput label='Senha' typeInput='password' />
						</div>
						<div className='mb-3' id='checkbox-remember'>
							<CheckboxInput label='Lembrar durante 3 dias' />
						</div>
						<div className='d-grid' id='button-login' onSubmit={onClick}>
							<ComponentButtonCommon text='Entrar' />
						</div>
						<LinkComponent
							hrefLink='/lembrar'
							text='Clique aqui para lembrar a senha'
							size={14}
						/>
						<div id='div-line'>
							<span id='span-separete'>OU</span>
						</div>

						<div className='d-grid' id='button-login-google' onSubmit={onClick}>
							<ComponentButtonCommon text='Entrar com o GOOGLE' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
