/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import { AddressData, BussinesData, PersonalData } from '../../../components/input-group'
import { AlertConfirmationSaveEdit, AlertGeneral, ComponentButtonInherit, ComponentButtonSuccess, SelectFieldInput } from '../../../components'
import './styles.sass'
import { useNavigate } from 'react-router-dom'
import { CustomerService } from '../../../services/Customer'
import { validateFields } from '../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsTypes } from '../../../redux/actions/reducers'
import { handleCreateCustomer, handleEditCustomer } from './handle'

export const AddCustomer: React.FC<{ state?: any, addedOutSideMainScreen: boolean, setOpenModal: any, setCustomers?: any, data?: any, setCustomersDB?: any }> = (props) => {
  const [loading, setLoading] = useState(false)
  const { objectToEdit } = useSelector((reducers: any) => reducers.objectReducer)

  const dispatch = useDispatch()
  const hasObjectToEdit = objectToEdit !== undefined
  const [state, setState] = useState<any>(
    hasObjectToEdit ? objectToEdit : {
      typeCustomer: props.state?.typeCustomer || '',
      name: props.state?.name || '',
      cpf: props.state?.cpf || '',
      cnpj: props.state?.cnpj || '',
      legalResponsible: props.state?.legalResponsible || '',
      gender: props.state?.gender || '',
      phoneNumber: props.state?.phoneNumber || '',
      email: props.state?.email || '',
      additionalInformation: props.state?.additionalInformation || '',
      zipCode: props.state?.zipCode || '',
      street: props.state?.street || '',
      houseNumber: props.state?.houseNumber || '',
      complement: props.state?.complement || '',
      neighborhood: props.state?.neighborhood || '',
      stateOfTheCountry: props.state?.stateOfTheCountry || '',
      city: props.state?.city || '',
      fantasyName: props.state?.fantasyName || '',
      stateRegistration: props.state?.stateRegistration || ''
    })
  const [typeCustomerModal, setTypeCustomerModal] = React.useState<string>(hasObjectToEdit ? objectToEdit.typeCustomer : 'natural')
  const [key, setKey] = useState<number>(0)
  const navigate = useNavigate()
  useEffect(() => {
    setState({
      ...state,
      typeCustomer: typeCustomerModal
    })
    setKey((prevKey) => prevKey + 1)
  }, [typeCustomerModal])
  
  const handleSave = async (state: any) => {
    try {
      if (state.typeCustomer == 'natural') {
        const { name, cpf, gender, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city } = state
        const translations = {
          name: 'Nome',
          cpf: 'CPF',
          gender: 'Gênero',
          phoneNumber: 'Telefone',
          email: 'Email',
          zipCode: 'CEP',
          street: 'Rua/Avenida',
          houseNumber: 'Número',
          neighborhood: 'Bairro',
          stateOfTheCountry: 'Estado',
          city: 'Cidade'
        }

        if (!validateFields({ name, cpf, gender, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
          return false
        }
      } else if (state.typeCustomer == 'juristic') {
        const { name, cnpj, legalResponsible, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city } = state
        const translations = {
          name: 'Nome Empresarial',
          cnpj: 'CNPJ',
          legalResponsible: 'Responsável Legal',
          phoneNumber: 'Telefone',
          email: 'Email',
          zipCode: 'CEP',
          street: 'Rua/Avenida',
          houseNumber: 'Número',
          neighborhood: 'Bairro',
          stateOfTheCountry: 'Estado',
          city: 'Cidade',
        }
        if (!validateFields({ name, cnpj, legalResponsible, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
          return false
        }
      }
      let response
      if (hasObjectToEdit) {
        response = await AlertConfirmationSaveEdit('edit', handleEditCustomer, { setLoading, CustomerService, state })
      } else {
        response = await AlertConfirmationSaveEdit('save', handleCreateCustomer, { setLoading, CustomerService, state })
      }
      setLoading(false)
      if (response) {
        dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
        if (!props.addedOutSideMainScreen) {
          navigate('/clientes')
        } else {
          const customersResponse = await new CustomerService().getAll(JSON.parse(localStorage.getItem('company') as any)._id)
          props.setCustomersDB(customersResponse)
          props.setCustomers(customersResponse.data.map((category: any) => ({ value: category.name, label: category.name })))
          props.setOpenModal(false)
        }
      }
    } catch (error: any) {
      AlertGeneral({ title: 'Erro', message: error.message ? error.message : error, type: 'error' })
    }
  }
  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <h4 id="titles-custumer-add">ADICIONAR CLIENTE</h4>
      <div className='row mb-2 m-0'>
        <div className="col-md-3 col-sm-12">
          <SelectFieldInput
            id={'typeCustomer'}
            required={true}
            label='Tipo de Cliente'
            value={hasObjectToEdit ? objectToEdit.typeCustomer : state.typeCustomer}
            options={[{ value: 'juristic', label: 'Jurídico' }, { value: 'natural', label: 'Físico' }]}
            placeholder='Selecione o tipo'
            onChange={(event: any) => {
              setState({ ...state, typeCustomer: event.target.value })
              setTypeCustomerModal(event.target.value)
            }}
          />
        </div>
      </div>
      <br />
      {typeCustomerModal === 'natural' && <PersonalData setState={setState} state={state} title='ADICIONAR PESSOA FÍSICA' />}
      {(typeCustomerModal === 'juristic') && <BussinesData setState={setState} state={state} />}
      <hr />
      {(typeCustomerModal) && < AddressData setUser={setState} state={state} cities={[]} key={key} />}
      {typeCustomerModal &&
        <div className="row p-3">
          <div className="d-flex justify-content-between" >
            {!props.addedOutSideMainScreen && <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => {
              dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
              navigate(-1)
            }} id='back-customer' />}
            <ComponentButtonSuccess loading={loading} text={objectToEdit ? 'Editar' : 'Salvar'} sizeWidth='200px' onClick={() => handleSave(state)} id='save-customer' />
          </div>
        </div>}
    </div>
  </>
  )
}
