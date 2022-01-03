function HoverFlechas() {
    document.getElementById('hover-left').style.visibility = 'visible';
    document.getElementById('hover-right').style.visibility = 'visible';
}




// Hover



function FillColor2() {
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('icon-organim-2').style.fill = '#F9F9F9';
        document.getElementById('word-list-2').style.color = '#F9F9F9';
    }
}

function RemoveColor2() {
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('icon-organim-2').style.fill = '#141927';
        document.getElementById('word-list-2').style.color = '#141927';
    }
}

function FillColor3() {
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('icon-organim-3').style.fill = '#F9F9F9';
        document.getElementById('word-list-3').style.color = '#F9F9F9';
    }
}

function RemoveColor3() {
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('icon-organim-3').style.fill = '#141927';
        document.getElementById('word-list-3').style.color = '#141927';
    }
}

function FillColor4() {
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('icon-organim-4').style.fill = '#F9F9F9';
        document.getElementById('word-list-4').style.color = '#F9F9F9';
    }
}

function RemoveColor4() {
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('icon-organim-4').style.fill = '#141927';
        document.getElementById('word-list-4').style.color = '#141927';
    }
}

function FillColor5() {
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('icon-organim-5').style.fill = '#F9F9F9';
        document.getElementById('word-list-5').style.color = '#F9F9F9';
    }
}

function RemoveColor5() {
    if (localStorage.getItem('theme') == 'true') {
        document.getElementById('word-list-5').style.color = '#141927';
        document.getElementById('icon-organim-5').style.fill = '#141927';
    }
}

function MoveMouse() {
    document.getElementById('hover-left').style.visibility = 'hidden';
    document.getElementById('hover-right').style.visibility = 'hidden';
}


// Responsive

function mostrarMenuResponsive() {

    if (localStorage.getItem('Responsivedeploy') == 'false') {
        document.getElementById('header-sec-l').style.display = 'flex';
        document.getElementById('header-sec-l').style.transitionDelay = '40s';


        document.getElementById('close-icon').style.display = 'block';

        document.getElementById('menu-icon').style.display = 'none';


        localStorage.setItem('Responsivedeploy', 'true');
    } else {
        localStorage.setItem('Responsivedeploy', 'false');
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
    }

}

function QuitarMenu() {
    document.getElementById('close-icon').style.display = 'none';
    document.getElementById('header-sec-l').style.display = 'none';
    document.getElementById('menu-icon').style.display = 'block';
}

// Scroll

function OnScroll() {
    document.getElementById('data').classList.add('scroll');
}

function OffScroll() {
    document.getElementById('data').classList.remove('scroll');
}