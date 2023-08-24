import React from 'react'
import { Masks } from '../../../utils/mask'
import { SelectFieldInput, DataFieldInput, TextFieldInput } from '../../../components/inputs'

export const PersonalData = (props: { state: any, setUser: any }) => {
  const masks = new Masks()

  return (<>
    <h4 id="title-personal-data">DADOS</h4>
    <div className="row m-0">
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          id={'name'}
          label="Nome"
          placeholder='Digite aqui o nome completo'
          required={true}
          value={props.state.name}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, name: value }) }}
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
            if (value.length < 19) {
              props.setUser({ ...props.state, cpf: masks.maskCpfCnpj(value) })
            }
          }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <DataFieldInput id={'birthday'}label='Data de nascimento' value={props.state.birthday} />
      </div>
    </div>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <div className="row m-0">
          <div className="col-md-6 col-sm-12" style={{ marginTop: '0px', padding: '0px' }}>
            <SelectFieldInput value={props.state.gender} required={true} label='Gênero' options={[{ value: 'male', label: 'Masculino' }, { value: 'female', label: 'Feminino' }]} placeholder='Selecione o gênero' />
          </div>
          <div className="col-md-6 col-sm-12" style={{ marginTop: '0px', padding: '0px' }}>
            <TextFieldInput
              id={'nickname'}
              label="Chame-me"
              placeholder='Digite aqui como gostaria de ser chamado(a)'
              required={false}
              value={props.state.nickname}
              typeInput="text"
              onChange={(value: string) => { props.setUser({ ...props.state, nickname: value }) }}
            />
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        <TextFieldInput
          id={'phoneNumber'}
          label="Telefone"
          placeholder='Digite aqui o telefone'
          required={true}
          value={props.state.phoneNumber}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, phoneNumber: value }) }}
        />
      </div>
      <div className="col-md-6 col-sm-12">
        <TextFieldInput
          id={'email'}
          label="Email"
          placeholder='Digite aqui o seu email'
          required={true}
          value={props.state.email}
          typeInput="text"
          onChange={(value: string) => { props.setUser({ ...props.state, email: value }) }}
        />
      </div>
    </div>
  </>)
}