import React, { useState } from 'react'
import { ComponentButtonCommon, SelectFieldInput, TextFieldInput } from '../../../components'
import { validateFields } from '../../../utils'


export const AddCategory = () => {
  const [state, setState] = useState({
    type: '',
    name: '',
    description: '',
  })

  const handleSave = async () => {
    const { type, name } = state
    const translations = { type: 'Tipo', name: 'Nome' }

    if (!validateFields({ type, name }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <h4 id="titles-custumer-add">ADICIONAR CATEGORIA</h4>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <SelectFieldInput value={state.type ||''} placeholder='Selecione um tipo' label='Tipo' options={[{ value: 'buy', label: 'Compra' }, { value: 'sell', label: 'Venda' }]} required={true} onChange={(event: any) => setState({ ...state, type: event.target.value })} />
        </div>
        <div className="col-md-4 col-sm-12">
          <TextFieldInput
            label="Nome"
            placeholder='Digite aqui um nome'
            required={true}
            value={state.name}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, name: value }) }}

          />
        </div>
        <div className="col-md-5 col-sm-12">
          <TextFieldInput
            label="Descrição"
            placeholder='Digite aqui uma categoria'
            required={false}
            value={state.description}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, description: value }) }}
          />
        </div>
      </div>
      <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizeWidth='280px' onClick={handleSave} />
      </div>
    </div>

  </>)
}
