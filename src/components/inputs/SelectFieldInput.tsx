import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
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

export const SelectFieldInput: React.FC<{ label: string, required: boolean, options: any, value?: string, placeholder?: string, onChange?: any, id: string }> = (props) => {
  const [options, setOptions] = useState(props.options || [])
  const [value, setValue] = useState(props.value)
  useEffect(() => {
    if (props.options) {
      setOptions(props.options)
    }
  }, [props.options, value])
  const isValueValid = options.some((option: { value: string }) => {
    return option.value === props.value
  }
  ) || props.value === ''

  const ordenationOptions = (a: any, b: any) => {
    const nameA = a.label.toUpperCase()
    const nameB = b.label.toUpperCase()

    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  }

  if (isValueValid) {
    return (
      <>
        <label id={`label-input-${props.id}`} className='form-label m-0'>
          {props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}
        </label>
        <Box sx={{ top: '2px', backgroundColor: '#FEFEFE', '.MuiSelect-select': { padding: '7px 11px' } }}>
          <Select
            fullWidth
            id={`input-${props.id}`}
            value={props.value}
            onChange={props.onChange ? props.onChange : (event: SelectChangeEvent) => { setValue(event.target.value) }}
            sx={{ top: '2px', backgroundColor: '#FEFEFE', borderRadius: '5px', '.MuiSelect-select': { padding: '7px 11px' } }}
            displayEmpty
            renderValue={props.value !== "" ? undefined : () => <span style={{ color: '#AAAAAA', fontSize: '12px' }}> {props.placeholder} </span>}
            MenuProps={MenuProps}
            className='select-field-input'
          >
            <MenuItem selected={true} value='' disabled key=''>Selecione um {props.label} </MenuItem>

            {options.sort(ordenationOptions).map((option: any, index: number) => (
              < MenuItem key={index} value={option.value} id={`option-${index}`} >
                {(option.label).toUpperCase()}
              </MenuItem>

            ))}
          </Select>
        </Box >
      </>
    )
  } else {
    return (<></>)
  }
}
