/* eslint-disable max-lines */
import React, { useState } from 'react'
import { AlertConfirmationSaveEdit, AlertGeneral, ComponentButtonInherit, ComponentButtonSuccess, DataFieldInput, TextFieldInput } from '../../../components'
import { Masks, validateFields } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import './styles.sass'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsTypes } from '../../../redux/actions/reducers'
import { handleCreateEmployee, handleEditEmployee } from './handle'
import { EmployeeService } from '../../../services/Employee/index'
import { AddressData, PersonalData } from '../../../components/input-group'
export const AddEmployee: React.FC<{ state?: any }> = (props) => {
  const mask = new Masks()
  let { objectToEdit } = useSelector((reducers: any) => reducers.objectReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const hasObjectToEdit = objectToEdit !== undefined
  const [state, setState] = useState(
    hasObjectToEdit ? objectToEdit : {
      name: props.state?.name || '',
      cpf: props.state?.cpf || '',
      birthday: props.state?.birthday || '',
      gender: props.state?.gender || '',
      nickname: props.state?.nickname || '',
      phoneNumber: props.state?.phoneNumber || '',
      email: props.state?.email || '',
      office: props.state?.office || '',
      hiringDate: props.state?.hiringDate || '',
      wage: props.state?.wage || '',
      zipCode: props.state?.zipCode || '',
      city: props.state?.city || '',
      street: props.state?.street || '',
      houseNumber: props.state?.houseNumber || '',
      complement: props.state?.complement || '',
      neighborhood: props.state?.neighborhood || '',
      stateOfTheCountry: props.state?.stateOfTheCountry || '',

    })

  if (hasObjectToEdit) {
    objectToEdit = {
      ...objectToEdit,
      quantityInStock: Number(objectToEdit.quantityInStock)
    }
  }

  const handleSave = async () => {
    try {
      const { name, cpf, gender, phoneNumber, email, office, hiringDate, wage, zipCode, city, street, houseNumber, neighborhood, stateOfTheCountry } = state
      const translations = {
        name: 'Nome',
        cpf: 'CPF',
        gender: 'Gênero',
        phoneNumber: 'Telefone',
        email: 'E-mail',
        office: 'Cargo',
        hiringDate: 'Data de contratação',
        wage: 'Salario',
        zipCode: 'CEP',
        city: 'Cidade',
        stateOfTheCountry: 'Estado',
        street: 'Rua/Avenida',
        houseNumber: 'Numero',
        complement: 'Complemento',
        neighborhood: 'Bairro',
      }
      if (!validateFields({ name, cpf, gender, phoneNumber, email, office, hiringDate, wage, zipCode, city, stateOfTheCountry, street, houseNumber, neighborhood }, translations)) {
        return false
      } 

      let response
      if (hasObjectToEdit) {
        response = await AlertConfirmationSaveEdit('edit', handleEditEmployee, { setLoading, EmployeeService, state })
      } else {
        response = await AlertConfirmationSaveEdit('save', handleCreateEmployee, { setLoading, EmployeeService, state })
      }
      setLoading(false)
      if (response) {
        dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
        navigate('/colaboradores')
      }
    } catch (error: any) {
      AlertGeneral({ title: 'Erro', message: error.message, type: 'error' })
    }
  }
  return (<>
    <div className="row" id="content-container">
      <h4 id="titles-employee-add">ADICIONAR COLABORADOR</h4>
      <PersonalData setState={setState} state={state} />
      <div className='row m-0'>
        <div className="col-sm-12 col-md-3">
          <TextFieldInput
            id={'office'}
            label="Cargo"
            placeholder='Digite aqui o cargo'
            required={true}
            value={state.office}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, office: value }) }}
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <TextFieldInput
            id='department'
            label="Departamento"
            placeholder='Digite aqui o departamento'
            required={false}
            value={state.department}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, department: value }) }}
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <DataFieldInput
            id={'hiringDate'}
            label='Data de contratação'
            required={true}
            value={state.hiringDate}
            onChange={(value: string) => { setState({ ...state, hiringDate: value }) }}
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <TextFieldInput
            id={'wage'}
            label="Salário"
            placeholder='Digite aqui o salário'
            required={true}
            value={state.wage}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, wage: mask.maskMoney(value) }) }}
          />
        </div>
      </div>
      <AddressData setUser={setState} state={state} cities={[]} />
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => {
            dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
            navigate(-1)
          }} id='back-employee' />
          <ComponentButtonSuccess text={hasObjectToEdit ? 'Editar' : 'Salvar'} sizeWidth='200px' onClick={handleSave} id='save-edit-employee' loading={loading} />
        </div>
      </div>
    </div >
  </>)
}
