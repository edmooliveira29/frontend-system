import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button, { type ButtonProps } from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const ColorButton = styled(Button)<ButtonProps>(() => ({
	backgroundColor: '#001a32',
	boxShadow: '2px -2px 10px gray',
	margin: '0px 10px',
	fontSize: 16,
	'&:hover': {
		backgroundColor: '#001a32',
		boxShadow: '2px -2px 10px gray',
	},
}))

export function ComponentButtonCommon(props: { text: string; width?: string; sizeButton?: string; loading?: boolean }) {
	return (
		<Stack spacing={2} direction='row'>
			<ColorButton
				variant='contained'
				style={{ width: props.width ?? '100%', height: props.sizeButton ?? '60px', margin: '5px 10px' }}
				type='submit'
				disabled={props.loading}
			>
				{props.loading ? <div className="spinner-border text-light" role="status" /> : props.text}
			</ColorButton>
		</Stack>
	)
}
