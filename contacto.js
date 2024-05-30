function revisarFormulario(event) {
    event.preventDefault();
    const form = event.target;
    const nombre = form.name.value;
    const email = form.email.value;
    const mensaje = form.message.value;
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, rellene todos los campos');
        return;
    }
    const selectForm = form.tipo;
    if (mensaje.includes('compra')) {
        selectForm.value = 'compra';
    } else if (mensaje.includes('venta')) {
        selectForm.value = 'venta';
    } else {
        selectForm.value = 'consulta';
    }
    alert('Éxito: El formulario ha sido enviado correctamente');
}

function asignarComportamiento() {
    const form = document.getElementById('contactoform');
    form.addEventListener('submit', revisarFormulario);
}

document.addEventListener('DOMContentLoaded', asignarComportamiento);