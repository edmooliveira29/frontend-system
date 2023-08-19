/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react'
import './styles.sass'
import { fakerPT_BR } from '@faker-js/faker'
import { ComponentButtonCommon, DataFieldInput, MultiSelectFieldInput, SelectFieldInput, TextFieldInput } from '../../../components'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsPlusCircle } from 'react-icons/bs'
import { Box, Modal, Tooltip } from '@mui/material'
import { AddCustomer } from '../Customer'

export const AddSale = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const [typeCustomerModal, setTypeCustomerModal] = React.useState('')
  const [customers, setCustumers] = useState<any>()
  const [state, setState] = useState<any>({
    customer: '',
    date: null,
    formOfPayment: []
  })
  const handleSave = async () => {
    alert('Em fase de construção!')
  }

  useEffect(() => {
    const peopleList = []
    for (let i = 0; i < 50; i++) {
      const name = fakerPT_BR.person.fullName()
      peopleList.push({
        value: `objectId${i}`,
        label: name,
      })
    }
    setCustumers(peopleList)
  }, [])
  useEffect(() => {
    console.log(typeCustomerModal)
  }, [typeCustomerModal])

  return (<>
    <div className="row border border-secondary rounded" id="div-list-customer">
      <div className="col-sm-12 col-md-9 p-0 border-secondary">
        <h4 className="col-sm-12" id="title-natural-person">ADICIONAR VENDA</h4>
      </div>
      <div className="row m-0">
        <div className="col-md-2 col-sm-12">
          <DataFieldInput label='Data da Venda' value={state.birthday} onChange={(value: string) => { setState({ ...state, date: value }) }} />
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="row">
            <div className="col-10">
              <SelectFieldInput
                required={true}
                label='Cliente'
                value={state.customer}
                options={customers}
                placeholder='Selecione um cliente'
                onChange={(event: any) => { setState({ ...state, customer: event.target.value }) }}
              />
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center p-0" style={{ top: '15px', position: 'relative' }}>
              <Tooltip title="Adicionar um cliente" placement='top' arrow sx={{ right: '50px' }}>
                <i> <BsPlusCircle size={25} color='black' style={{ cursor: 'pointer', marginRight: '20px' }} onClick={() => setOpenModal(true)} /> </i>
              </Tooltip>
              <Modal
                open={openModal}
                onClose={() => { setTypeCustomerModal(''); setOpenModal(false) }}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                style={{ zIndex: 1000 }}
              >
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  pt: 1,
                  px: 2,
                  pb: 2,
                  borderRadius: '5px',
                  maxWidth: '90%',
                  width: '100%',
                  // minHeight: '70%',
                  //height: '85%'
                }}>

                  <div className="d-flex justify-content-end" style={{ cursor: 'pointer' }} >
                    <Tooltip title="Fechar sem salvar" placement='left' arrow>
                      <i><AiFillCloseCircle className="align-self-end" size={20} color='#FF0000' onClick={() => { setTypeCustomerModal(''); setOpenModal(false) }} /></i>
                    </Tooltip>
                  </div>
                  <div className="row d-flex align-items-center justify-content-center" style={{ maxHeight: 'calc(90vh - 150px)', overflowY: 'auto', overflowX: 'hidden' }}>
                    {<AddCustomer />}
                  </div>
                </Box>

              </Modal>
            </div>
          </div>

        </div>

        <div className="col-md-4 col-sm-12">
          <TextFieldInput
            label="Descrição"
            placeholder='Descrição da venda'
            required={true}
            value={state.description}
            typeInput="text"
            onChange={(value: string) => {
              setState({ ...state, description: value })
            }}
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <MultiSelectFieldInput
            value={state.formOfPayment}
            onChange={(event: any) => {
              setState({
                ...state,
                formOfPayment: typeof event.target.value === 'string' ? event.value.split(',') : event.target.value
              })
            }}
            options={['Boleto', 'Cartão de Crédito', 'Transferência Bancária', 'Pix', 'Dinheiro', 'Cheque']} label='Meio de Pagamento' required={true} />

        </div>
      </div>
      <div className="m-2 d-flex justify-content-center">
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>

    </div >
  </>
  )
}