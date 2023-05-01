
import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

export default function TextAreaInput() {
	return (
		<div className='mb-3'>
			<textarea className='form-control bg-light m-1 bg-transparent border border-secondary' placeholder='Digite aqui seu texto' id='exampleFormControlTextarea1'></textarea>
		</div>
	);
}
