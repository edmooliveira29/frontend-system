import React from 'react'
import { DataFieldInput, SelectFieldInput, TextFieldInput } from '../../components/inputs'
import { Masks } from '../../utils'

export const PersonalData = (props: { state: any, setState: any, title?: string }) => {
  const masks = new Masks()

  return (<>
    {props.title && <h4 id="titles-custumer-add">{props.title ? props.title : 'ADICIONAR PESSOA FÍSICA'}</h4>}
    <div className="row m-0">
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          id={'name'}
          label="Nome"
          placeholder='Digite aqui o nome completo'
          required={true}
          value={props.state.name}
          typeInput="text"
          onChange={(value: string) => { props.setState({ ...props.state, name: value }) }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          id={'cpf'}
          label="CPF"
          placeholder='Digite aqui o CPF'
          required={true}
          value={props.state.cpf}
          typeInput="text"
          onChange={(value: string) => {
            if (value.length < 15) {
              props.setState({ ...props.state, cpf: masks.maskCpfCnpj(value) })
            }
          }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <DataFieldInput
          id={'birthday'}
          label='Data de nascimento'
          required={false}
          value={props.state.birthday}
          onChange={(value: string) => { props.setState({ ...props.state, birthday: value }) }}
        />
      </div>
    </div>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <SelectFieldInput
              id={'gender'}
              value={props.state.gender || ''}
              required={true}
              label='Gênero'
              options={[{ value: 'male', label: 'Masculino' }, { value: 'female', label: 'Feminino' }]}
              placeholder='Selecione o gênero'
              onChange={(event: any) => { props.setState({ ...props.state, gender: event.target.value }) }}
            />
          </div>
          <div className="col-md-6 col-sm-12 ">
            <TextFieldInput
              id={'nickname'}
              label="Chame-me"
              placeholder='Digite aqui como gostaria de ser chamado(a)'
              required={false}
              value={props.state.nickname}
              typeInput="text"
              onChange={(value: string) => { props.setState({ ...props.state, nickname: value }) }}
            />
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          id={'phoneNumber'}
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
          id={'email'}
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
          id={'additionalInformation'}
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
