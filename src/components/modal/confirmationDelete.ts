import Swal from 'sweetalert2'

export const AlertConfirmationDelete = (subtitle: string, callbackDelete?: any, paramsToDelete?: any) => {
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
    
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await callbackDelete(paramsToDelete)
        Swal.fire({
          title: 'Deletado',
          text: 'Informação deletada com sucesso',
          icon: 'success',
          width: 500
        })
      } catch (error: any) {
        Swal.fire({
          title: 'Erro',
          text: error.response.data.message,
          icon: 'error',
          width: 500
        })
      }
    } else {
      Swal.fire({
        title: 'Cancelado',
        text: 'Nada foi realizado',
        icon: 'error',
        width: 500
      })
    }
  })
}