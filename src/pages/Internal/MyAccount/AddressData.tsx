import React from 'react'
import { AlertGeneral, TextFieldInput } from '../../../components'
import axios from 'axios'
import { Masks } from '../../../utils/mask'

export const AddressData = (props: { state: any, setState: any }) => {
  const masks = new Masks()
  const getZipCode = async (zipCode: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json`)
      const { data } = response
      props.setState({
        ...props.state,
        zipCode: data.cep || '',
        address: data.logradouro || '',
        neighborhood: data.bairro || '',
        city: data.localidade || '',
        state: data.uf || '',
      })
    } catch (error) {
      AlertGeneral({ message: 'CEP não encontrado', type: 'error' })
    }
  }

  return (<>
    <h4 id="title-personal-data">Endereço</h4>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="CEP"
          required={true}
          value={props.state.zipCode}
          typeInput="text"
          onChange={async (value: string) => {
            props.setState({ ...props.state, zipCode: masks.maskZipCode(value) })
            if (value.length === 9) {
              await getZipCode(value)
            }
          }}
        />
      </div>
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          label="Endereço"
          required={true}
          value={props.state.address}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, address: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Número"
          required={true}
          value={props.state.houseNumber}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, houseNumber: value }) }}
        />
      </div>
    </div>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Complemento"
          required={false}
          value={props.state.complement}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, complement: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Bairro"
          required={true}
          value={props.state.neighborhood}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, neighborhood: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Estado"
          required={true}
          value={props.state.state}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, state: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Cidade"
          required={true}
          value={props.state.city}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, city: value }) }}
        />
      </div>
    </div>
  </>)
}