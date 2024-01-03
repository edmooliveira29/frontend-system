import React from 'react'
import { TextFieldInput } from '../../../components'

export const PasswordData = (props: { state: any, setUser: any }) => {
  const { state, setUser } = props
  return (<>
    <h4 id="title-personal-data">SENHA DO SISTEMA</h4>
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <TextFieldInput
          id={'password'}
          label="Senha atual"
          placeholder='Digite aqui o atual senha'
          required={true}
          value={state.password}
          typeInput="password"
          onChange={(value: string) => { setUser({ ...state, password: value }) }}
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <TextFieldInput
          id={'newPassword'}
          label="Senha Nova"
          placeholder='Digite aqui a nova senha'
          required={true}
          value={state.newPassword}
          typeInput="password"
          onChange={(value: string) => { setUser({ ...state, newPassword: value }) }}
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <TextFieldInput
          id={'newPasswordConfirmation'}
          label="Repita a senha nova"
          placeholder='Digite novamente a nova senha'
          required={true}
          value={state.newPasswordConfirmation}
          typeInput="password"
          onChange={(value: string) => { setUser({ ...state, newPasswordConfirmation: value }) }}
        />
      </div>
      {state.lastChangedPassword &&
        <div>
          <span style={{ fontSize: '12px', color: 'gray' }}><span style={{fontWeight: 'bold'}}>Última alteração da senha:</span> {(state.lastChangedPassword)} </span>
        </div>}
    </div>
  </>)
}