/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import { AddressData, BussinesData } from '../../../components/input-group'
import { AlertGeneral, ComponentButtonInputFile, ComponentButtonSuccess, alertLoading } from '../../../components'
import './styles.sass'
import { validateFields } from '../../../utils'
import { useDispatch } from 'react-redux'
import { ActionsTypes } from '../../../redux/actions/reducers'
import { AiOutlineUser } from 'react-icons/ai'
import { CompanyService } from '../../../services/Company'
export const Profile = () => {
  const [state, setState] = useState<any>({})
  const [profilePicture, setProfilePicture] = useState<string>(JSON.parse(localStorage.getItem('company') as any).profilePicture as string)
  const [loading, setLoading] = useState(false)
  const [loadingImage, setLoadingImage] = useState<boolean>()
  const company = new CompanyService()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      alertLoading('open', 'Estamos buscando algumas informações...')
      const companyResponse = await company.get(JSON.parse(localStorage.getItem('company') as any)._id as string)
      setState(
        {
          _id: companyResponse.data._id || '',
          cnpj: companyResponse.data.cnpj || '',
          name: companyResponse.data.name || '',
          legalResponsible: companyResponse.data.legalResponsible || '',
          fantasyName: companyResponse.data.fantasyName || '',
          phoneNumber: companyResponse.data.phoneNumber || '',
          email: companyResponse.data.email || '',
          stateRegistration: companyResponse.data.stateRegistration || '',
          additionalInformation: companyResponse.data.additionalInformation || '',
          zipCode: companyResponse.data.zipCode || '',
          street: companyResponse.data.street || '',
          houseNumber: companyResponse.data.houseNumber || '',
          complement: companyResponse.data.complement || '',
          neighborhood: companyResponse.data.neighborhood || '',
          stateOfTheCountry: companyResponse.data.stateOfTheCountry || '',
          city: companyResponse.data.city || '',
        }
      )
      setProfilePicture(companyResponse.data.profilePicture)

      alertLoading('close')
    }
    fetchData()
  }, [])
  const handleSave = async () => {
    const { name, cnpj, legalResponsible, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city } = state
    const translations = {
      cnpj: 'CNPJ',
      name: 'Nome Empresarial',
      legalResponsible: 'Responsável Legal',
      phoneNumber: 'Telefone',
      email: 'Email',
      zipCode: 'CEP',
      street: 'Rua/Avenida',
      houseNumber: 'Número',
      neighborhood: 'Bairro',
      stateOfTheCountry: 'Estado',
      city: 'Cidade',
    }
    if (!validateFields({ name, cnpj, legalResponsible, phoneNumber, email, zipCode, street, houseNumber, neighborhood, stateOfTheCountry, city }, translations)) {
      setLoading(false)
      return false
    }
    try {
      const response = await (await company.edit(state)).data
      localStorage.setItem('company', JSON.stringify(response.data) as string)
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
      await company.edit({ ...state, profilePicture: reader.result })
        .then(({ data: result }: any) => {
          setProfilePicture(result.data.profilePicture)
          localStorage.setItem('company', JSON.stringify({ ...JSON.parse(localStorage.getItem('company') as string), profilePicture: reader.result }))
          dispatch({ type: ActionsTypes.COMPANY_LOGGED, payload: { ...state, profilePicture: reader.result } })
          return result.data
        }).catch(() => {
          AlertGeneral({ title: 'Erro', message: 'A imagem é maior que 1MB', type: 'error' })
        })
      setLoadingImage(false)
    }
  }
  return (<div className="row border border-secondary rounded" id="content-container">
    <h4 id="titles-custumer-add">Dados da empresa</h4>
    <div className="col-md-4 col-sm-12 mb-1">
      <div className="card-body p-5 text-center border rounded">
        <div className="card-title fs-5 m-1">Logo da empresa</div>
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
      <BussinesData setState={setState} state={state} title='DADOS EMPRESARIAL' />
      <AddressData setUser={setState} state={state} cities={[]} />
      <div className="m-2 d-flex justify-content-end" >
        <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-profile' loading={loading} />
      </div>
    </div>
  </div>
  )
}