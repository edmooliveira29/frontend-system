import React from 'react'
import { TextFieldInput } from '../../../components'

export const AddressData = (props: { state: any, setState: any }) => {

  return (<>
    <h4 id="title-personal-data">Endereço</h4>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="CEP"
          required={true}
          value={props.state.zipCode}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, zipCode: value }) }}
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
          required={true}
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