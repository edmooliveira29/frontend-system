import React, { useEffect, useState } from 'react'
import { AlertGeneral, ComponentButtonInherit, ComponentButtonSuccess } from '../../../components'
import { validateFields } from '../../../utils'
import { PasswordData } from './PasswordData'
import { useNavigate } from 'react-router-dom'
import './styles.sass'
export const Password = () => {
  const [state, setState] = useState<any>({})
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {

        setState(
          {
            _id:state._id,
            newPassword: state.newPassword || '',
            newPasswordAgain: state.newPasswordAgain || '',

          }
        )


      } catch (error: any) {
        AlertGeneral({ message: error.message, type: 'error' })
      }
    }
    fetchData()
  }, [])

  const handleSave = async () => {
    const { password, newPassword, newPasswordAgain } = state
    const translations = {
      password: 'Senha antiga',
      newPassword: 'Senha Nova',
      newPasswordAgain: 'Repita a nova senha'

    }
    if (!validateFields({ password, newPassword, newPasswordAgain }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <PasswordData setUser={setState} state={state} />
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => navigate(-1)} id='back-password' />
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-password'/>
        </div>
      </div>
    </div>
  </>)
}