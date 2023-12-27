import { Box, Modal, Tooltip } from '@mui/material'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

export const ModalDetails: React.FC<{ data: any, title: string, onClose: () => void, translations: any }> = (props) => {
  const { data, title, onClose } = props
  console.log(props.translations)
  const [openModal, setOpenModal] = React.useState(true)
  const fieldsNotToShow = ['password', 'createdAt', 'editAt', 'updatedAt', '_id', 'profilePicture', 'sessionToken', 'createWithGoogle', 'lastChangedPassword']
  const keys = Object.keys(data).filter(key => !fieldsNotToShow.includes(key))

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => { setOpenModal(false); onClose() }}
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
            <hr />
            <ul>
              {keys.map((key, index) => {
                if (props.translations.length > index) {

                  return (
                    data[props.translations[index]._id] !== '' && data[props.translations[index]._id] !== null && data[props.translations[index]._id] !== undefined ? <div className="row" key={props.translations[index]._id} style={{ fontSize: '14px', listStyleType: 'none' }}>
                      <div className="col-6 text-end mx-0 my-1 px-1 ">
                        <strong>{props.translations[index].label}: </strong>
                      </div>
                      <div className="col-6 text-start mx-0 my-1 px-1">
                        {props.translations[index]._id === 'role' ?
                          data[props.translations[index]._id] == 'owner' ? 'PROPRIETÁRIO' : data[props.translations[index]._id] === 'salesman' ? 'VENDEDOR' : data[props.translations[index]._id]
                          : data[props.translations[index]._id]}
                      </div>
                    </div> : null

                  )
                }
              })}
            </ul>

          </div>
        </Box>
      </Modal>
    </>
  )
}
