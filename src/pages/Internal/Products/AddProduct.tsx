import React, { useEffect, useState } from 'react'
import { ComponentButtonInherit, ComponentButtonSuccess, SelectFieldInput, TextFieldInput } from '../../../components'
import { Masks, validateFields } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import { ModalAdd } from '../../../components/modal/ModalAdd'
import { CategoryService } from '../../../services/Category'


export const AddProducts: React.FC<{ state?: any }> = (props) => {
  const mask = new Masks()
  const navigate = useNavigate()
  const [categories, setCategories] = useState<any[]>([])
  const [state, setState] = useState({
    name: props.state?.name || '',
    description: props.state?.description || '',
    category: props.state?.category || '',
    price: props.state?.price || '',
    stock: props.state?.stock || '',
  })
  useEffect(() => {
    const getDatas = async () => {
      let categories = await new CategoryService().getAll()
      categories = categories.data.map((category: any) => ({ value: category.name, label: category.name }))
      setCategories(categories)
    }
    getDatas()
  }, [])


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
            id={'name'}
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
            id={'description'}
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
          <div className="row">
            <div className="col-11">
              <SelectFieldInput
                id={'category'}
                placeholder='Selecione uma categoria'
                value={state.category || ''}
                label='Categoria' options={categories}
                required={true}
                onChange={(event: any) => setState({ ...state, category: event.target.value })}
              />
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center p-0" style={{ top: '15px', position: 'relative' }}>
              <ModalAdd id='add-new-category' titleOfModel={'categoria'} />
            </div>
          </div>

        </div>
        <div className="col-md-3 col-sm-12">
          <TextFieldInput
            id={'price'}
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
            id={'stock'}
            label="Estoque"
            placeholder='Digite aqui o estoque'
            required={true}
            value={state.stock}
            typeInput="number"
            onChange={(value: string) => { setState({ ...state, stock: value }) }}
          />
        </div>
      </div>
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => navigate(-1)} id='back-product' />
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-product' />
        </div>
      </div>    </div>

  </>)
}
