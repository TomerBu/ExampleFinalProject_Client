import Swal from "sweetalert2"

const showSuccessDialog = (message) =>
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
        timer: 2000
    });


const showErrorDialog = (message) =>
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        timer: 2000
    });


export const dialogs = { success: showSuccessDialog, error: showErrorDialog }