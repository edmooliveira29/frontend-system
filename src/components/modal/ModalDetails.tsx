import { Box, Modal, Tooltip } from '@mui/material'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export const ModalDetails: React.FC<{ data: any, title: string, onClose: () => void, translations: any }> = (props) => {
  const { data, title, onClose } = props // Desestruture os props para obter os dados e o título
  const [openModal, setOpenModal] = React.useState(true)
  const keys = Object.keys(data)
  console.log(props.translations)
  return (
    <>
      <Modal
        open={openModal} // Use a variável de estado openModal para controlar a abertura do modal
        onClose={() => { setOpenModal(false); onClose() }} // Feche o modal e chame a função onClose ao fechar
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
          width: '50%'
        }}>
          <div className="d-flex justify-content-end" style={{ cursor: 'pointer' }}>
            <Tooltip title="Fechar sem salvar" placement='left' arrow>
              <i><AiFillCloseCircle className="align-self-end" size={20} color='#FF0000' onClick={() => { setOpenModal(false); onClose() }} /></i>
            </Tooltip>
          </div>
          <div className="row d-flex align-items-center justify-content-center" style={{ maxHeight: 'calc(90vh - 150px)', overflowY: 'auto', overflowX: 'hidden' }}>
            <h2 className='text-center'>Detalhes de {title}</h2>
            <hr/>
            <ul>
              {keys.map((key, index) => (
                <div className="row" key={key} style={{ fontSize: '14px', listStyleType: 'none' }}>
                  <div className="col-6 text-end mx-0 my-1 px-1 ">
                    <strong>{props.translations[index].label}: </strong>
                  </div>
                  <div className="col-6 text-start mx-0 my-1 px-1">
                    {data[key]}
                  </div>
                </div>
              ))}
            </ul>

          </div>
        </Box>
      </Modal>
    </>
  )
}
