import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export function CheckboxInput(props: { label: string, onChange: any, required?: boolean, name?: string }): React.ReactElement {
  return (
    <FormGroup >
      <FormControlLabel
        id={`checkbox-input-${props.name}`}
        control={<Checkbox color='success' />}
        label={props.label}
        required={props.required || false}
        style={{ fontSize: '12px' }}
        onChange={(e: any) => props.onChange(e.target.value)}
      />
    </FormGroup>
  )
}
