import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function ComponentButtonSuccess(props: {text: string}) {
  return (
    <Stack direction='row' spacing={2}>
      <Button variant='contained' color='success'>
        {props.text}
      </Button>
    </Stack>
  );
}
