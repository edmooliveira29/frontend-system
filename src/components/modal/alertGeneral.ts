import Swal, { SweetAlertIcon } from 'sweetalert2'

export const AlertGeneral = (props:{ message: string, type: SweetAlertIcon }) => {
  Swal.fire({
    title: 'Alerta',
    html: `<div>${props.message}</div>`,
    text: props.message,
    icon: props.type,
    showCancelButton: false,
    confirmButtonColor: '#8AC381',
    confirmButtonText: 'Ok',
    allowOutsideClick: false,
    width: 500,
  })
}
