import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import {ComponentButtonCommon} from './ComponentButtonCommon';

describe('ComponentButtonCommon', () => {
	afterEach(() => {
		cleanup();
	});

	test('Should renders button with text', () => {
		const buttonText = 'Click me!';
		render(<ComponentButtonCommon text={buttonText} />);
		const buttonElement = screen.getByText(buttonText);
		expect(buttonElement).toMatchSnapshot();
	});

	test('Should renders button with custom width', () => {
		const buttonText = 'Click me!';
		const buttonWidth = '200px';
		render(<ComponentButtonCommon text={buttonText} width={buttonWidth} />);
		const buttonElement = screen.getByText(buttonText);
		expect(buttonElement).toMatchSnapshot();
		expect(buttonElement).toHaveStyle(`width: ${buttonWidth}`);
	});

	test('Should applies styles to button on hover', () => {
		const buttonText = 'Click me!';
		render(<ComponentButtonCommon text={buttonText} />);
		const buttonElement = screen.getByText(buttonText);
		buttonElement.dispatchEvent(new MouseEvent('mouseover', {bubbles: true}));
		expect(buttonElement).toHaveStyle('opacity: 0.8');
		expect(buttonElement).toHaveStyle('background-color: #001a32');
		expect(buttonElement).toHaveStyle('box-shadow: 2px -2px 10px gray');
	});
});
