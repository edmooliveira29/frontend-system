import React from 'react'
import { TextFieldInput } from '../../../components'

export const PasswordData = (props: { state: any, setUser: any }) => {
  const { state, setUser } = props
  return (<>
    <h4 id="title-personal-data">SENHA DO SISTEMA</h4>
    <div className="row">
      <span>O usuário logado no momento é <strong className="text-primary">{`"${state.username}"`}</strong> {state.createWithGoogle ?'foi criado com o Google. Portanto não é permitido alterar a senha':'.'}</span>
      <div className="col-md-4 col-sm-12">
        {state.lastChangedPassword !== null || !state.createWithGoogle ? <TextFieldInput
          id={'password'}
          label="Senha atual"
          placeholder='Digite aqui o atual senha'
          required={true}
          disabled={state.createWithGoogle}
          value={state.password}
          typeInput="password"
          onChange={(value: string) => { setUser({ ...state, password: value }) }}
        /> : null}
      </div>
      <div className="col-md-4 col-sm-12">
        <TextFieldInput
          id={'newPassword'}
          label="Senha Nova"
          placeholder='Digite aqui a nova senha'
          required={true}
          disabled={state.createWithGoogle}
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
          disabled={state.createWithGoogle}
          value={state.newPasswordConfirmation}
          typeInput="password"
          onChange={(value: string) => { setUser({ ...state, newPasswordConfirmation: value }) }}
        />
      </div>
      {state.lastChangedPassword &&
        <div>
          <span style={{ fontSize: '12px', color: 'gray' }}><span style={{ fontWeight: 'bold' }}>Última alteração da senha:</span> {new Date(state.lastChangedPassword).toLocaleDateString('pt-BR')} </span>
        </div>}
    </div>
  </>)
}