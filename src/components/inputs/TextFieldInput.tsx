import * as React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import './styles.sass'

export function TextFieldInput(props: { label: string; typeInput: string; onChange: any; value: string; required: boolean }) {
  const [HIDEPASSWORD, setHidePassword] = React.useState(true)

  const handleShowPassword = (): void => {
    setHidePassword(!HIDEPASSWORD)
  }
  return (
    <>
      <label className='form-label mb-0'>{props.label}{props.required ? <a style={{color: 'red'}}> *</a> : ''}</label>
      <div className="input-wrapper">
        <input
          style={{margin: '0px', height: '40px'}}
          type={props.typeInput === "text" || !HIDEPASSWORD ? "text" : "password"}
          className='form-control'
          id={(props.label).toLowerCase()}
          value={props.value}
          required={props.required}
          onChange={(e: any) => props.onChange(e.target.value)}
        />
        {props.typeInput == 'password' ?
          <i id='i-icon' onClick={handleShowPassword}>
            {HIDEPASSWORD ? <AiFillEye size={20}  color='#BBBBBB'/> : <AiFillEyeInvisible size={20} color='#555555'/>}
          </i> : ''}
      </div>
    </>
  )
}
