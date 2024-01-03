import Swal, { SweetAlertIcon } from 'sweetalert2'

export const AlertGeneral = (props:{ title: string, message: string, type: SweetAlertIcon }) => {
  Swal.fire({
    title: props.title,
    html: `<div id="message-alert">${props.message}</div>`,
    text: props.message,
    icon: props.type,
    showCancelButton: false,
    confirmButtonColor: '#8AC381',
    confirmButtonText: '<p id="confirm-text-ok" style="font-size: 1rem;margin:1px">Ok</p>',
    allowOutsideClick: false,
    width: 500,
  })
}
