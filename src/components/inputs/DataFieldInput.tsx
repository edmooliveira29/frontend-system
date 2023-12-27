import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker, ptBR } from '@mui/x-date-pickers'
import moment from 'moment'
export const DataFieldInput = (props: { label: string, required?: boolean, value?: string, onChange?: any, id:string }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='pt-BR' localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
      <label className='form-label' style={{ marginBottom: '0px' }} id={`label-input-${props.id}`}>{props.label}{props.required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
      <DemoContainer components={['DatePicker']}
        sx={{
          overflow: 'hidden', padding:'0px'
        }}    >
        <div id={`input-${props.id}`} style={{borderRadius: '5px', margin:'0px', width:'100%'}} >
          <DesktopDatePicker
            slotProps={{ textField: { size: 'small' } }}
            className={'data-picker-input'}
            value={props.value ? moment(props.value) : null}
            onChange={props.onChange}
            format='DD/MM/YYYY'
            localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  )
}

