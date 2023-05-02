import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function TextFieldInput(props: {label: string; typeInput: string; onChange: any; value: string; required: boolean}) {
	return (
		<>
			<label htmlFor='validationCustom01' className='form-label'>{props.label}{props.required ? ' *' : ''}</label>
			<input
				style={{padding: '15px'}}
				type={props.typeInput}
				className='form-control'
				id='validationCustom01'
				value={props.value}
				required={props.required}
				onChange={(e: any) => props.onChange(e.target.value)} />
		</>
	);
}
