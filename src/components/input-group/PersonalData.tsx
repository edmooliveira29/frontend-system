import React from 'react'
import { SelectFieldInput, DataFieldInput, TextFieldInput } from '../../components/inputs'
import { Masks } from '../../utils'

export const PersonalData = (props: { state: any, setState: any, title?: string }) => {
  const masks = new Masks()

  return (<>
    <h4 id="titles-custumer-add">{props.title ? props.title : 'ADICIONAR PESSOA FÍSICA'}</h4>
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
      <div className="col-md-3 col-sm-12"><DataFieldInput id={'birthday'} label='Data de nascimento' value={props.state.birthday} /></div>
    </div>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <div className="row m-0">
          <div className="col-md-6 col-sm-12" style={{ marginTop: '0px', padding: '0px', paddingRight: '2px' }}>
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
          <div className="col-md-6 col-sm-12 " style={{ marginTop: '0px', padding: '0px', paddingLeft: '2px' }}>
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
