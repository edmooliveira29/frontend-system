import * as React from 'react';
import TextField from '@mui/material/TextField';

export function TextFieldInput(props: {label: string; typeInput: string}): React.ReactElement {
	return (
		<TextField
			sx={{'& > :not(style)': {m: 1, width: '23em', borderRadius: '5px'}}}
			id={`text-field-${props.label}`}
			type={props.typeInput}
			label={props.label}
			variant='outlined'
			autoComplete='on'
		/>
	);
}
