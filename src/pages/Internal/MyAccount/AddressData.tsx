import React, { useEffect, useState } from 'react'
import { NotifyError, TextFieldInput, alertLoading } from '../../../components'
import { Masks, citiesStates, statesBrazilian } from '../../../utils'
import { SelectFieldInput } from '../../../components/inputs'
import { getZipCode } from '../../../services/zipCode'

export const AddressData: React.FC<{ state: any, setUser: any, cities: any }> = (props) => {
  const masks = new Masks()
  const [cities, setCities] = useState<any>(props.cities)
  useEffect(()=>{
    setCities(props.cities)
  },[props.cities])
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
          onChange={async (value: string) => {
            props.setUser({ ...props.state, zipCode: masks.maskZipCode(value) })
            if (value.length === 9) {
              alertLoading('open', 'Aguarde um momento, estamos buscando o CEP')
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
                  state: data.uf,
                })
              }

              const cities = await citiesStates(data.uf)
              if(cities.length > 0) {
                setCities(cities)
              }
              alertLoading('close')
            }
          }}
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
        <SelectFieldInput label='Estado' options={statesBrazilian} required={true} value={props.state.state} placeholder='Selecione o estado' />
      </div>
      <div className="col-md-3 col-sm-12">
        <SelectFieldInput label='Cidade' options={cities} required={true} value={props.state.city} placeholder='Selecione o city' />
      </div>
    </div>
  </>)
}
