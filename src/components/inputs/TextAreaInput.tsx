
import * as React from 'react'
export const TextAreaInput: React.FC<{ onChange?: any, id: string, height?: string, state?: any}> = ({ onChange, id, height, state }) => {
  const maxLength = 1500
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    if (newValue.length <= maxLength) {
      onChange(event)
    }
  }

  const remainingChars = maxLength - state.message.length
  return (
    <div id={`input-${id}`}>
      <textarea
        className="char-count form-control"
        placeholder={`Digite até ${maxLength} caracteres aqui dentro.`}
        maxLength={maxLength}
        value={state.message}
        onChange={handleInputChange}
        style={{ maxHeight: '200px', height: height || '100px'  }}
      />
      <p className="text-muted text-end" style={{ fontSize: '12px' }}>{remainingChars} caracteres restantes</p>
    </div>
  )
}
