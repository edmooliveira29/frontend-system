import Swal from 'sweetalert2'

export const AlertConfirmationDelete = (subtitle: string, editOrSave: string) => {
    Swal.fire({
        title: 'Você tem certeza que quer apagar esta informação?',
        text: subtitle,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8AC381',
        cancelButtonColor: '#F56666',
        confirmButtonText: 'SIM',
        width: 400

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: editOrSave == 'save' ? 'Salvo' : 'Editado',
                text: editOrSave == 'save' ? 'Informação salva com sucesso' : 'Informação editada com sucesso',
                icon: 'success',
                width: 400
            }
            )
        }
    })
}