import React, { useState } from 'react'
import { ComponentButtonInherit, ComponentButtonSuccess, SelectFieldInput, TextFieldInput } from '../../../components'
import { validateFields } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import './styles.sass'

export const AddCategory = () => {
  const [state, setState] = useState({
    typeCategory: '',
    name: '',
    description: '',
  })
  const navigate = useNavigate()
  const handleSave = async () => {
    const { typeCategory, name } = state
    const translations = { type: 'Tipo', name: 'Nome' }

    if (!validateFields({ typeCategory, name }, translations)) {
      return false
    }
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <h4 id="titles-category-add">ADICIONAR CATEGORIA</h4>
      <div className="row m-0">
        <div className="col-md-3 col-sm-12">
          <SelectFieldInput id={'typeCategory'} value={state.typeCategory || ''} placeholder='Selecione um tipo' label='Tipo' options={[{ value: 'product', label: 'Produto' }]} required={true} onChange={(event: any) => setState({ ...state, typeCategory: event.target.value })} />
        </div>
        <div className="col-md-4 col-sm-12">
          <TextFieldInput
            id={'name'}
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
            id={'description'}
            label="Descrição"
            placeholder='Digite aqui uma categoria'
            required={false}
            value={state.description}
            typeInput="text"
            onChange={(value: string) => { setState({ ...state, description: value }) }}
          />
        </div>
      </div>
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => navigate(-1)} id='back-category'/>
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-category'/>
        </div>
      </div>
    </div>

  </>)
}
