import * as React from 'react';
import TextField from '@mui/material/TextField';

export function TextFieldInput(props: {label: string; typeInput: string}): React.ReactElement {
	return (
		<TextField
			sx={{'& > :not(style)': {m: 1, width: '100%', borderRadius: '5px', minWidth: 'clamp(0px, ($targetWidth - 100%) * 999, 100%)'}}}
			id={`text-field-${props.label}`}
			type={props.typeInput}
			label={props.label}
			variant='outlined'
			autoComplete='on'
		/>
	);
}
