/* eslint-disable @typescript-eslint/naming-convention */
import * as React from 'react';
import {styled} from '@mui/material/styles';
import Button, {type ButtonProps} from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ColorButton = styled(Button)<ButtonProps>(() => ({
	backgroundColor: '#003566',
	boxShadow: '2px -2px 10px gray',
	margin: '0px 8px',
	fontSize: 16,
	'&:hover': {
		backgroundColor: '#003566',
		boxShadow: '2px -2px 10px gray',
	},
}));

export function ComponentButtonCommon(props: {text: string; width?: string}) {
	return (
		<Stack spacing={2} direction='row'>
			<ColorButton
				variant='contained'
				size='large'
				style={{width: props.width ?? '100%'}}
				type='submit'
			>
				{props.text}
			</ColorButton>
		</Stack>
	);
}
