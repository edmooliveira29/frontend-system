import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'



const ITEM_HEIGHT = 80
const ITEM_PADDING_TOP = 5
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export const SelectFieldInput: React.FC<{ label: string, required: boolean, options: any, value?: string, placeholder?: string, onChange?: any }> = (props) => {
  const [options, setOptions] = useState(props.options || [])
  const [value, setValue] = useState(props.value)
  useEffect(() => {
    if (props.options) {
      setOptions(props.options)
    }
  }, [props.options, value])
  const isValueValid = options.some((option: { value: string }) => option.value === props.value) || props.value === ''
  if (isValueValid) {
    return (
      <>
        <label className='form-label m-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
        <Box sx={{ minWidth: 120, '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '1px solid black' } }}>
          <FormControl fullWidth>
            <Select
              id="demo-simple-select"
              value={props.value}
              onChange={props.onChange ? props.onChange : (event: SelectChangeEvent) => {
                setValue(event.target.value)}}
              sx={{ height: '38px', top: '2px', backgroundColor: 'white', opacity: '70%', borderRadius: '5px' }}
              displayEmpty
              renderValue={props.value !== "" ? undefined : () => props.placeholder}
              MenuProps={MenuProps}
            >
              <MenuItem value='' disabled key=''>Selecione um {props.label}  </MenuItem>

              {options.map((option: { value: string; label: string }, index: number) => (
                < MenuItem key={index} value={option.value} >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box >
      </>
    )
  } else {
    return (<></>)
  }
}
