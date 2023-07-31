import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker, ptBR } from '@mui/x-date-pickers'
import { makeStyles } from '@mui/styles'
import "dayjs/locale/pt-br"
import dayjs from 'dayjs'

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

export default function DataFieldInput(props: { label: string, required?: boolean, value?: string, onChange?: any }) {
  const classes = useStyles()
  const value = props.value ? dayjs(props.value) : undefined
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br' localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
      <label className='form-label m-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
      <DemoContainer components={['DatePicker']}
        sx={{
          height: '46px', marginBottom: '8px', overflow: 'hidden',
          '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '1px solid black' },
          '.css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input': {
            fontSize: '12px',
            paddingTop: '14px'
          }
        }}    >
        <DesktopDatePicker
          slotProps={{ textField: { size: 'small' } }}
          className={classes.datePickerInput}
          value={value || undefined}
          onChange={(e: any) => props.onChange(e.target.value)}
          format='DD/MM/YYYY'
          localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}