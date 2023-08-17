import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'

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



export const MultiSelectFieldInput = (props: { options: any, label: string, required: boolean, onChange: any , value: any}) => {

  return (
    <div>
      <label id={`label-input-${(props.label).toLowerCase()}`} className='form-label m-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>

      <FormControl sx={{ m:0, width: '100%',top: '2px', backgroundColor: '#FEFEFE', borderRadius: '5px', '.MuiSelect-select': { padding: '7px 10px' } }}>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={props.value}
          onChange={props.onChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          
          sx={{ top: '0px', backgroundColor: '#FEFEFE', borderRadius: '5px', '.MuiSelect-select': { padding: '7px 11px' }, '.MuiButtonBase-root':{color:'#F101010'} }}
        >
          {props.options.map((option: any) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={props.value.indexOf(option) > -1} color='success'/>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}