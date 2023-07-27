import Swal from 'sweetalert2'

export const AlertConfirmationLogout = async (handleLogOut: any) => {
  await Swal.fire({
    title: 'Deseja sair?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#8AC381',
    cancelButtonColor: '#F56666',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
    allowOutsideClick:false,
    width:400
        
        
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        allowOutsideClick:false,
        title: 'Até mais ...',
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
        width:400,
        willClose: () => {
          handleLogOut()
        }
      })
    }
  })

}

