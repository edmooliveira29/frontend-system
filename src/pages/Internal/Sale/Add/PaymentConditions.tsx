import React from 'react'
import { MultiSelectFieldInput, SwitchInput, TextFieldInput } from '../../../../components'
import { Masks } from '../../../../utils'

export const PaymentConditions: React.FC<{ state: any, setState: any, calculateTotalAmount: any }> = (props) => {
  const masks = new Masks()

  return (
    <>
      <div className='row m-0'>
        <h6 className="col-sm-12 m-2" id="products-sale-title">CONDIÇÕES DE PAGAMENTO</h6>
        <div className="col-md-3 col-sm-3">
          <MultiSelectFieldInput
            id={'formOfPayment'}
            value={props.state.formOfPayment || []}
            onChange={(event: any) => {
              props.setState({
                ...props.state,
                formOfPayment: typeof event.target.value === 'string' ? event.value.split(',') : event.target.value
              })
            }}
            options={['Boleto', 'Cartão de Crédito', 'Transferência Bancária', 'Pix', 'Dinheiro', 'Cheque']} label='Forma de Pagamento' required={true}
          />
        </div>
        <div className="col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
          <SwitchInput
            labelTitle='Tipo de Desconto:&nbsp;&nbsp;'
            label1='R$'
            label2='%'
            value={props.state.typeOfDiscount}
            onChange={(event: any) => { props.setState({ ...props.state, typeOfDiscount: !event.target.checked, valueDiscount: '0,00', discount: event.target.checked == true ? '0' : '0,00' }) }}
          />
        </div>
        <div className="col-md-3 col-sm-3">
          <TextFieldInput
            id={'discount'}
            label={`Desconto em ${props.state.typeOfDiscount || props.state.typeOfDiscount == undefined ? 'R$' : '%'}`}
            placeholder={props.state.typeOfDiscount || props.state.typeOfDiscount == undefined ? 'Desconto R$' : 'Desconto em %'}
            required={false}
            value={props.state.discount}
            typeInput={props.state.typeOfDiscount || props.state.typeOfDiscount == undefined ? "text" : 'number'}
            onChange={(value: string) => {
              props.setState({
                ...props.state,
                discount: props.state.typeOfDiscount || props.state.typeOfDiscount == undefined ? masks.maskMoney(value) : (parseFloat(value) > 100 ? '100' : value),
                valueDiscount: props.state.typeOfDiscount || props.state.typeOfDiscount == undefined ? masks.maskMoney(value) : String((Number(props.calculateTotalAmount().replace(',', '.')) * (Number(value.replace(',', '.')) / 100)).toFixed(2)).replace('.', ',')
              })
            }} />
        </div>
        <div className="col-md-3 col-sm-3">
          <TextFieldInput
            id={'valueDiscount'}
            label="Valor do desconto em R$"
            placeholder={'R$ 0,00 '}
            required={false}
            disabled={true}
            value={props.state.valueDiscount}
            typeInput="text"
          />
        </div>
      </div>
    </>
  )

}