import React from 'react'
import { ComponentButtonCommon } from '../../../../components'

export const FooterSale: React.FC<{ state: any, calculateTotalAmount: any, handleSave: any }> = (props) => {
  return <>
    <div className="mt-auto m-0">
      <div id="div-footer-sale" className="row d-flex flex-wrap justify-content-between align-items-center p-3 border">
        <div className="col-md-3 d-flex align-items-center h5 p-1" style={{ color: 'blue' }}>
          <strong>Valor em produtos:&nbsp;</strong>
          R$ {props.calculateTotalAmount()}
        </div>
        <div className="col-md-3 d-flex align-items-center h5 p-1" style={{ color: 'red' }}>
          <strong>Descontos:&nbsp;</strong>
          R$ {props.state.valueDiscount || '0,00'}
        </div>
        <div className="col-md-3 d-flex align-items-center h3 p-1" style={{ color: 'green' }}>
          <strong>Valor total:&nbsp;</strong> R$ {String((Number(props.calculateTotalAmount().replace(',', '.')) - Number((props.state.valueDiscount || '0,00').replace(',', '.'))).toFixed(2)).replace('.', ',')}
        </div>
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <ComponentButtonCommon text='Salvar' onClick={props.handleSave} />
        </div>
      </div>
    </div>
  </>
}
