import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
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



export const MultiSelectFieldInput = (props: { options: any, label: string, required: boolean, onChange: any , value: any, id:string}) => {

  return (
    <div>
      <label id={`label-input-${props.id}`} className='form-label m-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>

      <FormControl sx={{ m:0, width: '100%',top: '2px', backgroundColor: '#FEFEFE', borderRadius: '5px', '.MuiSelect-select': { padding: '7px 10px' } }}>
        <Select
          id={`input-${props.id}`}
          multiple
          value={props.value}
          onChange={props.onChange}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          
          sx={{ top: '0px', backgroundColor: '#FEFEFE', borderRadius: '5px', '.MuiSelect-select': { padding: '7px 11px' }, '.MuiButtonBase-root':{color:'#F101010'} }}
        >
          {props.options.map((option: any, index: number) => (
            <MenuItem key={option} value={option} id={`option-${index}`}>
              <Checkbox checked={props.value.indexOf(option) > -1} color='success'/>
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}