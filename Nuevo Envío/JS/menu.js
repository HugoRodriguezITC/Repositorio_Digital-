localStorage.setItem('deploy', 'false');

function mostrarMenu() {

    if (localStorage.getItem('deploy') == 'false') {
        document.getElementById('menu').style.display = 'block';
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