/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import { AlertConfirmationSaveEdit, AlertGeneral, ComponentButtonInherit, ComponentButtonSuccess, SelectFieldInput, TextFieldInput } from '../../../components'
import { Masks, validateFields } from '../../../utils'
import { useNavigate } from 'react-router-dom'
import { ModalAdd } from '../../../components/modal/ModalAdd'
import { useDispatch, useSelector } from 'react-redux'
import { ActionsTypes } from '../../../redux/actions/reducers'
import { handleCreateProduct, handleEditProduct } from './handle'
import { ProductService } from '../../../services/Product'
import { CategoryService } from '../../../services/Category'


export const AddProducts: React.FC<{ state?: any, addedOutSideMainScreen: boolean, setOpenModal: any, setProducts: any, data: any, setProductsDB: any }> = (props) => {
  const mask = new Masks()
  let { objectToEdit } = useSelector((reducers: any) => reducers.objectReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [categories, setCategories] = useState<any[]>([])
  const hasObjectToEdit = objectToEdit !== undefined
  const [categoriesDB, setCategoriesDB] = useState<any>([])
  const [loading, setLoading] = useState(false)
  if (hasObjectToEdit) {
    objectToEdit = {
      ...objectToEdit,
      quantityInStock: Number(objectToEdit.quantityInStock)
    }
  }
  const [state, setState] = useState(
    hasObjectToEdit ? objectToEdit : {
      name: props.state?.name || '',
      description: props.state?.description || '',
      category: props.state?.category || '',
      price: props.state?.price || '',
      quantityInStock: props.state?.quantityInStock || '',
    }
  )


  useEffect(() => {
    const getDatas = async () => {
      const categoriesResponse = await new CategoryService().getAll()
      setCategoriesDB(categoriesResponse)
      setCategories(categoriesResponse.data.map((category: any) => ({ value: category.name, label: category.name })))
    }
    getDatas()
  }, [])

  const handleSave = async () => {
    try {

      const { name, category, price, quantityInStock } = state
      const translations = { name: 'Nome', category: 'Categoria', price: 'Preço', quantityInStock: 'Quantidade em estoque' }

      if (!validateFields({ name, category, price, quantityInStock }, translations)) {
        return false
      }
      let response
      if (hasObjectToEdit) {
        response = await AlertConfirmationSaveEdit('edit', handleEditProduct, { setLoading, ProductService, state, categoriesDB })
      } else {
        response = await AlertConfirmationSaveEdit('save', handleCreateProduct, { setLoading, ProductService, state, categoriesDB })
      }
      setLoading(false)
      if (response) {
        dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
        if (!props.addedOutSideMainScreen) {
          navigate('/produtos')
        } else {
          const productsResponse = await new ProductService().getAll()
          props.setProductsDB(productsResponse)
          props.setProducts(productsResponse.data.map((products: any) => ({ value: products.name, label: products.name })))
          props.setOpenModal(false)
        }
      }
    } catch (error: any) {
      AlertGeneral({ title: 'Erro', message: error.message, type: 'error' })
    }
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <h4 id="titles-product-add">ADICIONAR PRODUTO</h4>
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
              <ModalAdd id='add-new-category' titleOfModel={'categoria'} setData={setCategories} data={categories} setDataDB={setCategoriesDB} />
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
            id={'quantityInStock}'}
            label="Quantidade em estoque"
            placeholder='Digite aqui a quantidade em estoque'
            required={true}
            value={state.quantityInStock}
            typeInput="number"
            onChange={(value: string) => { setState({ ...state, quantityInStock: value }) }}
          />
        </div>
      </div>
      <div className="row p-3">
        <div className="d-flex justify-content-between" >
          {!props.addedOutSideMainScreen && <ComponentButtonInherit text='Voltar' sizeWidth='100px' onClick={() => {
            dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: undefined })
            navigate(-1)
          }} id='back-product' />}
          <ComponentButtonSuccess text='Salvar' sizeWidth='200px' onClick={handleSave} id='save-product' loading={loading} />
        </div>
      </div>
    </div>
  </>)
}
