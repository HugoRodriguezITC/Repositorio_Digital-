flag1 = localStorage.setItem("ques1", 0);
flag2 = localStorage.setItem("ques2", 0);
flag3 = localStorage.setItem("ques3", 0);
flag4 = localStorage.setItem("ques4", 0);

function Respuesta1() {
    if (localStorage.getItem('ques1') == 0) {


        // Mostramos y ocultamos icons
        document.getElementById('down-1').classList.add('none-icon');
        document.getElementById('up-1').classList.remove('none-icon');


        // Contenedor Respuesta
        document.getElementById('respuesta1').style.display = "block";
        document.getElementById('respuesta2').style.display = "none";
        document.getElementById('respuesta3').style.display = "none";
        document.getElementById('respuesta4').style.display = "none";
        // Abanderamiento
        flag2 = localStorage.setItem("ques2", 0);
        flag2 = localStorage.setItem("ques2", 0);
        flag2 = localStorage.setItem("ques4", 0);

        // Donw All Icon
        document.getElementById('down-2').classList.remove('none-icon');
        document.getElementById('up-2').classList.add('none-icon');
        document.getElementById('down-3').classList.remove('none-icon');
        document.getElementById('up-3').classList.add('none-icon');
        document.getElementById('down-4').classList.remove('none-icon');
        document.getElementById('up-4').classList.add('none-icon');


        // Abanderamiento
        flag1 = localStorage.setItem("ques1", 1);

        // Agrandamos el contenedor
        document.getElementById('content-preguntas').style.height = "444px";
    } else {
        // Reducimos el contenedor 
        document.getElementById('content-preguntas').style.height = "244px";

        // Show And Drop Icon
        document.getElementById('up-1').classList.add('none-icon');
        document.getElementById('down-1').classList.remove('none-icon');


        // Contenedor Respuesta
        document.getElementById('respuesta1').style.display = "none";

        // Abanderamiento
        flag1 = localStorage.setItem("ques1", 0);
    }

}


function Respuesta2() {
    if (localStorage.getItem('ques2') == 0) {
        // Abanderamiento
        flag2 = localStorage.setItem("ques2", 1);

        // Mostramos y ocultamos icons
        document.getElementById('down-2').classList.add('none-icon');
        document.getElementById('up-2').classList.remove('none-icon');

        // Contenedor Respuesta
        document.getElementById('respuesta2').style.display = "block";
        document.getElementById('respuesta1').style.display = "none";
        document.getElementById('respuesta3').style.display = "none";
        document.getElementById('respuesta4').style.display = "none";
        // Abanderamiento
        flag2 = localStorage.setItem("ques1", 0);
        flag2 = localStorage.setItem("ques3", 0);
        flag2 = localStorage.setItem("ques4", 0);

        // Donw All Icon
        document.getElementById('down-1').classList.remove('none-icon');
        document.getElementById('up-1').classList.add('none-icon');
        document.getElementById('down-3').classList.remove('none-icon');
        document.getElementById('up-3').classList.add('none-icon');
        document.getElementById('down-4').classList.remove('none-icon');
        document.getElementById('up-4').classList.add('none-icon');



        // Agrandamos el contenedor
        document.getElementById('content-preguntas').style.height = "444px";
    } else {
        // Abanderamiento
        flag2 = localStorage.setItem("ques2", 0);

        // Reducimos el contenedor 
        document.getElementById('content-preguntas').style.height = "244px";

        // Show And Drop Icon
        document.getElementById('up-2').classList.add('none-icon');
        document.getElementById('down-2').classList.remove('none-icon');

        // Ocultamos respuesta
        document.getElementById('respuesta2').style.display = "none";
    }

}

function Respuesta3() {
    if (localStorage.getItem('ques3') == 0) {


        // Mostramos y ocultamos icons
        document.getElementById('down-3').classList.add('none-icon');
        document.getElementById('up-3').classList.remove('none-icon');

        // Contenedor Respuesta
        document.getElementById('respuesta3').style.display = "block";
        document.getElementById('respuesta1').style.display = "none";
        document.getElementById('respuesta2').style.display = "none";
        document.getElementById('respuesta4').style.display = "none";
        // Abanderamiento
        flag2 = localStorage.setItem("ques2", 0);
        flag2 = localStorage.setItem("ques1", 0);
        flag2 = localStorage.setItem("ques4", 0);

        // Donw All Icon
        document.getElementById('down-1').classList.remove('none-icon');
        document.getElementById('up-1').classList.add('none-icon');
        document.getElementById('down-2').classList.remove('none-icon');
        document.getElementById('up-2').classList.add('none-icon');
        document.getElementById('down-4').classList.remove('none-icon');
        document.getElementById('up-4').classList.add('none-icon');

        // Abanderamiento
        flag3 = localStorage.setItem("ques3", 1);

        // Agrandamos el contenedor
        document.getElementById('content-preguntas').style.height = "444px";
    } else {
        // Reducimos el contenedor 
        document.getElementById('content-preguntas').style.height = "244px";

        // Show And Drop Icon
        document.getElementById('up-3').classList.add('none-icon');
        document.getElementById('down-3').classList.remove('none-icon');

        // Ocultamos respuesta
        document.getElementById('respuesta3').style.display = "none";

        // Abanderamiento
        flag3 = localStorage.setItem("ques3", 0);
    }

}

function Respuesta4() {
    if (localStorage.getItem('ques4') == 0) {


        // Mostramos y ocultamos icons
        document.getElementById('down-4').classList.add('none-icon');
        document.getElementById('up-4').classList.remove('none-icon');

        // Contenedor Respuesta
        document.getElementById('respuesta4').style.display = "block";
        document.getElementById('respuesta1').style.display = "none";
        document.getElementById('respuesta2').style.display = "none";
        document.getElementById('respuesta3').style.display = "none";
        // Abanderamiento
        flag2 = localStorage.setItem("ques2", 0);
        flag2 = localStorage.setItem("ques3", 0);
        flag2 = localStorage.setItem("ques1", 0);

        // Donw All Icon
        document.getElementById('down-2').classList.remove('none-icon');
        document.getElementById('up-2').classList.add('none-icon');
        document.getElementById('down-3').classList.remove('none-icon');
        document.getElementById('up-3').classList.add('none-icon');
        document.getElementById('down-1').classList.remove('none-icon');
        document.getElementById('up-1').classList.add('none-icon');

        // Abanderamiento
        flag4 = localStorage.setItem("ques4", 1);
        // Agrandamos el contenedor
        document.getElementById('content-preguntas').style.height = "444px";
    } else {
        // Reducimos el contenedor 
        document.getElementById('content-preguntas').style.height = "244px";

        // Show And Drop Icon
        document.getElementById('up-4').classList.add('none-icon');
        document.getElementById('down-4').classList.remove('none-icon');

        // Ocultamos respuesta
        document.getElementById('respuesta4').style.display = "none";

        // Abanderamiento
        flag4 = localStorage.setItem("ques4", 0);
    }
}