import * as React from 'react'
import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker, ptBR } from '@mui/x-date-pickers'
import { makeStyles } from '@mui/styles'
import "dayjs/locale/pt-br"

const useStyles = makeStyles(() => ({
  datePickerInput: {
    backgroundColor: 'white',
    top: '-2px',
    position: 'relative',
    color: 'GrayText',
    borderRadius: '5px',
    height: '40px',
    padding: '0px',
    margin: '0px',
    overflow: 'hidden',
    width: '100%',
    opacity: '75%',
    '& .MuiInputBase-root': {
      '&:focus': {
        border: 'transparent'
      }
    },
    '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '1px solid black' },
  }
}))

export default function DataFieldInput(props: { label: string, required?: boolean }) {
  const classes = useStyles()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br' localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
      <label className='form-label m-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
      <DemoContainer components={['DatePicker']}
        sx={{ height: '46px', marginBottom: '8px', overflow: 'hidden', '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '1px solid black' } }}      >
        <DesktopDatePicker
          slotProps={{ textField: { size: 'small' } }}
          className={classes.datePickerInput}
          format='DD/MM/YYYY'
          localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}