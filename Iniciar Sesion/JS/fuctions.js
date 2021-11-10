//Evento del input-password
var ShowPassword = document.getElementById('eye-1');
var Input = document.getElementById('show-pass-1');

ShowPassword.addEventListener('click', ShowPasswordF);

function ShowPasswordF() {
    // Verificamos el tipo de input
    if (Input.type == "password") {
        // Cambiamos el tipo de input
        Input.type = "text";
        // Lo volvemos a ocultar despues de 3sg
        setTimeout("Ocultar()", 1000);
    } else {
        // Lo regresamos al tipo original
        Input.type = "password";
    }
}



function Ocultar() {
    Input.type = "password";
    Input2.type = "password";
}


// Modal
var modalBtn = document.querySelector('.modal-btn')
var modalBlur = document.querySelector('.modal-blur')
var modalClose = document.querySelector('.modal-close')
    /*Prueba de ocultar */


modalBtn.addEventListener('click', function() {
    modalBlur.classList.add('blur-active')
})

modalClose.addEventListener('click', function() {
    modalBlur.classList.remove('blur-active')
})

/*Prueba de ocultar*/
function ocultar() {
    document.getElementById('caja').style.visibility = "hidden";
}