import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button, { type ButtonProps } from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const ColorButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#001a32',
  boxShadow: '2px -2px 10px gray',
  margin: '0px 10px',
  fontSize: 16,
  '&:hover': {
    backgroundColor: '#001a32',
    boxShadow: '2px -2px 10px gray',
  },
}))

export function ComponentButtonCommon(props: { text: string; sizeWidth?: string; sizeHeight?: string; loading?: boolean, onClick?: any, uploadFile?: boolean, id:string }) {
  return (
    <Stack spacing={2} direction='row' onClick={props.onClick} >
      <ColorButton
        id={`button-commom-${props.id}`}
        variant='contained'
        style={{ width: props.sizeWidth ?? '300px', height: props.sizeHeight ?? '40px', margin: '0px 10px' }}
        type='submit'
        disabled={props.loading}
      >
        {props.loading ? <div className="spinner-border" style={{ width: '20px', height: '20px', color: 'black' }} role="status" /> : props.text}
      </ColorButton>
      {props.uploadFile && <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={() => props.onClick}
        style={{ display: 'none' }}
        id="image-upload-input"
      />}

    </Stack>
  )
}
