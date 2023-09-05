import Swal from 'sweetalert2'

export const AlertConfirmationDelete = (subtitle: string) => {
  Swal.fire({
    title: 'Você tem certeza que quer apagar esta informação?',
    text: subtitle,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#8AC381',
    cancelButtonColor: '#F56666',
    confirmButtonText: 'SIM',
    allowOutsideClick: false,
    width: 500

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deletado',
        text: 'Informação deletada com sucesso',
        icon: 'success',
        width: 500
      })
    } else {
      Swal.fire({
        title: 'Cancelado',
        text: 'Ok, nada foi realizado',
        icon: 'error',
        width: 500
      })
    }
  })
}