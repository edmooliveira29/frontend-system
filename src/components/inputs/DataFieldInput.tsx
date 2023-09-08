import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker, ptBR } from '@mui/x-date-pickers'
import "dayjs/locale/pt-br"
import dayjs from 'dayjs'

export const DataFieldInput = (props: { label: string, required?: boolean, value?: string, onChange?: any, id:string }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br' localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
      <label className='form-label m-0' id={`label-input-${props.id}`}>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
      <DemoContainer components={['DatePicker']}
        sx={{
          overflow: 'hidden', padding:'0px'
        }}    >
        <div id={`input-${props.id}`} style={{borderRadius: '5px', margin:'0px'}} >
          <DesktopDatePicker
            sx={{ margin:'0px', width:'100%'}}
            slotProps={{ textField: { size: 'small' } }}
            className={'data-picker-input'}
            value={props.value ? dayjs(props.value) : null}
            onChange={props.onChange}
            format='DD/MM/YYYY'
            localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  )
}

