import Swal from 'sweetalert2'

export const AlertConfirmationDelete = (subtitle: string, callbackDelete?: any, paramsToDelete?: any) => {
  Swal.fire({
    title: '<p style="font-size: 2rem" id="confirm-text-delete">Você tem certeza que quer apagar esta informação?</p>',
    text: subtitle,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#8AC381',
    cancelButtonColor: '#F56666',
    confirmButtonText: '<p id="confirm-text-yes" style="font-size: 1rem;margin:1px">Sim</p>',
    cancelButtonText: 'NÃO',
    allowOutsideClick: false,
    width: 500
    
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await callbackDelete(paramsToDelete)
        Swal.fire({
          title: 'Deletado',
          html: '<p id="confirm-text-delete" style="font-size: 1rem;margin:1px">Informação deletada com sucesso!</p>',
          icon: 'success',
          width: 500,
          confirmButtonText: '<p id="confirm-text-ok" style="font-size: 1rem;margin:1px">Ok</p>',
        })
      } catch (error: any) {
        Swal.fire({
          title: 'Erro',
          text: error.response,
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