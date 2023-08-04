import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker, ptBR } from '@mui/x-date-pickers'
import "dayjs/locale/pt-br"
import dayjs from 'dayjs'

export const DataFieldInput = (props: { label: string, required?: boolean, value?: string, onChange?: any }) => {
  const [value, setValue] = useState(dayjs(props.value))
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br' localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
      <label className='form-label m-0'>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
      <DemoContainer components={['DatePicker']}
        sx={{
          height: '46px', marginBottom: '8px', overflow: 'hidden',
          '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { border: '1px solid black' }
        }}    >
        <DesktopDatePicker
          slotProps={{ textField: { size: 'small' } }}
          className={'data-picker-input'}
          value={props.value ? value : null}
          onChange={(e: any) => setValue(e)}
          format='DD/MM/YYYY'
          localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}