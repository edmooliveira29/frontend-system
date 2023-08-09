import React from 'react'
import { TextFieldInput } from '../../../components'

export const PasswordData = (props: { state: any, setUser: any }) => {

  return (<>
    <h4 id="title-personal-data">SENHA DO SISTEMA</h4>
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <TextFieldInput
          label="Senha antiga"
          placeholder='Digite aqui o antiga senha'
          required={true}
          value={props.state.password}
          typeInput="password"
          onChange={(value: string) => { props.setUser({ ...props.state, password: value }) }}
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <TextFieldInput
          label="Senha Nova"
          placeholder='Digite aqui a nova senha'
          required={true}
          value={props.state.newPassword}
          typeInput="password"
          onChange={(value: string) => { props.setUser({ ...props.state, newPassword: value }) }}
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <TextFieldInput
          label="Repita a senha nova"
          placeholder='Digite novamente a nova senha'
          required={true}
          value={props.state.newPasswordAgain}
          typeInput="password"
          onChange={(value: string) => { props.setUser({ ...props.state, newPasswordAgain: value }) }}
        />
      </div>
    </div>
  </>)
}