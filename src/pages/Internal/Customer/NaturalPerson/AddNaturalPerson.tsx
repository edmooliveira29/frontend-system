import React, { useState } from 'react'
import { AddressData, PersonalData } from '../../../../components/input-group'
import { ComponentButtonCommon } from '../../../../components'
import { validateFields } from '../../../../utils'


export const AddNaturalPerson = () => {
  const [state, setState] = useState<any>({})

  const handleSave = async () => {
    const { name, cpf, birthday, gender, nickname, phoneNumber, email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city } = state
    const translations = {
      name: 'Nome',
      cpf: 'CPF',
      birthday: 'Data de nascimento',
      gender: 'Gênero',
      nickname: 'Chama-me',
      phoneNumber: 'Telefone',
      email: 'Email',
      zipCode: 'CEP',
      address: 'Endereço',
      houseNumber: 'Número',
      neighborhood: 'Bairro',
      stateOfTheCountry: 'Estado',
      city: 'Cidade'
    }
    if (!validateFields({ name, cpf, birthday, gender, nickname, phoneNumber, email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <PersonalData setState={setState} state={state} title='ADICIONAR PESSOA FÍSICA' />
      <hr />
      <AddressData setUser={setState} state={state} cities={[]} />
      <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>
    </div>
  </>
  )
}
