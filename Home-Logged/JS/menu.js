function mostrarMenu() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('menu').style.transitionDelay = '40s';

    document.getElementById('abajo').style.display = 'none';
    document.getElementById('up').style.display = 'block';
}


function ocultarMenu() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('abajo').style.display = 'block';
    document.getElementById('up').style.display = 'none';
}