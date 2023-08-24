
import * as React from 'react'
export const TextAreaInput: React.FC<{ onChange?: any }> = ({ onChange }) => {
  const maxLength = 1500
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    if (newValue.length <= maxLength) {
      setInputValue(newValue)
      onChange(event) // Chama a função onChange passada como prop
    }
  }

  const remainingChars = maxLength - inputValue.length

  return (
    <div>
      <textarea
        className="char-count form-control"
        placeholder={`Digite até ${maxLength} caracteres aqui dentro.`}
        maxLength={maxLength}
        value={inputValue}
        onChange={handleInputChange}
        style={{maxHeight:'150px'}}
      />
      <p className="text-muted text-end" style={{ fontSize: '12px' }}>{remainingChars} caracteres restantes</p>
    </div>
  )
}
