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
        setTimeout("Ocultar1()", 1000);
    } else {
        // Lo regresamos al tipo original
        Input.type = "password";
    }
}



function Ocultar1() {
    Input.type = "password";
}


// Modal
var modalBtn = document.querySelector('.modal-btn')
var modalBlur = document.querySelector('.modal-blur')
var modalClose = document.querySelector('.modal-close')
    /*Prueba de ocultar */


modalBtn.addEventListener('click', function() {
    modalBlur.classList.add('blur-active');

})

modalClose.addEventListener('click', function() {
    modalBlur.classList.remove('blur-active')
})

/*Prueba de ocultar*/
function ocultar() {
    document.getElementById('caja').style.visibility = "hidden";
}

// Ocultar cosas del modal

function OcultarItems() {
    document.getElementById('content-input').classList.add('display');
    document.getElementById('h6').classList.add('display');
    document.getElementById('send-button').classList.add('display');

    //  despues de 3sg
    setTimeout("AnimationSend()", 1000);

}


function AnimationSend() {
    document.getElementById('animation-content').style.display = 'block';
    // Img
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('load-img').src = 'img-source-login/EnvioCorreoBlack.gif';
    } else {
        document.getElementById('load-img').src = 'img-source-login/EnvioDeCorreo.gif';
    }

    //  despues de 3sg
    setTimeout("RecoveryPassword()", 6000);
}

function RecoveryPassword() {
    document.getElementById('animation-content').style.display = 'none';
    // Modal Height
    document.getElementById('content-modal').style.height = '659px';


    // Img
    if (localStorage.getItem('theme') == 'true') {
        // Numeros
        document.getElementById('num-1').classList.add('num-dark-pass');
        document.getElementById('h4-1').classList.add('color-dark');
        document.getElementById('descrip-1').classList.add('color-ic5');
        // 
        document.getElementById('line-7').style.stroke = '#A1B9DF';
        // Numeros 2
        document.getElementById('num-2').classList.add('num-dark-pass2');
        document.getElementById('h4-2').classList.add('color-wh');
        document.getElementById('descrip-2').classList.add('color-wh');
    } else {
        // Numeros
        document.getElementById('num-1').classList.add('new-nums');
        document.getElementById('h4-1').classList.add('h4-wh');
        document.getElementById('descrip-1').classList.add('font-info');
        document.getElementById('line-7').style.stroke = '#1550AF';
        document.getElementById('num-2').classList.add('new-nums-2');
        document.getElementById('descrip-2').classList.add('font-bc');
    }

    // Inputs
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('input-label-1').classList.add('color-wh');
        document.getElementById('input-label-2').classList.add('color-wh');
        document.getElementById('input-label-3').classList.add('color-wh');
        // inputs
        document.getElementById('input-pass-1').classList.add('input-dark');
        document.getElementById('show-pass-r1').classList.add('input-dark');
        document.getElementById('show-pass-r2').classList.add('input-dark');

        // Butoon
        document.getElementById('recovery-button').classList.add('button-dark');


    } else {
        document.getElementById('input-label-1').classList.add('color-dark');
        document.getElementById('input-label-2').classList.add('color-dark');
        document.getElementById('input-label-3').classList.add('color-dark');
        // inputs
        document.getElementById('input-pass-1').classList.remove('input-dark');
        document.getElementById('show-pass-r1').classList.remove('input-dark');
        document.getElementById('show-pass-r2').classList.remove('input-dark');
        // Butoon
        document.getElementById('recovery-button').classList.remove('button-dark');
    }

    //Recovery
    document.getElementById('recovery-item').style.display = 'block';
    document.getElementById('item-input-1').style.display = 'block';
    document.getElementById('item-input-2').style.display = 'block';
    document.getElementById('item-input-3').style.display = 'block';
    document.getElementById('recovery-button').style.display = 'block';
}

//Evento del input-password
var ShowPass = document.getElementById('eye-r1');
var ShowPass2 = document.getElementById('eye-r2');
var InputR = document.getElementById('show-pass-r1');
var InputR2 = document.getElementById('show-pass-r2');

ShowPass.addEventListener('click', ShowPassF);
ShowPass2.addEventListener('click', ShowPassF2);

function ShowPassF() {
    // Verificamos el tipo de input
    if (InputR.type == "password") {
        // Cambiamos el tipo de input
        InputR.type = "text";
        // Lo volvemos a ocultar despues de 3sg
        setTimeout("Ocultar()", 1000);
    } else {
        // Lo regresamos al tipo original
        InputR.type = "password";
    }
}

function ShowPassF2() {
    // Verificamos el tipo de input
    if (InputR2.type == "password") {
        // Cambiamos el tipo de input
        InputR2.type = "text";
        // Lo volvemos a ocultar despues de 3sg
        setTimeout("Ocultar()", 1000);
    } else {
        // Lo regresamos al tipo original
        InputR2.type = "password";
    }

}

function Ocultar() {
    InputR.type = "password";
    InputR2.type = "password";
}

// SendRecovery

function SendRecovery() {
    // Button
    document.getElementById('recovery-button').style.display = 'none';
    document.getElementById('recovery-item').style.display = 'none';
    // Animation
    document.getElementById('animation-content').style.display = 'block';
    // Img


    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('load-img').src = 'img-source-login/checkblack.gif';
        // Numeros
        document.getElementById('num-1').classList.add('num-dark-pass');
        document.getElementById('h4-1').classList.add('color-dark');
        document.getElementById('descrip-1').classList.add('color-ic5');
        document.getElementById('line-7').style.stroke = '#A1B9DF';

        // Numeros 2
        document.getElementById('num-2').classList.remove('num-dark-pass2');
        document.getElementById('h4-2').classList.remove('color-wh');
        document.getElementById('descrip-2').classList.remove('color-wh');
        // Numeros 2
        document.getElementById('num-2').classList.add('num-dark-pass');
        document.getElementById('h4-2').classList.add('color-dark');
        document.getElementById('descrip-2').classList.add('color-ic5');

    } else {
        document.getElementById('load-img').src = 'img-source-login/check.gif';
        // Numeros
        document.getElementById('num-1').classList.add('new-nums');
        document.getElementById('h4-1').classList.add('h4-wh');
        document.getElementById('descrip-1').classList.add('font-info');
        document.getElementById('line-7').style.stroke = '#1550AF';
        document.getElementById('num-2').classList.add('new-nums');
        document.getElementById('descrip-2').classList.add('font-info');
    }




    // Modal Height
    document.getElementById('content-modal').style.height = '579px';
    document.getElementById('num-2').classList.add('new-nums-20');
    document.getElementById('h4-2').classList.add('h4-wh');
    document.getElementById('descrip-2').classList.add('font-bc2');

    setTimeout("EndSend()", 6000);
}

function EndSend() {
    modalBlur.classList.remove('blur-active');
    document.getElementById('forget-label').style.display = 'none';
    document.getElementById('notify').style.visibility = 'visible';

}

// Responsive Menu
function mostrarMenuResponsive() {

    if (localStorage.getItem('Responsivedeploy') == 'false') {
        document.getElementById('header-sec-l').style.display = 'flex';
        document.getElementById('header-sec-l').style.transitionDelay = '40s';


        document.getElementById('close-icon').style.display = 'block';

        document.getElementById('menu-icon').style.display = 'none';


        localStorage.setItem('Responsivedeploy', 'true');
    } else {
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
    }

}

function QuitarMenu() {
    document.getElementById('close-icon').style.display = 'none';
    document.getElementById('header-sec-l').style.display = 'none';
    document.getElementById('menu-icon').style.display = 'block';
}

function RemoveNotify() {
    document.getElementById('notify').style.display = 'none';
}