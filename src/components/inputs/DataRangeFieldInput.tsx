import React, { useState } from 'react'

export function DataRangeFieldInput(props: { label: string, required?: boolean, value?: string, onChange?: any, id: string }) {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  })

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue)
    setValue(newValue)
  }

  return (
    <>
      
    </>
  )
}