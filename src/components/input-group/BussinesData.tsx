/* eslint-disable max-lines */
import React from 'react'
import { TextFieldInput } from '../inputs'
import { Masks, apiCnpj } from '../../utils'

export const BussinesData = (props: { state: any, setState: any, disabled?: boolean }) => {
  const masks = new Masks()

  return (<>
    <h4 id="titles-custumer-add">ADICIONAR PESSOA JURÍDICA</h4>
    <div className="row m-0">
      <div className="col-md-2 col-sm-12">
        <TextFieldInput
          label="CNPJ"
          placeholder='Digite aqui o CNPJ'
          required={true}
          value={props.state.cnpj}
          typeInput="text"
          onChange={async (value: string) => {
            if (value.length === 18) {
              const response = await apiCnpj(value)
              const { data } = response || {}
              props.setState({
                ...props.state,
                phoneNumber: masks.maskPhoneNumber(data?.ddd_telefone_1 || data?.ddd_fax || ''),
                legalResponsible: data?.qsa.length > 0 ? data?.qsa[0].nome_socio : '',
                name: data?.razao_social,
                nomeFantasia: data?.nome_fantasia,
                email: data?.email,
                zipCode: masks.maskZipCode(data?.cep || ''),
                address: data?.logradouro,
                houseNumber: data?.numero,
                complement: data?.complemento,
                neighborhood: data?.bairro,
                stateOfTheCountry: data?.uf,
                city: masks.maskCapitalizeFirstLetter(data?.municipio || ''),
                cnpj: masks.maskCpfCnpj(value || ''),
                fantasyName: data?.nome_fantasia
              })
            } else if (value.length < 19) {
              props.setState({ ...props.state, cnpj: masks.maskCpfCnpj(value) })
            }
          }}
          disabled={props.disabled}
        />
      </div>
      <div className="col-md-4 col-sm-12">
        <TextFieldInput
          label="Nome Empresarial"
          placeholder='Digite aqui o nome empresarial'
          required={true}
          value={props.state.name}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, name: value }) }}
          disabled={props.disabled}
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
          disabled={props.disabled}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Nome Fantasia"
          placeholder='Digite aqui o nome fantasia'
          required={false}
          value={props.state.fantasyName}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, fantasyName: value }) }}
          disabled={props.disabled}
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
          disabled={props.disabled}
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
          disabled={props.disabled}
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
          disabled={props.disabled}
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
          disabled={props.disabled}
        />
      </div>
    </div>
  </>)
}
