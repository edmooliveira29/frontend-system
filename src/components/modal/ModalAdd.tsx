import { Box, Modal, Tooltip } from '@mui/material'
import React from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { AddProducts } from '../../pages/Internal/Products'
import { AddCustomer } from '../../pages/Internal/Customer'
import { AddCategory } from '../../pages/Internal/Category'

export const ModalAdd: React.FC<{ titleOfModel: any, id: string }> = (props) => {
  const [openModal, setOpenModal] = React.useState(false)
  console.log(props.titleOfModel)

  const openModalScreen = () => {
    if (props.titleOfModel == 'cliente') {
      return (<><AddCustomer /></>)
    }
    if (props.titleOfModel == 'categoria') {
      return (<><AddCategory /></>)
    }
    if (props.titleOfModel == 'produto') {
      return (<><AddProducts /></>)
    }
  }
  return (<>
    <Tooltip title={`Adicionar ${props.titleOfModel.charAt(props.titleOfModel.length - 1) == 'a' ? 'uma nova' : 'um novo'}  ${props.titleOfModel}`} placement='top' arrow >
      <i id={props.id}> < AiOutlinePlusCircle size={25} color='black' style={{ cursor: 'pointer' }} onClick={() => setOpenModal(true)} /> </i>
    </Tooltip>
    <Modal
      open={openModal}
      onClose={() => { setOpenModal(false) }}
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
        width: '100%'
      }}>

        <div className="d-flex justify-content-end" style={{ cursor: 'pointer' }} >
          <Tooltip title="Fechar sem salvar" placement='left' arrow>
            <i><AiFillCloseCircle className="align-self-end" size={20} color='#FF0000' onClick={() => { setOpenModal(false) }} /></i>
          </Tooltip>
        </div>
        <div className="row d-flex align-items-center justify-content-center" style={{ maxHeight: 'calc(90vh - 150px)', overflowY: 'auto', overflowX: 'hidden' }}>
          {openModalScreen()}
        </div>
      </Box>

    </Modal>
  </>)
}