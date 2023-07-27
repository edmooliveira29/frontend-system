import Swal from 'sweetalert2'

export const AlertConfirmationSaveEdit = (title: string, subtitle: string, editOrSave: string) => {
  Swal.fire({
    title: editOrSave == 'save' ? 'Deseja salvar as informações?' : 'Deseja editar as informações?',
    showCancelButton: true,
    confirmButtonColor: '#8AC381',
    cancelButtonColor: '#F56666',
    confirmButtonText: 'SIM',
    cancelButtonText: 'NÃO',
    allowOutsideClick:false,
    width: 500

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Salvo com sucesso!',
        icon: 'success',
        allowOutsideClick:false,
        width: 500
      })
    }
  })
}
