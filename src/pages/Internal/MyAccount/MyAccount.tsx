import React, { useEffect, useState } from 'react'
import './styles.sass'
import { PersonalData } from './PersonalData'
import { AddressData } from './AddressData'
import { AlertGeneral, ComponentButtonCommon } from '../../../components'
import { PasswordData } from './PasswordData'
import { UserService } from '../../../services/User'
import { citiesStates } from '../../../utils'
export const MyAccount = () => {
  const [state, setState] = useState({})
  const [cities, setCities] = useState([])
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
            state: userResponse.state || '',
            zipCode: userResponse.zipCode || '',
          }
        )
        setCities(await citiesStates(userResponse.state))

      } catch (error: any) {
        AlertGeneral({ message: error.message, type: 'error' })
      }
    }
    fetchData()
  }, [])

  const handleSave = async () => {
    //const userResponse = await user.put(state)
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <PersonalData setUser={setState} state={state} />
      <AddressData setUser={setState} state={state} cities={cities} />
      <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>
    </div>
    <div className="row border border-secondary rounded" id="content-container">
      <PasswordData setUser={setState} state={state} />
      <div className="m-2 d-flex justify-content-center">
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>

    </div>

  </>)
}