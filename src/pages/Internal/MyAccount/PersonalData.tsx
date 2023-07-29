import React from 'react'
import { TextFieldInput } from '../../../components'
import { Masks } from '../../../utils/mask'
import DataFieldInput from '../../../components/inputs/DataFieldInput'
import SelectFieldInput from '../../../components/inputs/SelectFieldInput'

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
            if (value.length < 19) {
              props.setState({ ...props.state, cpf: masks.maskCpfCnpj(value) })
            }
          }}
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <DataFieldInput label='Data de nascimento' />
      </div>
    </div>
    <div className="row m-0">
      <div className="col-md-3 col-sm-12">
        <div className="row m-0">
          <div className="col-md-6 col-sm-12" style={{ paddingRight: '10px',marginTop: '6px', top: '-5px', position: 'relative', padding: '0px'}}>
            <SelectFieldInput required={true} label='Gênero' options={[{ value: 'male', label: 'Masculino' }, { value: 'female', label: 'Feminino' }]} />
          </div>
          <div className="col-md-6 col-sm-12" style={{ marginTop: '6px', padding: '0px'}}>
            <TextFieldInput
              label="Chame-me "
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