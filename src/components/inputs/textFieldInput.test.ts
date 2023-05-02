import {render, screen} from '@testing-library/react';
import {TextFieldInput} from './TextFieldInput';

describe('TextField component', () => {
	test('Shoul find label in document', () => {
		render(TextFieldInput({
			label: 'Name', typeInput: 'text', onChange() {
				return true;
			}, value: '', required: true,
		}));
		const textField = screen.getAllByText('Name');
		expect(textField[0].textContent).toBe('Name');
	});
});
