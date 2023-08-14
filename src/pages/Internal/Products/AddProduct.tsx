import React, { useState } from 'react'
import { AlertGeneral, ComponentButtonCommon, TextFieldInput } from '../../../components'
import { Masks, validateFields } from '../../../utils'


export const AddProducts = (props: { state: any }) => {
  const mask = new Masks()
  const [state, setState] = useState({
    name: props.state?.name || '',
    description: props.state?.description || '',
    category: props.state?.category || '',
    price: props.state?.price || '',
    stock: props.state?.stock || '',
  })

  const handleSave = async () => {
    const { name, category, price, stock } = state
    const translations = { name: 'Nome', category: 'Categoria', price: 'Preço', stock: 'Estoque' }
    
    if (!validateFields({ name, category, price, stock }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <h4 id="titles-custumer-add">ADICIONAR PRODUTO</h4>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <TextFieldInput
            label="Nome"
            placeholder='Digite aqui o nome do produto'
            required={true}
            value={state.name}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, name: value }) }}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <TextFieldInput
            label="Descrição"
            placeholder='Digite aqui uma descrição'
            required={false}
            value={state.description}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, description: value }) }}

          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <TextFieldInput
            label="Categoria"
            placeholder='Digite aqui uma categoria'
            required={true}
            value={state.category}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, category: value }) }}
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <TextFieldInput
            label="Preço"
            placeholder='Digite aqui o preço'
            required={true}
            value={state.price}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, price: mask.maskMoney(value) }) }}
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <TextFieldInput
            label="Estoque"
            placeholder='Digite aqui o estoque'
            required={true}
            value={state.stock}
            typeInput="number"
            onChange={(value: string) => { setState({ ...state, stock: value }) }}
          />
        </div>
      </div>
      <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>
    </div>

  </>)
}
