import React from 'react'
import {  TextFieldInput } from '../inputs'
import { Masks } from '../../utils'

export const BussinesData = (props: { state: any, setState: any }) => {
  const masks = new Masks()

  return (<>
    <h4 id="titles-custumer-add">ADICIONAR PESSOA JURÍDICA</h4>
    <div className="row m-0">
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          label="Nome Empresarial"
          placeholder='Digite aqui o nome empresarial'
          required={true}
          value={props.state.name}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, name: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="CNPJ"
          placeholder='Digite aqui o CNPJ'
          required={true}
          value={props.state.cnpj}
          typeInput="text"
          onChange={(value: string) => {
            if (value.length < 19) {
              props.setState({ ...props.state, cnpj: masks.maskCpfCnpj(value) })
            }
          }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Responsável Legal"
          placeholder='Digite aqui o nome da pessoa'
          required={true}
          value={props.state.legalResponsible}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, legalResponsible: value }) }}
        />
      </div>
    </div>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Telefone"
          placeholder='Ex: (##) 99999-9999'
          required={true}
          value={props.state.phoneNumber}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, phoneNumber: masks.maskPhoneNumber(value) }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Email"
          placeholder='Digite aqui o seu email'
          required={true}
          value={props.state.email}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, email: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Inscrição Estadual"
          placeholder='Digite aqui a inscrição estadual'
          required={false}
          value={props.state.stateRegistration}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, stateRegistration: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Informações adicionais"
          placeholder='Digite aqui as informações'
          required={false}
          value={props.state.additionalInformation}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, additionalInformation: value }) }}
        />
      </div>
    </div>
  </>)
}
