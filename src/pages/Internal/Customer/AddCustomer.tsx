import React, { useState } from 'react'
import { AddressData, BussinesData, PersonalData } from '../../../components/input-group'
import { ComponentButtonCommon, SelectFieldInput } from '../../../components'
import './styles.sass'
import { handleSaveCustomer } from './hooks'

export const AddCustomer = () => {
  const [state, setState] = useState<any>({})
  const [typeCustomerModal, setTypeCustomerModal] = React.useState<string>('')
  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <h4 id="titles-custumer-add">ADICIONAR CLIENTE</h4>
      <div className="col-md-3 col-sm-12">
        <SelectFieldInput
          required={true}
          label='Tipo de Cliente'
          value={typeCustomerModal}
          options={[{ value: 'juristic', label: 'Jurídico' }, { value: 'natural', label: 'Físico' }]}
          placeholder='Selecione o tipo'
          onChange={(event: any) => { setTypeCustomerModal(event.target.value) }}
        />
        <br />
      </div>
      {typeCustomerModal === 'natural' && <PersonalData setState={setState} state={state} />}
      {typeCustomerModal === 'juristic' && <BussinesData setState={setState} state={state} />}
      <hr />
      {typeCustomerModal !== '' && < AddressData setUser={setState} state={state} cities={[]} />}
      {typeCustomerModal !== '' && <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={() => handleSaveCustomer(typeCustomerModal, state)} />
      </div>}
    </div>
  </>
  )
}
