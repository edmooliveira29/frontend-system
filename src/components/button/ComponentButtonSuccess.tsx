import * as React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export function ComponentButtonSuccess(props: { text: string; sizeWidth?: string; sizeHeight?: string; loading?: boolean, onClick?: any }) {
  return (
    <Stack spacing={2} onClick={props.onClick} >
      <Button
        color='success'
        id='button'
        variant='contained'
        style={{ width: props.sizeWidth ?? '300px', height: props.sizeHeight ?? '40px', margin: '0px 10px', boxShadow: '2px -2px 10px gray' }}
        type='submit'
        disabled={props.loading}
      >
        {props.loading ? <div className="spinner-border text-light" role="status" /> : props.text}
      </Button>
    </Stack>
  )
}
