import Swal from 'sweetalert2'

export const AlertConfirmationSaveEdit = (editOrSave: string, callBackToSaveOrEdit: any, paramsToSaveOrEdit?: any) => {
  return Swal.fire({
    title: editOrSave == 'save' ? 'Deseja salvar as informações?' : 'Deseja editar as informações?',
    showCancelButton: true,
    confirmButtonColor: '#8AC381',
    cancelButtonColor: '#F56666',
    confirmButtonText: 'SIM',
    cancelButtonText: 'NÃO',
    icon: 'question',
    allowOutsideClick: false,
    width: 500

  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await callBackToSaveOrEdit(paramsToSaveOrEdit)
      Swal.fire({
        title: editOrSave == 'save' ? 'Salvo com sucesso!' : 'Editado com sucesso!',
        icon: 'success',
        allowOutsideClick: false,
        width: 500
      })
      return response
    }
  })
}
