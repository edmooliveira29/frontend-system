
import * as React from 'react'
export const TextAreaInput: React.FC<{ onChange?: any, id: string, height?: string, value?: any}> = ({ onChange, id, height, value }) => {
  const maxLength = 1500
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    if (newValue.length <= maxLength) {
      onChange(event)
    }
  }

  const remainingChars = maxLength - value.length
  return (
    <div id={`input-${id}`}>
      <textarea
        className="char-count form-control"
        placeholder={`Digite até ${maxLength} caracteres aqui dentro.`}
        maxLength={maxLength}
        value={value}
        onChange={handleInputChange}
        style={{ maxHeight: '200px', height: height || '100px'  }}
      />
      <p className="text-muted text-end" style={{ fontSize: '12px' }}>{remainingChars} caracteres restantes</p>
    </div>
  )
}
