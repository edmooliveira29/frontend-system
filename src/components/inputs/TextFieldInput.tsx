import * as React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import './styles.sass'

export function TextFieldInput(props: { label: string; typeInput: string; onChange?: any; value: string; required: boolean, placeholder?: string, disabled?: boolean, id: string }) {
  const [HIDEPASSWORD, setHidePassword] = React.useState(true)

  const handleShowPassword = (): void => {
    setHidePassword(!HIDEPASSWORD)
  }
  const symbolR$ = ['preço', 'subtotal', 'unitário', 'r$']
  return (
    <>
      <label htmlFor={`input-${props.id}`} id={`label-input-${props.id}`}
        data-bs-placement="top" className='form-label m-1'>{props.label}{props.required ? <em style={{ color: 'red' }}> *</em> : <em style={{ color: 'red' }}>  </em>}</label>
      <div className="input-group input-wrapper" >
        {symbolR$.some(symbol => props.label.toLowerCase().includes(symbol)) && <span className="input-group-text">R$</span>}
        {props.label.toLowerCase().includes('%') && <span className="input-group-text"> %  </span>}
        {(props.label).toLowerCase().includes('email') ? <span className="input-group-text">@</span> : ''}
        <input
          type={props.typeInput === "number" || props.typeInput === "text" || !HIDEPASSWORD ? props.typeInput : "password"}
          className='form-control text-field-input'
          id={`input-${props.id}`}
          value={props.value || ''}
          required={props.required}
          min='0'
          max='10000'
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
