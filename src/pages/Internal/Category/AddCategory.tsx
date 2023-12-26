import React, { useState } from 'react'
import { AlertConfirmationSaveEdit, ComponentButtonInherit, ComponentButtonSuccess, SelectFieldInput, TextFieldInput } from '../../../components'
import { validateFields } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import './styles.sass'
import { useDispatch, useSelector } from 'react-redux'
import { handleCreateCategory, handleEditCategory } from './handle'
import { ActionsTypes } from '../../../redux/actions/reducers'
import { CategoryService } from '../../../services/Category'

export const AddCategory = (props: { addedOutSideMainScreen: boolean, setOpenModal: any, setCategories: any, data: any, setCategoriesDB: any }) => {
  let { objectToEdit } = useSelector((reducers: any) => reducers.objectReducer)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const hasObjectToEdit = objectToEdit !== undefined
  if (hasObjectToEdit) {
    objectToEdit = {
      ...objectToEdit,
      type: objectToEdit.type === 'PRODUTO' ? 'product' : 'service',
    }
  }
  const [state, setState] = useState(
    hasObjectToEdit ? objectToEdit : {
      type: '',
      name: '',
      description: ''
    }
  )
  const navigate = useNavigate()
  const handleSaveEdit = async () => {
    const { type, name } = state
    const translations = { name: 'Nome', type: 'Tipo', description: 'Descrição' }

    if (!validateFields({ type, name }, translations)) {
      return false
    }
    let response
    if (hasObjectToEdit) {
      response = await AlertConfirmationSaveEdit('edit', handleEditCategory, { setLoading, CategoryService, state })
    } else {
      response = await AlertConfirmationSaveEdit('save', handleCreateCategory, { setLoading, CategoryService, state })
    }
    setLoading(false)
    if (response) {
      dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
      if(!props.addedOutSideMainScreen) {
        navigate('/categorias')
      }else{
        const categoriesResponse = await new CategoryService().getAll()
        props.setCategoriesDB(categoriesResponse)
        props.setCategories(categoriesResponse.data.map((category: any) => ({ value: category.name, label: category.name })))
        props.setOpenModal(false)
      }
    }
  }

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <h4 id="titles-category-add">ADICIONAR CATEGORIA</h4>
      <div className="row m-0">
        <div className="col-md-3 col-sm-12">
          <SelectFieldInput id={'type'}
            value={state.type || ''}
            placeholder='Selecione um tipo'
            label='Tipo'
            options={[{ value: 'product', label: 'Produto' }, { value: 'service', label: 'Serviço' }]}
            required={true}
            onChange={(event: any) => setState({ ...state, type: event.target.value })} />
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
          <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => {
            dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
            navigate(-1)
          }} id='back-category' />
          <ComponentButtonSuccess text={hasObjectToEdit ? 'Editar' : 'Salvar'} sizeWidth='200px' onClick={handleSaveEdit} id='save-category' loading={loading} />
        </div>
      </div>
    </div>

  </>)
}
