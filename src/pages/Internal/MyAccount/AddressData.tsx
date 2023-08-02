import React, { useState } from 'react'
import { NotifyError, TextFieldInput } from '../../../components'
import { Masks, statesBrazilian } from '../../../utils'
import SelectFieldInput from '../../../components/inputs/SelectFieldInput'
import { getZipCode } from '../../../services/zipCode'

export const AddressData = (props: { state: any, setUser: any }) => {
  const masks = new Masks()
  const [selectedState, setSelectedState] = useState(props.state.state || undefined)
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
              const data: any = await getZipCode(value)
              if (data.erro) {
                NotifyError()
              } else {

                setSelectedState((data.uf).toLowerCase())
                props.setUser({
                  ...props.state,
                  zipCode: data.cep,
                  address: data.logradouro,
                  neighborhood: data.bairro,
                  city: data.localidade,
                  state: data.uf,
                })
              }

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
        <SelectFieldInput label='Estado' options={statesBrazilian} required={true} value={selectedState || props.state.state} placeholder='Selecione o estado' />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Cidade"
          placeholder='Digite aqui a cidade'
          required={true}
          value={props.state.city}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, city: value }) }}
        />
      </div>
    </div>
  </>)
}
