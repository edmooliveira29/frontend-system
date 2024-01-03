import React, { useEffect, useState } from 'react'
import { AlertGeneral, ComponentButtonInherit, ComponentButtonSuccess } from '../../../components'
import { validateFields } from '../../../utils'
import { PasswordData } from './PasswordData'
import { useNavigate } from 'react-router-dom'
import './styles.sass'
import { UserService } from '../../../services/User'
export const Password = () => {
  const [state, setState] = useState<any>({})
  const navigate = useNavigate()
  const user = new UserService()
  useEffect(() => {
    const fetchData = async () => {
      const userLogged = await user.get(JSON.parse(localStorage.getItem('userLogged') as any)._id as string)

      try {
        setState(
          {
            name: userLogged.data.name,
            username: userLogged.data.username,
            createWithGoogle: userLogged.data.createWithGoogle,
            email: userLogged.data.email,
            _id: userLogged.data._id,
            lastChangedPassword: userLogged.data.lastChangedPassword
          })
      } catch (error: any) {
        AlertGeneral({ title: 'Erro', message: error.message, type: 'error' })
      }
    }
    fetchData()
  }, [])

  const handleSave = async () => {
    const { password, newPassword, newPasswordConfirmation } = state

    const translations = {
      password: 'Senha atual',
      newPassword: 'Senha Nova',
      newPasswordConfirmation: 'Repita a nova senha',

    }
    if (state.newPassword !== state.newPasswordConfirmation) {
      AlertGeneral({ title: 'Erro', message: 'As novas senhas digitadas não são iguais!', type: 'error' })
      return false
    } else if (!validateFields({ password, newPassword, newPasswordConfirmation }, translations)) {
      return false
    }
    try {
      const response = await user.edit(state)
      AlertGeneral({ title: 'Sucesso!', message: response.data.message, type: 'success' })

    } catch (error: any) {
      AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
    }
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <PasswordData setUser={setState} state={state} />
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => navigate(-1)} id='back-password' />
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-password' />
        </div>
      </div>
    </div>
  </>)
}