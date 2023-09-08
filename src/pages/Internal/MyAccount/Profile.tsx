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

        const userResponse = await user.get(localStorage.getItem('idUser') as string)
        setState(
          {
            _id:userResponse.data._id,
            address: userResponse.data.address || '',
            actualyPassword: userResponse.data.actualyPassword || '',
            birthday: userResponse.data.birthday || null,
            city: userResponse.data.city || '',
            complement: userResponse.data.complement || '',
            cpf: userResponse.data.cpf || '',
            email: userResponse.data.email || '',
            gender: userResponse.data.gender || '',
            houseNumber: userResponse.data.houseNumber || '',
            name: userResponse.data.name || '',
            neighborhood: userResponse.data.neighborhood || '',
            newPassword: userResponse.data.newPassword || '',
            newPasswordAgain: userResponse.data.newPasswordAgain || '',
            nickname: userResponse.data.nickname || '',
            phoneNumber: userResponse.data.phoneNumber || '',
            stateOfTheCountry: userResponse.data.stateOfTheCountry || '',
            zipCode: userResponse.data.zipCode || '',
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
            <img className="img-fluid rounded-circle m-3" src={pictureProfile || "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"} style={{ width: '200px', height: '200px' }} alt='Imagem de perfil' />
            <div className="caption fst-italic text-muted mb-4" style={{ fontSize: '10px' }}>Formato .jpg ou .png. Não pode ser maior que 5MB</div>
            <div className='d-flex justify-content-center m-2' >
              <div className="mb-3">
                <ComponentButtonInputFile title='Carregar nova imagem' onFileChange={handleImageChange} id='upload-image-profile' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-sm-12">
        <PersonalData setState={setState} state={state} title={'DADOS'} />
        <AddressData setUser={setState} state={state} cities={[]} />
        <div className="m-2 d-flex justify-content-end" >
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-profile' />
        </div>
      </div>

    </div>
  </>)
}