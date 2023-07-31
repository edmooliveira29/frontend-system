import React, { useEffect, useState } from 'react'
import './styles.sass'
import { PersonalData } from './PersonalData'
import { AddressData } from './AddressData'
import { AlertGeneral, ComponentButtonCommon } from '../../../components'
import { PasswordData } from './PasswordData'
import { UserService } from '../../../services/User'
export const MyAccount = () => {
  const [state, setUser] = useState({})

  const user = new UserService()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await user.get()
        // setUser(
        //   {
        //     address: userResponse.address || '',
        //     actualyPassword: userResponse.actualyPassword || '',
        //     birthday: userResponse.birthday || undefined,
        //     city: userResponse.city || '',
        //     complement: userResponse.complement || '',
        //     cpf: userResponse.cpf || '',
        //     email: userResponse.email || '',
        //     gender: userResponse.gender || '',
        //     houseNumber: userResponse.houseNumber || '',
        //     name: userResponse.name || '',
        //     neighborhood: userResponse.neighborhood || '',
        //     newPassword: userResponse.newPassword || '',
        //     newPasswordAgain: userResponse.newPasswordAgain || '',
        //     nickname: userResponse.nickname || '',
        //     phoneNumber: userResponse.phoneNumber || '',
        //     state: userResponse.state || '',
        //     zipCode: userResponse.zipCode || '',
        //   }
        // )
      } catch (error: any) {
        AlertGeneral({ message: error.message, type: 'error' })
      }
    }

    fetchData()
  },[])

  const handleSave = () => {
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <PersonalData setUser={setUser} state={state} />
      <AddressData setUser={setUser} state={state} />
      <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>
    </div>
    <div className="row border border-secondary rounded" id="content-container">
      <PasswordData setUser={setUser} state={state} />
      <div className="m-2 d-flex justify-content-center">
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>

    </div>

  </>)
}