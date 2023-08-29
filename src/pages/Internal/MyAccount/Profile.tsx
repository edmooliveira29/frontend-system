import React, { useEffect, useState } from 'react'
import { AddressData, PersonalData } from '../../../components/input-group'
import { AlertGeneral, ComponentButtonInputFile, ComponentButtonSuccess } from '../../../components'
import { validateFields } from '../../../utils'
import { UserService } from '../../../services/User'
import './styles.sass'
export const Profile = () => {
  const [state, setState] = useState<any>({})
  const [pictureProfile, setPictureProfile] = useState(localStorage.getItem('picture_profile'))

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

  const handleImageChange = (file: any) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      localStorage.setItem('picture_profile', String(reader.result))
    }
    setPictureProfile(file)
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <h4 id="titles-custumer-add">Perfil</h4>

      <div className="col-md-4 col-sm-12 mb-1">
        <div className="card-body p-5 text-center border rounded">
          <div className="card-title fs-5 m-1">Imagem do perfil</div>
          <div className="text-center">
            <img className="img-fluid rounded-circle m-3" src={pictureProfile || "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"} style={{ width: '200px', height: '200px' }} />
            <div className="caption fst-italic text-muted mb-4" style={{ fontSize: '10px' }}>Formato .jpg ou .png. Não pode ser maior que 5MB</div>
            <div className='d-flex justify-content-center m-2' >
              <div className="mb-3">
                <ComponentButtonInputFile title='Carregar nova imagem' onFileChange={handleImageChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-12">
        <PersonalData setState={setState} state={state} title={'DADOS'} />
        <AddressData setUser={setState} state={state} cities={[]} />
        <div className="m-2 d-flex justify-content-end" >
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} />
        </div>
      </div>

    </div>
  </>)
}