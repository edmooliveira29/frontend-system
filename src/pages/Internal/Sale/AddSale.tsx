import React, { useEffect, useState } from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { Link } from 'react-router-dom'
import { ComponentButtonCommon, DataFieldInput, MultiSelectFieldInput, SelectFieldInput, TableComponent, TextFieldInput } from '../../../components'

export const AddSale = () => {
  const [customers, setCustumers] = useState<any>()
  const [state, setState] = useState<any>({
    customer: '',
    date: null,
    formOfPayment: []
  })
  const handleSave = async () => {
    alert('Em fase de construção!')
  }

  useEffect(() => {
    const peopleList = []
    for (let i = 0; i < 50; i++) {
      const name = fakerPT_BR.person.fullName()
      peopleList.push({
        value: `objectId${i}`,
        label: name,
      })
    }
    setCustumers(peopleList)
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])
  console.log(state)
  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">ADICIONAR VENDA</h4>
      </div>
      <div className="row m-0">
        <div className="col-md-2 col-sm-12">
          <DataFieldInput label='Data da Venda' value={state.birthday} />
        </div>
        <div className="col-md-3 col-sm-12">
          <SelectFieldInput
            required={true}
            label='Cliente'
            value={state.customer}
            options={customers}
            placeholder='Selecione um cliente'
            onChange={(event: any) => {
              setState({ ...state, customer: event.target.value })
              console.log(state)
            }}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <TextFieldInput
            label="Descrição"
            placeholder='Descrição da venda'
            required={true}
            value={state.description}
            typeInput="text"
            onChange={(value: string) => {
              setState({ ...state, description: value })
            }}
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <MultiSelectFieldInput
            value={state.formOfPayment}
            onChange={(event: any) => {
              setState({
                ...state,
                formOfPayment: typeof event.target.value === 'string' ? event.value.split(',') : event.target.value
              })
            }}
            options={['Boleto', 'Cartão de Crédito', 'Transferência Bancária', 'Pix', 'Dinheiro', 'Cheque']} label='Meio de Pagamento' required={true} />

        </div>
      </div>
      <div className="m-2 d-flex justify-content-center">
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>

    </div>
  </>
  )
}