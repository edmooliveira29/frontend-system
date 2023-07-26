import React from 'react';
import {
	render,
	screen,
	cleanup,
	createEvent,
} from '@testing-library/react';
import {Login} from './Login';

// Mock do arquivo de estilo
jest.mock('./stylesUser.sass', () => ({}));

describe('Login component', () => {
	afterEach(() => {
		cleanup();
	});

	test('Should renders email and password fields', () => {
		render(<Login />);
		const emailInput = screen.getByLabelText('E-mail');
		const passwordInput = screen.getByLabelText('Senha');
		expect(emailInput).toMatchSnapshot();
		expect(passwordInput).toMatchSnapshot();
		expect(emailInput).toHaveAttribute('type', 'text');
		expect(passwordInput).toHaveAttribute('type', 'password');
	});

	test('Should renders remember checkbox', () => {
		render(<Login />);
		const rememberCheckbox = screen.getByLabelText('Lembrar durante 3 dias');
		expect(rememberCheckbox).toMatchSnapshot();
	});

	test('Should renders submit button', () => {
		render(<Login />);
		const submitButton = screen.getAllByText('Entrar');
		expect(submitButton).toMatchSnapshot();
		expect(submitButton[0].textContent).toBe('Entrar');
		expect(submitButton[1].tagName).toBe('BUTTON');
	});

	test('Should to click on submit button calls onSubmit function', () => {
		const onSubmit = jest.fn();
		render(<Login />);
		const submitButton = screen.getAllByText('Entrar');
		expect(submitButton[0].textContent).toBe('Entrar');
		createEvent.click(submitButton[1]);
		expect(onSubmit).toHaveBeenCalledTimes(1);
	});

	test('Should renders link to password recovery page', () => {
		render(<Login />);
		const passwordRecoveryLink = screen.getByText(
			'Clique aqui para lembrar a senha',
		);
		expect(passwordRecoveryLink).toMatchSnapshot();
		expect(passwordRecoveryLink).toHaveAttribute('href', '/lembrar');
	});
});
