import React from 'react'
import { TextFieldInput } from '../../../components'
import { Masks } from '../../../utils/mask'

export const PersonalData = (props: { state: any, setState: any }) => {
  const masks = new Masks()
  return (<>
    <h4 id="title-personal-data">Dados Pessoais</h4>
    <div className="row m-0">
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          label="Nome"
          required={true}
          value={props.state.name}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, name: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="CPF"
          required={true}
          value={props.state.cpf}
          typeInput="text"
          onChange={(value: string) => {
            console.log(value.length)
            if (value.length < 19) {
              props.setState({ ...props.state, cpf: masks.maskCpfCnpj(value) })
            }
          }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Data de Nascimento"
          required={true}
          value={props.state.birthday}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, birthday: value }) }}
        />
      </div>
    </div>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Gênero"
          required={true}
          value={props.state.gender}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, gender: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          label="Telefone"
          required={true}
          value={props.state.phoneNumber}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, phoneNumber: value }) }}
        />
      </div>
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          label="Email"
          required={true}
          value={props.state.email}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, email: value }) }}
        />
      </div>
    </div>
  </>)
}