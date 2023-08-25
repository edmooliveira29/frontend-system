import React from 'react'
import { ComponentButtonCommon, ComponentButtonInherit, ComponentButtonSuccess } from '../../../../components'
import { useNavigate } from 'react-router-dom'

export const FooterSale: React.FC<{ state: any, calculateTotalAmount: any, handleSave: any }> = (props) => {
  const navigate = useNavigate()
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
        <div className="row p-3">
          <div className="d-flex justify-content-between" >
            <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => navigate(-1)} />
            <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={props.handleSave} />
          </div>
        </div>
      </div>
    </div>
  </>
}
