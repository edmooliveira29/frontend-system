import React, { useEffect, useState } from 'react'
import './styles.sass'

import { AlertGeneral, ComponentButtonCommon, ComponentButtonInherit, ComponentButtonSuccess } from '../../../components'
import { PasswordData } from './PasswordData'
import { UserService } from '../../../services/User'
import { AddressData, PersonalData } from '../../../components/input-group'
import { validateFields } from '../../../utils'
import { useNavigate } from 'react-router-dom'
export const MyAccount = () => {
  const [state, setState] = useState<any>({})
  const navigate = useNavigate()
  const user = new UserService()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await user.get()
        setState(
          {
            id: userResponse.id,
            address: userResponse.address || '',
            actualyPassword: userResponse.actualyPassword || '',
            birthday: userResponse.birthday || null,
            city: userResponse.city || '',
            complement: userResponse.complement || '',
            cpf: userResponse.cpf || '',
            email: userResponse.email || '',
            gender: userResponse.gender || '',
            houseNumber: userResponse.houseNumber || '',
            name: userResponse.name || '',
            neighborhood: userResponse.neighborhood || '',
            newPassword: userResponse.newPassword || '',
            newPasswordAgain: userResponse.newPasswordAgain || '',
            nickname: userResponse.nickname || '',
            phoneNumber: userResponse.phoneNumber || '',
            stateOfTheCountry: userResponse.stateOfTheCountry || '',
            zipCode: userResponse.zipCode || '',
          }
        )


      } catch (error: any) {
        AlertGeneral({ message: error.message, type: 'error' })
      }
    }
    fetchData()
  }, [])

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
      address: 'Rua/Avenida',
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
      <PersonalData setState={setState} state={state}/>
      <AddressData setUser={setState} state={state} cities={[]} />
      <div className="m-2 d-flex justify-content-end" >
        <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} />
      </div>
    </div>
    <div className="row border border-secondary rounded" id="content-container">
      <PasswordData setUser={setState} state={state} />
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => navigate(-1)} />
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} />
        </div>
      </div>

    </div>
  </>)
}