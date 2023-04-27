import React from 'react';
import {render, screen} from '@testing-library/react';
import {CheckboxInput} from './CheckboxInput';

describe('TextField component', () => {
	test('Shoul find label in document', () => {
		render(<CheckboxInput label={'Label'} />);
		const checkBoxField = screen.getAllByText('Label');
		expect(checkBoxField[0].textContent).toBe('Label');
	});
});
