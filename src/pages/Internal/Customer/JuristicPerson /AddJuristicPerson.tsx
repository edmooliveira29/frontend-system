import React, { useState } from 'react'
import { AddressData, BussinesData, PersonalData } from '../../../../components/input-group'
import { ComponentButtonCommon } from '../../../../components'
import { validateFields } from '../../../../utils'


export const AddJuristicPerson = () => {
  const [state, setState] = useState<any>({})
  const handleSave = async () => {
    const { name, cnpj, legalResponsible, phoneNumber,email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city } = state
    const translations = {
      name: 'Nome Empresarial',
      cnpj: 'CNPJ',
      legalResponsible: 'Responsável Legal',
      phoneNumber: 'Telefone',
      email: 'Email',
      zipCode: 'CEP',
      address: 'Endereço',
      houseNumber: 'Número',
      neighborhood: 'Bairro',
      stateOfTheCountry: 'Estado',
      city: 'Cidade',
    }
    if (!validateFields({ name, cnpj, legalResponsible, phoneNumber,email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <BussinesData setState={setState} state={state} />
      <hr />
      <AddressData setUser={setState} state={state} cities={[]} />
      <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>
    </div>
  </>
  )
}
