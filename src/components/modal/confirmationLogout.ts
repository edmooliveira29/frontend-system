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
        width:400
        
        
    }).then((result) => {
        if (result.isConfirmed) {
            let timerInterval: number = 1500
            Swal.fire({
                title: 'Até mais ...',
                timer: 1000,
                timerProgressBar: true,
                width:400,
                willClose: () => {
                    //clearInterval(timerInterval)
                    handleLogOut()
                }
            })
        }
    })

}

