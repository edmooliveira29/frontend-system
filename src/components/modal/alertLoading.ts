import Swal from 'sweetalert2'

export const alertLoading = (state: string, message?: string) => {
  if (state == 'open') {
    Swal.fire({
      title: 'Aguarde um momento...',
      html: message ? message  : '',
      showConfirmButton: false,
      didRender: () => {
        Swal.showLoading()
      }
    })
  } else if (state == 'close') {
    Swal.close()
  }
}
