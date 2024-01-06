import Swal from 'sweetalert2'

export const AlertConfirmationSaveEdit = (editOrSave: string, callBackToSaveOrEdit: any, paramsToSaveOrEdit?: any) => {
  return Swal.fire({
    title: editOrSave == 'save' ? '<p style="font-size: 2rem" id="confirm-text-save">Deseja salvar as informações?</p>' : '<p style="font-size: 2rem" id="confirm-text-edit">Deseja editar as informações?</p>',
    showCancelButton: true,
    confirmButtonColor: '#8AC381',
    cancelButtonColor: '#F56666',
    confirmButtonText: '<p id="confirm-text-yes" style="font-size: 1rem;margin:1px">SIM</p>',
    cancelButtonText: 'NÃO',
    icon: 'question',
    allowOutsideClick: false,
    width: 500

  }).then(async (result) => {
    if (result.isConfirmed) {
      let response
      try {
        response = await callBackToSaveOrEdit(paramsToSaveOrEdit)
        Swal.fire({
          title: editOrSave == 'save' ? '<p style="font-size: 2rem" id="confirm-text-save">Salvo com sucesso!</p>'
            : '<p style="font-size: 2rem" id="confirm-text-save">Editado com sucesso!</p>',
          icon: 'success',
          allowOutsideClick: false,
          width: 500,
          confirmButtonText: '<p id="confirm-text-ok" style="font-size: 1rem;margin:1px">OK</p>'
        })
      } catch (error: any) {
        Swal.fire({
          title: 'Erro',
          text: error.response.data.message,
          icon: 'error',
          allowOutsideClick: false,
          width: 500
        })
      }
      return response
    } else {
      Swal.fire({
        title: 'Cancelado',
        text: 'Nada foi realizado!',
        icon: 'error',
        width: 500
      })
    }
  })
}
