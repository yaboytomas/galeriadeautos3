var myModal;

function showModal(event) {
    const img = event.target;
    const text = document.getElementById('textimg');
    text.textContent = img.alt;
    const imgModal = document.getElementById('imgModal');
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    myModal.show();
}

function closeModal(event) {
    myModal.hide();
}

function asignarComportamiento() {
    myModal = new bootstrap.Modal(document.getElementById('myModal'));

    const artworks = document.querySelectorAll('.artwork');
    artworks.forEach(artwork => {
        artwork.addEventListener('click', showModal);
    });
    const closebutton = document.getElementById('closebtn');
    closebutton.addEventListener('click', closeModal);

    const buttons = document.querySelectorAll('.remove-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    });
}

document.addEventListener('DOMContentLoaded', asignarComportamiento);