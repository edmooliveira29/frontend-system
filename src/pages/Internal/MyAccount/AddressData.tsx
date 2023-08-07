import React, { useEffect, useState } from 'react'
import { TextFieldInput, SelectFieldInput } from '../../../components'
import { citiesStates, statesBrazilian } from '../../../utils'
import { onChangeZipCode } from './hooks'

export const AddressData: React.FC<{ state: any, setUser: any, cities: any }> = (props) => {
  const [cities, setCities] = useState<any>(props.cities)
  const [stateSelected, setStateSelected] = useState<any>()
  const [citySelected, setCitySelected] = useState(props.state.city)
  useEffect(() => {
    const getCities = async () => {
      if (stateSelected) {
        setCities(await citiesStates(stateSelected))
      } else {
        setCitySelected(props.state.city)
        setCities(props.cities)
      }
    }
    getCities()
  }, [props.cities, stateSelected])
  return (<>
    <h4 id="title-personal-data">Endereço</h4>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="CEP"
          placeholder='Digite aqui o seu cep'
          required={true}
          value={props.state.zipCode}
          typeInput="text"
          onChange={async (event: any) => await onChangeZipCode(event, props, setCitySelected, setStateSelected, setCities)}
        />
      </div>
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          label="Endereço"
          placeholder='Digite aqui o seu endereço'
          required={true}
          value={props.state.address}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, address: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Número"
          placeholder='Digite aqui o n° da residencia ou estabelecimento'
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
          value={stateSelected || props.state.state}
          placeholder='Selecione o estado' onChange={(event: any) => {
            setCitySelected('')
            setStateSelected(event.target.value)
          }} />
      </div>
      <div className="col-md-3 col-sm-12">
        <SelectFieldInput label='Cidade' options={cities}
          required={true} value={citySelected}
          placeholder='Selecione a cidade'
          onChange={(event: any) => {
            setCitySelected(event.target.value)
          }} />
      </div>
    </div>
  </>)
}
