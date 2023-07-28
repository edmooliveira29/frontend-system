import * as React from 'react'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  datePickerInput: {
    backgroundColor: 'white',
    color: 'GrayText',
    border: 'transparent',
    borderRadius: '2px',
    height: '40px',
    padding: '0px',
    margin: '0px',
    overflow: 'hidden',
    opacity: '50%',
    '& .MuiInputBase-root': {
      '&:focus': {
        color:'blue'
      }
    },
  }
}))

export default function DataFieldInput(props: { label: string, required?: boolean }) {
  const classes = useStyles()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <label className='form-label mb-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
        ]}
        sx={{ height: '50px', ':active': { boxShadow: 'none' } }}
      >
        <DesktopDatePicker
          slotProps={{ textField: { size: 'small' }, }}
          className={classes.datePickerInput}
          //sx={{ backgroundColor: 'white', color: 'GrayText', border: 'none', borderRadius: '2px', height: '40px', padding: '0px', margin: '0px', overflow: 'hidden' }}
          defaultValue={dayjs('2022-04-17')} />
      </DemoContainer>
    </LocalizationProvider>
  )
}