import React from 'react'
import './styles.sass'
import { PersonalData } from './PersonalData'
import { AddressData } from './AddressData'
import { ComponentButtonCommon } from '../../../components'
import { PasswordData } from './PasswordData'
export const MyAccount = () => {

  const [state, setState] = React.useState({
    birthday: '',
    name: '',
    cpf: '',
    gender: '',
    phoneNumber: '',
    email: '',
    zipCode: '',
    address: '',
    houseNumber: '',
    complement: '',
    neighborhood: '',
    state: '',
    city: '',
    actualyPassword: '',
    newPassword: '',
    newPasswordAgain: ''
  })

  const handleSave = () => {
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <PersonalData setState={setState} state={state} />
      <AddressData setState={setState} state={state} />
      <div className="m-2 d-flex justify-content-center">
        <ComponentButtonCommon text='Salvar' sizewidth='280px' />
      </div>

    </div>
    <div className="row border border-secondary rounded" id="content-container">
      <PasswordData setState={setState} state={state} />
      <div className="m-2 d-flex justify-content-center" onClick={handleSave}>
        <ComponentButtonCommon text='Salvar' sizewidth='280px' />
      </div>

    </div>

  </>)
}