import React from 'react'
import { TextFieldInput } from '../../../components'

export const PasswordData = (props: { state: any, setState: any }) => {

  return (<>
    <h4 id="title-personal-data">Senha</h4>
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          label="Senha antiga"
          required={true}
          value={props.state.name}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, name: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Senha Nova"
          required={true}
          value={props.state.newPassword}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, newPassword: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Repita a senha nova"
          required={true}
          value={props.state.newPasswordAgain}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, newPasswordAgain: value }) }}
        />
      </div>
    </div>
  </>)
}