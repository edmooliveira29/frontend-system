import React, { useState } from 'react'
import { ComponentButtonInherit, ComponentButtonSuccess, SelectFieldInput, TextFieldInput } from '../../../components'
import { validateFields } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import './styles.sass'

export const AddUserSystem = () => {
  const [state, setState] = useState({
    role: '',
    name: '',
    email: '',
    password: '',
    username: ''
  })
  const navigate = useNavigate()
  const handleSave = async () => {
    const { role, name, email, username } = state
    const translations = { role: 'Permissões', name: 'Nome', email: 'Email', username: 'Usuário' }

    if (!validateFields({ role, name, email, username }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <h4 id="titles-category-add">ADICIONAR USUÁRIO</h4>
      <div className="row m-0">
        <div className="col-md-2 col-sm-12">
          <SelectFieldInput id={'role-user'} value={state.role || ''} placeholder='Selecione um tipo' label='Tipo' options={[{ value: 'salesman', label: 'Vendedor' }, { value: 'property', label: 'Proprietário' }]} required={true} onChange={(event: any) => setState({ ...state, role: event.target.value })} />
        </div>
        <div className="col-md-3 col-sm-12">
          <TextFieldInput
            id={'name'}
            label="Nome"
            placeholder='Digite aqui um nome'
            required={true}
            value={state.name}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, name: value }) }}
          />
        </div>
        <div className="col-md-2 col-sm-12">
          <TextFieldInput
            id={'username'}
            label="Usuário"
            placeholder='Digite aqui um usuário'
            required={true}
            value={state.username}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, username: value }) }}
          />
        </div>
        <div className="col-md-2 col-sm-12">
          <TextFieldInput
            id={'email'}
            label="Email"
            placeholder='Digite aqui um email'
            required={true}
            value={state.email}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, email: value }) }}
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <TextFieldInput
            id={'password'}
            label="Senha"
            placeholder='Digite aqui uma senha'
            required={false}
            value={state.password}
            typeInput="password"
            onChange={(value: string) => { setState({ ...state, password: value }) }}
          />
        </div>
      </div>
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => navigate(-1)} id='back-user' />
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-user' />
        </div>
      </div>
    </div>

  </>)
}