import { getZipCode } from '../../../services/zipCode'
import { NotifyError, alertLoading } from '../../../components'
import { Masks, citiesStates } from '../../../utils'

export const onChangeZipCode = async (value: string, props: any, setCitySelected: any, setStateSelected: any, setCities: any) => {
  const masks = new Masks()
  if (value.length < 10) {
    props.setUser({ ...props.state, zipCode: masks.maskZipCode(value) })
  }

  if (value.length === 9) {
    alertLoading('open', 'estamos buscando o CEP')
    const data: any = await getZipCode(value)
    if (data.erro) {
      NotifyError()
    } else {
      props.setUser({
        ...props.state,
        zipCode: data.cep,
        address: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        stateOfTheCountry: data.uf,
      })
    }

    const cities = await citiesStates(data.uf)
    if (cities.length > 0) {
      setCitySelected(data.localidade)
      setCities(cities)
    } else {
      setCitySelected('')
      setStateSelected('')
    }
    alertLoading('close')
  }
}
