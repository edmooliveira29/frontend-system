import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function SelectFieldInput(props: { label: string, required: boolean, options: any, value?: string }) {
  const [value, setValue] = React.useState(props.value || '')

  React.useEffect(() => {
    setValue(props.value || '')
  }, [props.value])

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <>
      <label className='form-label m-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
      <Box sx={{ minWidth: 120, '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '1px solid black' } }}>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={value}
            onChange={handleChange}
            sx={{ height: '40px', backgroundColor: 'white', opacity: '50%', borderRadius: '5px', }}
          >
            {props.options.map((option: { value: string; label: string }, index: number) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  )
}
