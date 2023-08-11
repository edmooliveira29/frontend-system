import * as React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import './styles.sass'

export function TextFieldInput(props: { label: string; typeInput: string; onChange: any; value: string; required: boolean, placeholder?: string }) {
  const [HIDEPASSWORD, setHidePassword] = React.useState(true)

  const handleShowPassword = (): void => {
    setHidePassword(!HIDEPASSWORD)
  }
  return (
    <>
      <label title='terfsdf ' data-bs-placement="top"  className='form-label m-1'>{props.label}{props.required ? <em style={{ color: 'red' }}> *</em> : <em style={{ color: 'red' }}>  </em>}</label>
      <div className="input-wrapper" title='infpu'      >
        <input
          type={props.typeInput === "number" || props.typeInput === "text" || !HIDEPASSWORD ? props.typeInput : "password"}
          className='form-control text-field-input'
          id={(props.label).toLowerCase()}
          value={props.value || ''}
          required={props.required}
          onChange={(e: any) => props.onChange(e.target.value)}
          placeholder={props.placeholder || ''}
        />
        {props.typeInput == 'password' ?
          <i id='i-icon' onClick={handleShowPassword}>
            {HIDEPASSWORD ? <AiFillEye size={20} color='#BBBBBB' /> : <AiFillEyeInvisible size={20} color='#555555' />}
          </i> : ''}
      </div>
    </>
  )
}
