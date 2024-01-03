import Swal from 'sweetalert2'

export const AlertConfirmationLogout = async (handleLogOut: any) => {
  await Swal.fire({
    title: '<p style="font-size: 2rem">Deseja sair?</p>',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#8AC381',
    cancelButtonColor: '#F56666',
    confirmButtonText: '<p id="confirm-text" style="font-size: 1rem;margin:1px">Sim</p>',
    cancelButtonText: '<p id="cancel-text" style="font-size: 1rem; margin:1px">Não</p>',
    allowOutsideClick: false,
    width: 400


  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        allowOutsideClick: false,
        title: '<p style="font-size: 2rem" id="text-logout">Saindo...</p>',
        timer: 1000,
        showConfirmButton: false,
        timerProgressBar: true,
        width: 400,
        willClose: () => {
          handleLogOut()
        }
      })
    }
  })

}

