import React, { useEffect, useState } from 'react'
import { TextFieldInput, SelectFieldInput } from '../../components'
import { citiesStates, statesBrazilian } from '../../utils'
import { onChangeZipCode } from './hooks'

export const AddressData: React.FC<{ state: any, setUser: any, cities: any }> = (props) => {
  const [cities, setCities] = useState<any[]>(props.cities)
  const [stateSelected, setStateSelected] = useState<any>()
  const [citySelected, setCitySelected] = useState(props.state.city)
  const [flagGetCities, setFlagGetCities] = useState(true)
  const getCities = async (ufState: string) => {
    if (ufState && flagGetCities) {
      const auxCities = props.cities ? await citiesStates(ufState) : cities
      setCities(auxCities)
      setCitySelected(auxCities.some((option: { value: string }) => option.value === props.state.city) ? props.state.city : '')
    }
  }
  useEffect(() => { getCities(stateSelected || props.state.stateOfTheCountry) }, [stateSelected, props.state.stateOfTheCountry])

  return (<>
    <h4 id="title-personal-data">ENDEREÇO</h4>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          id={'zipCode'}
          label="CEP"
          placeholder='Digite aqui o seu cep'
          required={true}
          value={props.state.zipCode}
          typeInput="text"
          onChange={async (event: any) => {
            setFlagGetCities(false)
            await onChangeZipCode(event, props, setCitySelected, setStateSelected, setCities)
          }}
        />
      </div>
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          id={'address'}
          label="Rua/Avenida"
          placeholder='Digite aqui sua rua/avenida'
          required={true}
          value={props.state.address}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, address: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          id={'houseNumber'}
          label="Número"
          placeholder='Digite aqui o n° da residência ou estabelecimento'
          required={true}
          value={props.state.houseNumber}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, houseNumber: value }) }}
        />
      </div>
    </div>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12" style={{}}>
        <TextFieldInput
          id={'complement'}
          label="Complemento"
          placeholder='Digite aqui o complemento'
          required={false}
          value={props.state.complement}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, complement: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          id={'neighborhood'}
          label="Bairro"
          placeholder='Digite aqui o bairro'
          required={true}
          value={props.state.neighborhood}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, neighborhood: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <SelectFieldInput label='Estado'
          options={statesBrazilian}
          required={true}
          value={stateSelected || props.state.stateOfTheCountry || ''}
          placeholder='Selecione o estado' onChange={(event: any) => { setFlagGetCities(true); setStateSelected(event.target.value); props.setUser({ ...props.state, stateOfTheCountry: event.target.value }) }} />
      </div>
      <div className="col-md-3 col-sm-12">
        <SelectFieldInput label='Cidade' options={cities}
          required={true}
          value={citySelected || ''}
          placeholder='Selecione a cidade'
          onChange={(event: any) => { setCitySelected(event.target.value); props.setUser({ ...props.state, city: event.target.value }) }} />
      </div>
    </div>
  </>)
}
