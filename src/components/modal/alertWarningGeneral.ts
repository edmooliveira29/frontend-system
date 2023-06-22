import Swal from 'sweetalert2'

export const AlertWarningGeneral = (message: string) => {
    Swal.fire({
        title: 'Alerta',
        html: `
        <div>
          ${message}
        </div>
      `,
        text: message,
        icon:'warning',
        showCancelButton: false,
        confirmButtonColor: '#8AC381',
        confirmButtonText: 'Ok',
        allowOutsideClick: false,
        width: 500
    })
}
