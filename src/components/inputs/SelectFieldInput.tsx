import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import './styles.sass'


const ITEM_HEIGHT = 80
const ITEM_PADDING_TOP = 5
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 250,
    }
  }
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
        <label id={`label-input-${(props.label).toLowerCase()}`} className='form-label m-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
        <Box sx={{ top: '2px', backgroundColor: '#FEFEFE', borderRadius: '5px', '.MuiSelect-select': { padding: '7px 11px' } }}>
          <FormControl fullWidth>
            <Select
              id={`text-input-${(props.label).toLowerCase()}`}
              value={props.value}
              onChange={props.onChange ? props.onChange : (event: SelectChangeEvent) => {
                setValue(event.target.value)
              }}
              sx={{ top: '2px', backgroundColor: '#FEFEFE', borderRadius: '5px', '.MuiSelect-select': { padding: '7px 11px' } }}
              displayEmpty
              renderValue={props.value !== "" ? undefined : () => props.placeholder}
              MenuProps={MenuProps}
              className='select-field-input'
            >
              <MenuItem selected={true} value='' disabled key=''>Selecione um {props.label}  </MenuItem>

              {options.map((option: any, index: number) => (

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
