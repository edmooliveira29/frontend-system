import React from 'react'
import './styles.sass'
import { Grid, Switch } from '@mui/material'

export const SwitchInput: React.FC<{ labelTitle: string, label1: string, label2: string, onChange: any, value: boolean, id: string }> = (props) => {

  return (
    <>
      <Grid component="label" className='d-flex align-items-center' >
        <label id={`label-input-${(props.labelTitle).toLowerCase()}`}>{props.labelTitle}</label>
        <Grid item>{props.label1}</Grid>
        <Grid item alignItems="center">
          <Switch
            id={`input-${props.id}`}
            color='success'
            onChange={props.onChange}
            value={props.value}
          />
        </Grid>
        <Grid item>{props.label2}</Grid>
      </Grid>

    </>
  )
}
