import * as React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import './styles.sass'

export function TextFieldInput(props: { label: string; typeInput: string; onChange?: any; value: string; required: boolean, placeholder?: string, disabled?: boolean, id: string }) {
  const [HIDEPASSWORD, setHidePassword] = React.useState(true)
  const [typeInput, setTypeInput] = React.useState(props.typeInput)

  const handleShowPassword = (): void => {
    setHidePassword(!HIDEPASSWORD)
    setTypeInput(HIDEPASSWORD ? 'text' : 'password')
  }
  const symbolR$ = ['preço', 'subtotal', 'unitário', 'r$', 'salário']
  return (
    <>
      <label htmlFor={`input-${props.id}`} id={`label-input-${props.id}`}
        data-bs-placement="top" className='form-label m-1'>{props.label}{props.required ? <em style={{ color: 'red' }}> *</em> : <em style={{ color: 'red' }}>  </em>}</label>
      <div className="input-group input-wrapper" >
        {symbolR$.some(symbol => props.label.toLowerCase().includes(symbol)) && <span className="input-group-text">R$</span>}
        {props.label.toLowerCase().includes('%') && <span className="input-group-text"> %  </span>}
        {(props.label).toLowerCase().includes('email') ? <span className="input-group-text">@</span> : ''}
        <input
          type={typeInput}
          className='form-control text-field-input'
          id={`input-${props.id}`}
          value={props.value}
          required={props.required}
          min={props.typeInput == 'date' ? '01-01-1900' : ''}
          max={props.typeInput == 'date' ? `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}` : ''}
          onChange={(e: any) => props.onChange(e.target.value)}
          placeholder={props.placeholder || ''}
          disabled={props.disabled || false}
        />
        {props.typeInput == 'password' ?
          <i id='i-icon' onClick={handleShowPassword}>
            {HIDEPASSWORD ? <AiFillEye size={20} color='#BBBBBB' /> : <AiFillEyeInvisible size={20} color='#555555' />}
          </i> : ''}
      </div>
    </>
  )
}
