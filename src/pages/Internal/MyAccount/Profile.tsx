/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import { AddressData, PersonalData } from '../../../components/input-group'
import { AlertGeneral, ComponentButtonInputFile, ComponentButtonSuccess, alertLoading } from '../../../components'
import { UserService } from '../../../services/User'
import './styles.sass'
import { validateFields } from '../../../utils'
import { useDispatch } from 'react-redux'
import { ActionsTypes } from '../../../redux/actions/reducers'
import { AiOutlineUser } from 'react-icons/ai'
export const Profile = () => {
  const [state, setState] = useState<any>({})
  const [profilePicture, setProfilePicture] = useState<string>(localStorage.getItem('picture_profile') as string)
  const [loading, setLoading] = useState(false)
  const [loadingImage, setLoadingImage] = useState<boolean>()
  const user = new UserService()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      alertLoading('open', 'Estamos buscando algumas informações...')
      const userResponse = await user.get(JSON.parse(localStorage.getItem('userLogged') as any)._id as string)
      setState(
        {
          _id: userResponse.data._id,
          address: userResponse.data.address || '',
          birthday: userResponse.data.birthday || null,
          city: userResponse.data.city || '',
          complement: userResponse.data.complement || '',
          cpf: userResponse.data.cpf || '',
          email: userResponse.data.email || '',
          gender: userResponse.data.gender || '',
          houseNumber: userResponse.data.houseNumber || '',
          name: userResponse.data.name || '',
          neighborhood: userResponse.data.neighborhood || '',
          nickname: userResponse.data.nickname || '',
          phoneNumber: userResponse.data.phoneNumber || '',
          stateOfTheCountry: userResponse.data.stateOfTheCountry || '',
          zipCode: userResponse.data.zipCode || '',
          profilePicture: userResponse.data.profilePicture || ''
        }
      )
      setProfilePicture(userResponse.data.profilePicture)

      alertLoading('close')
    }
    fetchData()
  }, [])
  const handleSave = async () => {
    setLoading(true)
    const { name, cpf, birthday, gender, phoneNumber, email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city } = state
    const translations = {
      name: 'Nome',
      cpf: 'CPF',
      birthday: 'Data de nascimento',
      gender: 'Gênero',
      phoneNumber: 'Telefone',
      email: 'Email',
      zipCode: 'CEP',
      address: 'Rua/Avenida',
      houseNumber: 'Número',
      neighborhood: 'Bairro',
      stateOfTheCountry: 'Estado',
      city: 'Cidade'
    }
    if (!validateFields({ name, cpf, birthday, gender, phoneNumber, email, zipCode, address, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
      setLoading(false)
      return false
    }
    try {
      const response = await (await user.edit(state)).data
      localStorage.setItem('userLogged', JSON.stringify({ ...response.data, sessionToken: (JSON.parse(localStorage.getItem('userLogged') as string).sessionToken as string) }))
      dispatch({ type: ActionsTypes.USER_LOGGED, payload: response.data })
      setLoading(false)
      AlertGeneral({ 'title': 'Sucesso!', message: response.message, type: 'success' })
    } catch (error: any) {
      setLoading(false)
      AlertGeneral({ title: 'Erro', message: error.response.data.message, type: 'error' })
    }
  }

  const handleImageChangeAndSave = async (file: any) => {
    setLoadingImage(true)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = async function () {
      await user.edit({ ...state, profilePicture: reader.result })
        .then((result) => {
          setProfilePicture(result.data.data.profilePicture)
          localStorage.setItem('userLogged', JSON.stringify({ ...JSON.parse(localStorage.getItem('userLogged') as string), profilePicture: reader.result }))
          dispatch({ type: ActionsTypes.USER_LOGGED, payload: { ...state, profilePicture: reader.result } })
          return result.data
        }).catch(() => {
          AlertGeneral({ title: 'Erro', message: 'A imagem é maior que 1MB', type: 'error' })
        })
      setLoadingImage(false)
    }
  }
  return (<div className="row border border-secondary rounded" id="content-container">
    <h4 id="titles-custumer-add">Perfil</h4>
    <div className="col-md-4 col-sm-12 mb-1">
      <div className="card-body p-5 text-center border rounded">
        <div className="card-title fs-5 m-1">Imagem do perfil</div>
        {loadingImage ? <div className="spinner-border" style={{ width: '20px', height: '20px', color: 'black', alignContent: 'center' }} role="status" /> :
          <div className="text-center">
            {typeof profilePicture === 'string' ? <img className="img-fluid rounded-circle m-3" src={profilePicture} style={{ width: '200px', height: '200px' }} alt='Imagem de perfil' /> :
              <AiOutlineUser size={200} color='black' style={{ margin: '0px 20px' }} />}
            <div className="caption fst-italic text-muted mb-4" style={{ fontSize: '10px' }}>Formato .jpg ou .png. Não pode ser maior que 1MB</div>
            <div className='d-flex justify-content-center m-2' >
              <div className="mb-3">
                <ComponentButtonInputFile title='Carregar nova imagem' onFileChange={handleImageChangeAndSave} id='upload-image-profile' />
              </div>
            </div>
          </div>}
      </div>
    </div>
    <div className="col-md-8 col-sm-12">
      <PersonalData setState={setState} state={state} title={'DADOS'} />
      <AddressData setUser={setState} state={state} cities={[]} />
      <div className="m-2 d-flex justify-content-end" >
        <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-profile' loading={loading} />
      </div>
    </div>
  </div>
  )
}