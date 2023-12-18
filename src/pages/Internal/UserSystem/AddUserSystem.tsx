import React, { useState } from 'react'
import { ComponentButtonInherit, ComponentButtonSuccess, SelectFieldInput, TextFieldInput } from '../../../components'
import { validateFields } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import './styles.sass'
import { handleCreateUser, handleEditUser } from './handle'
import { UserService } from '../../../services/User'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsTypes } from '../../../redux/actions/reducers'

export const AddUserSystem = () => {
  const { objectToEdit } = useSelector((reducers: any) => reducers.objectReducer)
  const hasObjectToEdit = objectToEdit !== undefined
  const [state, setState] = useState(
    hasObjectToEdit ? { ...objectToEdit } : {}
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSaveEdit = async () => {
    const { role, name, email, password } = state
    const translations = { role: 'Permissões', name: 'Nome', email: 'Email', password: 'Senha' }
    let fieldsToValidate
    hasObjectToEdit ? fieldsToValidate = { role, name, email } : fieldsToValidate = { role, name, email, password }
    if (!validateFields(fieldsToValidate, translations)) {
      return false
    }
    if (hasObjectToEdit) {
      handleEditUser(setLoading, UserService, state)
    } else {
      handleCreateUser(setLoading, UserService, state)
    }
    dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
    navigate('/usuario')
  }
  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <h4 id="titles-category-add">{hasObjectToEdit ? 'EDITAR USUÁRIO' : 'ADICIONAR USUÁRIO'}</h4>
      <div className="row m-0">
        <div className="col-md-2 col-sm-12">
          <SelectFieldInput id={'role-user'} value={state.role || ''} placeholder='Selecione um tipo' label='Tipo'
            options={[{ value: 'salesman', label: 'Vendedor' }, { value: 'owner', label: 'Proprietário' }]}
            required={true} onChange={(event: any) => setState({ ...state, role: event.target.value })} />
        </div>
        <div className="col-md-4 col-sm-12">
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
        <div className="col-md-3 col-sm-12">
          <TextFieldInput
            id={'email'}
            label="Email"
            placeholder='Digite aqui um email'
            required={true}
            value={state.email}
            typeInput="text"
            disabled={hasObjectToEdit}
            onChange={(value: string) => { setState({ ...state, email: value }) }}
          />
        </div>
        {!hasObjectToEdit && <div className="col-md-3 col-sm-12">
          <TextFieldInput
            id={'password'}
            label="Senha"
            placeholder='Digite aqui uma senha'
            required={true}
            value={state.password}
            typeInput="password"
            onChange={(value: string) => { setState({ ...state, password: value }) }}
          />
        </div>}
      </div>
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => {
            dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
            navigate(-1)
          }} id='back-user' />
          <ComponentButtonSuccess text={hasObjectToEdit ? 'Editar' : 'Salvar'} sizeWidth='200px' onClick={handleSaveEdit} id='save-user' loading={loading} />
        </div>
      </div>
    </div>

  </>)
}
