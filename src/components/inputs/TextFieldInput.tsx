/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function TextFieldInput(props: {label: string; typeInput: string; onChange: any; value: string}) {
	return (
		<Box
			component='form'
			sx={{
				'& > :not(style)': {m: 1, width: '100%', minWidth: 'clamp(0px, ($targetWidth - 100%) * 999, 100%)'},
			}}
			noValidate
			autoComplete='off'
		>
			<TextField
				id={`text-field-${props.label}`}
				type={props.typeInput}
				label={props.label}
				variant='outlined'
				onChange={(e: any) => props.onChange(e.target.value)}
				value={props.value} />
		</Box>
	);
}
