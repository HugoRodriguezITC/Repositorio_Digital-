localStorage.setItem('deploy', 'false');

function mostrarMenu() {

    if (localStorage.getItem('deploy') == 'false') {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('menu').style.transitionDelay = '40s';

        document.getElementById('abajo').style.display = 'none';
        document.getElementById('up').style.display = 'block';
        localStorage.setItem('deploy', 'true');
    } else {

        document.getElementById('menu').style.display = 'none';
        document.getElementById('abajo').style.display = 'block';
        document.getElementById('up').style.display = 'none';
        localStorage.setItem('deploy', 'false');
    }
}


//Evento del input-password
var ShowPassword = document.getElementById('eye-1');
var ShowPassword2 = document.getElementById('eye-2');
var Input = document.getElementById('show-pass-1');
var Input2 = document.getElementById('show-pass-2');

ShowPassword.addEventListener('click', ShowPasswordF);
ShowPassword2.addEventListener('click', ShowPasswordF2);

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

function ShowPasswordF2() {
    // Verificamos el tipo de input
    if (Input2.type == "password") {
        // Cambiamos el tipo de input
        Input2.type = "text";
        // Lo volvemos a ocultar despues de 3sg
        setTimeout("Ocultar()", 1000);
    } else {
        // Lo regresamos al tipo original
        Input2.type = "password";
    }

}

function Ocultar() {
    Input.type = "password";
    Input2.type = "password";
}