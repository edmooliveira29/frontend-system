/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import '../styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { DataFieldInput, SelectFieldInput, TextAreaInput, TextFieldInput } from '../../../../components'
import { validateFields } from '../../../../utils'
import { FooterSale } from './FooterSale'
import { ProductsInSale } from './ProductsInSale/ProductsInSale'
import { ModalAddProductOrCustomer } from './ModalAddProductOrCustomer'
import { PaymentConditions } from './PaymentConditions'

export const AddSale = () => {
  const [customers, setCustumers] = useState<any>()
  const [state, setState] = useState<any>({
    customer: '',
    dateOfSale: null,
    formOfPayment: [],
    products: [],
    saleTotalAmount: 0,
    date: '',
    description: '',
    discount: '',
    valueDiscount: '',
    typeOfDiscount: false,
    informationAboutTheSale: ''
  })

  const handleSave = async () => {
    const { dateOfSale, customer, description, products, formOfPayment } = state

    const translations = {
      dateOfSale: 'Data da Venda',
      customer: 'Cliente',
      description: 'Descrição',
      products: 'Produtos',
      formOfPayment: 'Forma de Pagamento',
    }

    if (!validateFields({ dateOfSale, customer, description, products, formOfPayment }, translations)) {
      return false
    }
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

  // useEffect(() => {

  //   console.log(state)

  // }, [state])

  const calculateTotalAmount = () => {
    let totalAmount = 0
    state.products.forEach((_product: any, id: number) => {
      const subTotalField = `subTotal_${id}`
      const subTotalValue = state.products[id]?.[subTotalField]
      if (subTotalValue) {
        totalAmount += parseFloat(subTotalValue.replace(',', '.'))
      }
    })

    return String(totalAmount.toFixed(2)).replace('.', ',')
  }

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-12" id="title-natural-person">ADICIONAR VENDA</h4>
      </div>
      <div className="row m-0">
        <div className="col-md-3 col-sm-12">
          <DataFieldInput id={'dateOfSale'} label='Data da Venda' required={true} value={state.dateOfSale} onChange={(value: string) => { setState({ ...state, dateOfSale: value }) }} />
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="row">
            <div className="col-10">
              <SelectFieldInput
                required={true}
                label='Cliente'
                value={state.customer}
                options={customers}
                placeholder='Selecione um cliente'
                onChange={(event: any) => { setState({ ...state, customer: event.target.value }) }}
              />
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center p-0" style={{ top: '15px', position: 'relative' }}>
              {<ModalAddProductOrCustomer titleOfModel={'cliente'} id={'add-new-customer'} />}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <TextFieldInput
            id={'description'}
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

      </div>
      <div style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0', margin: '0px 0px' }}>

        <ProductsInSale state={state} calculateTotalAmount={calculateTotalAmount} setState={setState} />
      </div>
      <PaymentConditions state={state} setState={setState} calculateTotalAmount={calculateTotalAmount} />
      <div className='row py-2 m-0'>
        <label id={`label - input`}>Observações sobre a venda</label>
        <TextAreaInput onChange={(event: any) => { setState({ ...state, informationAboutTheSale: event.target.value }) }} />
      </div>
      <FooterSale state={state} calculateTotalAmount={calculateTotalAmount} handleSave={handleSave} />
    </div >

  </>
  )
}