import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export function CheckboxInput(props: {label: string}): React.ReactElement {
	return (
		<FormGroup >
			<FormControlLabel
				control={<Checkbox color='success' />}
				label={props.label}
				style={{ fontSize: '12px' }}

			/>
		</FormGroup>
	);
}
