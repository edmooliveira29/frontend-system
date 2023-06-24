import Swal from 'sweetalert2'

export const alertLoading = () => {
        Swal.fire({
            title: 'Aguarde um momento...',
            html: '<br><br>',
            timer:1000,
            showConfirmButton: false,
            didRender: () => {
                Swal.showLoading()
            }
        })

    
}

