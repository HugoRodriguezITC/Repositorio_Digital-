const switchButton = document.getElementById('switch');
const switchButton2 = document.getElementById('sol');
const PCV_700 = '#102240';
const PCV_500 = '#1B396A';
const PCV_200 = '#A4B0C3';
const WHCV_700 = '#959595';
const WHCV_500 = '#F9F9F9';
const WHCV_200 = ' #FDFDFD';
const BCV_700 = '#0C0F17';
const BCV_500 = '#141927';
const BCV_200 = '#A1A3A9';
const BCV_400 = '#434752';
const WCV_700 = ' #685B04';
const WCV_500 = ' #AD9706';
const WCV_200 = ' #DED59B';
const TCV_700 = '#046531';
const SCV_500 = '#F2B90F';
const TCV_500 = '#06A852';
const DCV_200 = '#D6A1B4';
const DCV_500 = '#991344';
const SUCV_500 = '#1AAC54';
const SUCV_200 = '#A3DEBB';
const ICV_200 = '#A1B9DF';
const ICV_500 = '#1550AF';
// #1550AF


// Moon Event 
switchButton.addEventListener('click', () => {
    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';
    // Activamos el darkmode
    document.body.classList.toggle('dark');


    if (localStorage.getItem('Responsivedeploy') == 'true') {
        document.getElementById('menu').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        // Icons
        document.getElementById('close-icon').style.display = 'none';
        document.getElementById('menu-icon').style.display = 'block';
    }

    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');


        // Header RDI-dark 
        document.getElementById('header-sec-l').classList.add('menu-dark');
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('dark-Lhelp').classList.add('dark-font');
        // User
        document.getElementById('user-dark').style.color = PCV_500;
        document.getElementById('up-dark').style.fill = PCV_500;
        document.getElementById('dowm-dark').style.fill = PCV_500;

        // Menu flotante
        document.getElementById('menu').style.backgroundColor = BCV_400;
        document.getElementById('menu').style.border = '3px solid #F9F9F9';
        document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
        // Menu??s Font
        document.getElementById('dark-wh-1').style.color = WHCV_500;
        document.getElementById('dark-wh-2').style.color = WHCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_200;
        // Menu??s Icon
        document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
        document.getElementById('icon-dark-doc').style.fill = WHCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_200;

        // Section
        document.getElementById('head-dark').classList.add('dark-headline');
        document.getElementById('font-dark').classList.add('dark');

        // Lines
        document.getElementById('line-1').classList.add('lines-select');
        document.getElementById('line-2').classList.add('lines-select');
        document.getElementById('line-3').classList.add('lines-select');
        document.getElementById('line-4').classList.add('lines-select');



        // Steps 
        // Labes
        document.getElementById('label-descrip-1').classList.add('descrip-steps');
        document.getElementById('label-descrip-2').classList.add('descrip-steps');
        document.getElementById('label-descrip-3').classList.add('descrip-steps');
        document.getElementById('label-descrip-4').classList.add('descrip-steps');
        document.getElementById('label-descrip-5').classList.add('descrip-steps');
        document.getElementById('label-descrip-6').classList.add('descrip-steps');
        document.getElementById('label-descrip-7').classList.add('descrip-steps');
        // Cuadros
        document.getElementById('cuadro-descrip-1').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-2').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-3').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-4').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-5').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-6').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-7').classList.add('bg-steps');
        // Numeros
        document.getElementById('num-cuadro-1').classList.add('color-num');
        document.getElementById('num-cuadro-2').classList.add('color-num');
        document.getElementById('num-cuadro-3').classList.add('color-num');
        document.getElementById('num-cuadro-4').classList.add('color-num');
        document.getElementById('num-cuadro-5').classList.add('color-num');
        document.getElementById('num-cuadro-6').classList.add('color-num');
        document.getElementById('num-cuadro-7').classList.add('color-num');
        // Lines
        document.getElementById('line-1').classList.add('lines-select');
        document.getElementById('line-2').classList.add('lines-select');
        document.getElementById('line-3').classList.add('lines-select');
        document.getElementById('line-4').classList.add('lines-select');
        document.getElementById('line-5').classList.add('lines-select');
        document.getElementById('line-6').classList.add('lines-select');



        // Fieldset
        document.getElementById('legend').classList.add('legend-drak');
        document.getElementById('fieldset-dark').classList.add('fieldset-drak');

        // Descripcion
        document.getElementById('descrip').classList.add('bg-ic2');
        document.getElementById('font-descrip-1').classList.add('color-bc');
        document.getElementById('font-descrip-2').classList.add('color-bc');
        document.getElementById('font-descrip-3').classList.add('color-bc');
        document.getElementById('font-descrip-4').classList.add('color-bc');

        // Label and input
        document.getElementById('label-font-1').classList.add('font-wh');


        // Icons Menu
        document.getElementById('icon-menu-dark').classList.add('dark-fill');
        document.getElementById('close-menu-dark').classList.add('dark-fill');

        // buttons
        document.getElementById('back-button').classList.add('border-w');
        // 
        document.getElementById('save-button').classList.add('button-save');
        // 
        document.getElementById('next-button').classList.add('button-next');

        // Chech Dark
        document.getElementById('contente-check').classList.remove('check');
        document.getElementById('contente-check').classList.add('check-dark');
        document.getElementById('LCheck-1').classList.add('font-wh');


        // Footer
        document.getElementById('dark-footer').classList.add('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.add('dark-font');
        document.getElementById('dark-a2').classList.add('dark-font');
        document.getElementById('dark-a3').classList.add('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.add('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = WCV_700;
        document.getElementById('dark-thel').style.fill = TCV_700;


    } else {
        // Header
        document.getElementById('header-sec-l').classList.remove('menu-dark');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');
        // User
        document.getElementById('user-dark').style.color = SCV_500;
        document.getElementById('up-dark').style.fill = SCV_500;
        document.getElementById('dowm-dark').style.fill = SCV_500;

        // Menu flotante
        document.getElementById('menu').style.backgroundColor = WHCV_500;
        document.getElementById('menu').style.border = '3px solid #A4B0C3';
        document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
        // Menu??s Font
        document.getElementById('dark-wh-1').style.color = BCV_500;
        document.getElementById('dark-wh-2').style.color = BCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_500;
        // Menu??s Icon
        document.getElementById('icon-dark-perfil').style.fill = BCV_500;
        document.getElementById('icon-dark-doc').style.fill = BCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_500;

        // Section
        document.getElementById('head-dark').classList.remove('dark-headline');
        document.getElementById('font-dark').classList.remove('dark');

        // Steps 
        // Labes
        document.getElementById('label-descrip-1').classList.remove('descrip-steps');
        document.getElementById('label-descrip-2').classList.remove('descrip-steps');
        document.getElementById('label-descrip-3').classList.remove('descrip-steps');
        document.getElementById('label-descrip-4').classList.remove('descrip-steps');
        document.getElementById('label-descrip-5').classList.remove('descrip-steps');
        document.getElementById('label-descrip-6').classList.remove('descrip-steps');
        document.getElementById('label-descrip-7').classList.remove('descrip-steps');
        // Cuadros
        document.getElementById('cuadro-descrip-1').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-2').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-3').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-4').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-5').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-6').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-7').classList.remove('bg-steps');
        // Numeros
        document.getElementById('num-cuadro-1').classList.remove('color-num');
        document.getElementById('num-cuadro-2').classList.remove('color-num');
        document.getElementById('num-cuadro-3').classList.remove('color-num');
        document.getElementById('num-cuadro-4').classList.remove('color-num');
        document.getElementById('num-cuadro-5').classList.remove('color-num');
        document.getElementById('num-cuadro-6').classList.remove('color-num');
        document.getElementById('num-cuadro-7').classList.remove('color-num');
        // Lines
        document.getElementById('line-1').classList.remove('lines-select');
        document.getElementById('line-2').classList.remove('lines-select');
        document.getElementById('line-3').classList.remove('lines-select');
        document.getElementById('line-4').classList.remove('lines-select');
        document.getElementById('line-5').classList.remove('lines-select');
        document.getElementById('line-6').classList.remove('lines-select');

        // Fieldset
        document.getElementById('legend').classList.remove('legend-drak');
        document.getElementById('fieldset-dark').classList.remove('fieldset-drak');

        // Descripcion
        document.getElementById('descrip').classList.remove('bg-ic2');
        document.getElementById('font-descrip-1').classList.remove('color-bc');
        document.getElementById('font-descrip-2').classList.remove('color-bc');
        document.getElementById('font-descrip-3').classList.remove('color-bc');
        document.getElementById('font-descrip-4').classList.remove('color-bc');

        // Label and input
        document.getElementById('label-font-1').classList.remove('font-wh');
        document.getElementById('label-font-2').classList.remove('font-wh');

        // buttons
        document.getElementById('back-button').classList.remove('border-w');
        // 
        document.getElementById('save-button').classList.remove('button-save');
        // 
        document.getElementById('next-button').classList.remove('button-next');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.remove('dark-fill');
        document.getElementById('close-menu-dark').classList.remove('dark-fill');


        // Footer
        document.getElementById('dark-footer').classList.remove('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');

        // Etiqueeta a
        document.getElementById('dark-a1').classList.remove('dark-font');
        document.getElementById('dark-a2').classList.remove('dark-font');
        document.getElementById('dark-a3').classList.remove('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.remove('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = SCV_500;
        document.getElementById('dark-thel').style.fill = TCV_500;



    }


});




// Sun Event 
switchButton2.addEventListener('click', () => {
    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';
    // Al clic quitamos el darkmode
    document.body.classList.remove('dark');

    if (localStorage.getItem('Responsivedeploy') == 'true') {
        document.getElementById('menu').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        document.getElementById('header-sec-l').style.display = 'none';
        localStorage.setItem('Responsivedeploy', 'false');
        // Icons
        document.getElementById('close-icon').style.display = 'none';
        document.getElementById('menu-icon').style.display = 'block';
    }


    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');

        // Header 
        document.getElementById('header-sec-l').classList.add('menu-dark');
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('dark-Lhelp').classList.add('dark-font');
        // User
        document.getElementById('user-dark').style.color = PCV_500;
        document.getElementById('up-dark').style.fill = PCV_500;
        document.getElementById('dowm-dark').style.fill = PCV_500;

        // Menu flotante
        document.getElementById('menu').style.backgroundColor = BCV_400;
        document.getElementById('menu').style.border = '3px solid #F9F9F9';
        document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
        // Menu??s Font
        document.getElementById('dark-wh-1').style.color = WHCV_500;
        document.getElementById('dark-wh-2').style.color = WHCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_200;
        // Menu??s Icon
        document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
        document.getElementById('icon-dark-doc').style.fill = WHCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_200;

        // Section
        document.getElementById('head-dark').classList.add('dark-headline');
        document.getElementById('font-dark').classList.add('dark');


        // Steps 
        // Labes
        document.getElementById('label-descrip-1').classList.add('descrip-steps');
        document.getElementById('label-descrip-2').classList.add('descrip-steps');
        document.getElementById('label-descrip-3').classList.add('descrip-steps');
        document.getElementById('label-descrip-4').classList.add('descrip-steps');
        document.getElementById('label-descrip-5').classList.add('descrip-steps');
        document.getElementById('label-descrip-6').classList.add('descrip-steps');
        document.getElementById('label-descrip-7').classList.add('descrip-steps');
        // Cuadros
        document.getElementById('cuadro-descrip-1').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-2').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-3').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-4').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-5').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-6').classList.add('bg-steps');
        document.getElementById('cuadro-descrip-7').classList.add('bg-steps');
        // Numeros
        document.getElementById('num-cuadro-1').classList.add('color-num');
        document.getElementById('num-cuadro-2').classList.add('color-num');
        document.getElementById('num-cuadro-3').classList.add('color-num');
        document.getElementById('num-cuadro-4').classList.add('color-num');
        document.getElementById('num-cuadro-5').classList.add('color-num');
        document.getElementById('num-cuadro-6').classList.add('color-num');
        document.getElementById('num-cuadro-7').classList.add('color-num');
        // Lines
        document.getElementById('line-1').classList.add('lines-select');
        document.getElementById('line-2').classList.add('lines-select');
        document.getElementById('line-3').classList.add('lines-select');
        document.getElementById('line-4').classList.add('lines-select');
        document.getElementById('line-5').classList.add('lines-select');
        document.getElementById('line-6').classList.add('lines-select');

        // Fieldset
        document.getElementById('legend').classList.add('legend-drak');
        document.getElementById('fieldset-dark').classList.add('fieldset-drak');

        // Descripcion
        document.getElementById('descrip').classList.add('bg-ic2');
        document.getElementById('font-descrip-1').classList.add('color-bc');
        document.getElementById('font-descrip-2').classList.add('color-bc');
        document.getElementById('font-descrip-3').classList.add('color-bc');
        document.getElementById('font-descrip-4').classList.add('color-bc');

        // Label and input
        document.getElementById('label-font-1').classList.add('font-wh');
        document.getElementById('label-font-2').classList.add('font-wh');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.add('dark-fill');
        document.getElementById('close-menu-dark').classList.add('dark-fill');


        // buttons
        document.getElementById('back-button').classList.add('border-w');
        // 
        document.getElementById('save-button').classList.add('button-save');
        // 
        document.getElementById('next-button').classList.add('button-next');



        // Footer
        document.getElementById('dark-footer').classList.add('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.add('dark-font');
        document.getElementById('dark-a2').classList.add('dark-font');
        document.getElementById('dark-a3').classList.add('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.add('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = WCV_700;
        document.getElementById('dark-thel').style.fill = TCV_700;

    } else {
        // Removemos todas las clases necesarias al click
        localStorage.setItem('theme', 'false');
        // Header
        document.getElementById('header-sec-l').classList.remove('menu-dark');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');
        // User
        document.getElementById('user-dark').style.color = SCV_500;
        document.getElementById('up-dark').style.fill = SCV_500;
        document.getElementById('dowm-dark').style.fill = SCV_500;

        // Menu flotante
        document.getElementById('menu').style.backgroundColor = WHCV_500;
        document.getElementById('menu').style.border = '3px solid #A4B0C3';
        document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
        // Menu??s Font
        document.getElementById('dark-wh-1').style.color = BCV_500;
        document.getElementById('dark-wh-2').style.color = BCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_500;
        // Menu??s Icon
        document.getElementById('icon-dark-perfil').style.fill = BCV_500;
        document.getElementById('icon-dark-doc').style.fill = BCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_500;

        // Section
        document.getElementById('head-dark').classList.remove('dark-headline');
        document.getElementById('font-dark').classList.remove('dark');
        // Steps 
        // Labes
        document.getElementById('label-descrip-1').classList.remove('descrip-steps');
        document.getElementById('label-descrip-2').classList.remove('descrip-steps');
        document.getElementById('label-descrip-3').classList.remove('descrip-steps');
        document.getElementById('label-descrip-4').classList.remove('descrip-steps');
        document.getElementById('label-descrip-5').classList.remove('descrip-steps');
        document.getElementById('label-descrip-6').classList.remove('descrip-steps');
        document.getElementById('label-descrip-7').classList.remove('descrip-steps');
        // Cuadros
        document.getElementById('cuadro-descrip-1').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-2').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-3').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-4').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-5').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-6').classList.remove('bg-steps');
        document.getElementById('cuadro-descrip-7').classList.remove('bg-steps');
        // Numeros
        document.getElementById('num-cuadro-1').classList.remove('color-num');
        document.getElementById('num-cuadro-2').classList.remove('color-num');
        document.getElementById('num-cuadro-3').classList.remove('color-num');
        document.getElementById('num-cuadro-4').classList.remove('color-num');
        document.getElementById('num-cuadro-5').classList.remove('color-num');
        document.getElementById('num-cuadro-6').classList.remove('color-num');
        document.getElementById('num-cuadro-7').classList.remove('color-num');
        // Lines
        document.getElementById('line-1').classList.remove('lines-select');
        document.getElementById('line-2').classList.remove('lines-select');
        document.getElementById('line-3').classList.remove('lines-select');
        document.getElementById('line-4').classList.remove('lines-select');
        document.getElementById('line-5').classList.remove('lines-select');
        document.getElementById('line-6').classList.remove('lines-select');

        // Fieldset
        document.getElementById('legend').classList.remove('legend-drak');
        document.getElementById('fieldset-dark').classList.remove('fieldset-drak');

        // Descripcion
        document.getElementById('descrip').classList.remove('bg-ic2');
        document.getElementById('font-descrip-1').classList.remove('color-bc');
        document.getElementById('font-descrip-2').classList.remove('color-bc');
        document.getElementById('font-descrip-3').classList.remove('color-bc');
        document.getElementById('font-descrip-4').classList.remove('color-bc');

        // Label and input
        document.getElementById('label-font-1').classList.remove('font-wh');

        // buttons
        document.getElementById('back-button').classList.remove('border-w');
        // 
        document.getElementById('save-button').classList.remove('button-save');
        // 
        document.getElementById('next-button').classList.remove('button-next');

        // Icons Menu
        document.getElementById('icon-menu-dark').classList.remove('dark-fill');
        document.getElementById('close-menu-dark').classList.remove('dark-fill');

        // Chech Dark
        document.getElementById('contente-check').classList.remove('check-dark');
        document.getElementById('contente-check').classList.add('check');
        document.getElementById('LCheck-1').classList.remove('font-wh');


        // Footer
        document.getElementById('dark-footer').classList.remove('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.remove('dark-font');
        document.getElementById('dark-a2').classList.remove('dark-font');
        document.getElementById('dark-a3').classList.remove('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.remove('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = SCV_500;
        document.getElementById('dark-thel').style.fill = TCV_500;
    }
});








// Trabajamos el localstorage para que al actualizar no se cambie

if (localStorage.getItem('theme') == 'true') {
    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';
    // Agregamos al cargar valores del localstorage
    document.body.classList.toggle('dark');

    // Header
    document.getElementById('header-sec-l').classList.add('menu-dark');
    document.getElementById('dark-header').classList.add('dark');
    document.getElementById('RDI-dark').classList.add('dark');
    document.getElementById('dark-Lhelp').classList.add('dark-font');
    // User
    document.getElementById('user-dark').style.color = PCV_500;
    document.getElementById('up-dark').style.fill = PCV_500;
    document.getElementById('dowm-dark').style.fill = PCV_500;

    // Menu flotante
    document.getElementById('menu').style.backgroundColor = BCV_400;
    document.getElementById('menu').style.border = '3px solid #F9F9F9';
    document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
    // Menu??s Font
    document.getElementById('dark-wh-1').style.color = WHCV_500;
    document.getElementById('dark-wh-2').style.color = WHCV_500;
    document.getElementById('dark-wh-3').style.color = DCV_200;
    // Menu??s Icon
    document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
    document.getElementById('icon-dark-doc').style.fill = WHCV_500;
    document.getElementById('icon-dark-close').style.fill = DCV_200;

    // Section
    document.getElementById('head-dark').classList.add('dark-headline');
    document.getElementById('font-dark').classList.add('dark');

    // Steps 
    // Labes
    document.getElementById('label-descrip-1').classList.add('descrip-steps');
    document.getElementById('label-descrip-2').classList.add('descrip-steps');
    document.getElementById('label-descrip-3').classList.add('descrip-steps');
    document.getElementById('label-descrip-4').classList.add('descrip-steps');
    document.getElementById('label-descrip-5').classList.add('descrip-steps');
    document.getElementById('label-descrip-6').classList.add('descrip-steps');
    document.getElementById('label-descrip-7').classList.add('descrip-steps');
    // Cuadros
    document.getElementById('cuadro-descrip-1').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-2').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-3').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-4').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-5').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-6').classList.add('bg-steps');
    document.getElementById('cuadro-descrip-7').classList.add('bg-steps');
    // Numeros
    document.getElementById('num-cuadro-1').classList.add('color-num');
    document.getElementById('num-cuadro-2').classList.add('color-num');
    document.getElementById('num-cuadro-3').classList.add('color-num');
    document.getElementById('num-cuadro-4').classList.add('color-num');
    document.getElementById('num-cuadro-5').classList.add('color-num');
    document.getElementById('num-cuadro-6').classList.add('color-num');
    document.getElementById('num-cuadro-7').classList.add('color-num');
    // Lines
    document.getElementById('line-1').classList.add('lines-select');
    document.getElementById('line-2').classList.add('lines-select');
    document.getElementById('line-3').classList.add('lines-select');
    document.getElementById('line-4').classList.add('lines-select');
    document.getElementById('line-5').classList.add('lines-select');
    document.getElementById('line-6').classList.add('lines-select');


    // Fieldset
    document.getElementById('legend').classList.add('legend-drak');
    document.getElementById('fieldset-dark').classList.add('fieldset-drak');

    // Descripcion
    document.getElementById('descrip').classList.add('bg-ic2');
    document.getElementById('font-descrip-1').classList.add('color-bc');
    document.getElementById('font-descrip-2').classList.add('color-bc');
    document.getElementById('font-descrip-3').classList.add('color-bc');
    document.getElementById('font-descrip-4').classList.add('color-bc');

    // Label and input
    document.getElementById('label-font-1').classList.add('font-wh');

    // buttons
    document.getElementById('back-button').classList.add('border-w');
    // 
    document.getElementById('save-button').classList.add('button-save');
    // 
    document.getElementById('next-button').classList.add('button-next');

    // Icons Menu
    document.getElementById('icon-menu-dark').classList.add('dark-fill');
    document.getElementById('close-menu-dark').classList.add('dark-fill');

    // Chech Dark
    document.getElementById('contente-check').classList.remove('check');
    document.getElementById('contente-check').classList.add('check-dark');
    document.getElementById('LCheck-1').classList.add('font-wh');

    // Footer
    document.getElementById('dark-footer').classList.add('dark-background');
    // Icon Footer
    document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
    document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
    document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
    // Etiqueeta a
    document.getElementById('dark-a1').classList.add('dark-font');
    document.getElementById('dark-a2').classList.add('dark-font');
    document.getElementById('dark-a3').classList.add('dark-font');
    // Copy R
    document.getElementById('dark-copy').classList.add('dark-font');
    // Icons Contactenos
    document.getElementById('dark-messa').style.fill = WCV_700;
    document.getElementById('dark-thel').style.fill = TCV_700;
} else {
    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';
    // Quitamos al cargar valores del localstorage
    document.body.classList.remove('dark');


    // Header
    document.getElementById('header-sec-l').classList.remove('menu-dark');
    document.getElementById('dark-header').classList.remove('dark');
    document.getElementById('RDI-dark').classList.remove('dark');
    document.getElementById('dark-Lhelp').classList.remove('dark-font');
    // User
    document.getElementById('user-dark').style.color = SCV_500;
    document.getElementById('up-dark').style.fill = SCV_500;
    document.getElementById('dowm-dark').style.fill = SCV_500;

    // Menu flotante
    document.getElementById('menu').style.backgroundColor = WHCV_500;
    document.getElementById('menu').style.border = '3px solid #A4B0C3';
    document.getElementById('menu').style.boxShadow = '4px 8px 8px 0px rgba(20, 25, 39, 0.5)';
    // Menu??s Font
    document.getElementById('dark-wh-1').style.color = BCV_500;
    document.getElementById('dark-wh-2').style.color = BCV_500;
    document.getElementById('dark-wh-3').style.color = DCV_500;
    // Menu??s Icon
    document.getElementById('icon-dark-perfil').style.fill = BCV_500;
    document.getElementById('icon-dark-doc').style.fill = BCV_500;
    document.getElementById('icon-dark-close').style.fill = DCV_500;

    // Steps 
    // Labes
    document.getElementById('label-descrip-1').classList.remove('descrip-steps');
    document.getElementById('label-descrip-2').classList.remove('descrip-steps');
    document.getElementById('label-descrip-3').classList.remove('descrip-steps');
    document.getElementById('label-descrip-4').classList.remove('descrip-steps');
    document.getElementById('label-descrip-5').classList.remove('descrip-steps');
    document.getElementById('label-descrip-6').classList.remove('descrip-steps');
    document.getElementById('label-descrip-7').classList.remove('descrip-steps');
    // Cuadros
    document.getElementById('cuadro-descrip-1').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-2').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-3').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-4').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-5').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-6').classList.remove('bg-steps');
    document.getElementById('cuadro-descrip-7').classList.remove('bg-steps');
    // Numeros
    document.getElementById('num-cuadro-1').classList.remove('color-num');
    document.getElementById('num-cuadro-2').classList.remove('color-num');
    document.getElementById('num-cuadro-3').classList.remove('color-num');
    document.getElementById('num-cuadro-4').classList.remove('color-num');
    document.getElementById('num-cuadro-5').classList.remove('color-num');
    document.getElementById('num-cuadro-6').classList.remove('color-num');
    document.getElementById('num-cuadro-7').classList.remove('color-num');
    // Lines
    document.getElementById('line-1').classList.remove('lines-select');
    document.getElementById('line-2').classList.remove('lines-select');
    document.getElementById('line-3').classList.remove('lines-select');
    document.getElementById('line-4').classList.remove('lines-select');
    document.getElementById('line-5').classList.remove('lines-select');
    document.getElementById('line-6').classList.remove('lines-select');


    // Fieldset
    document.getElementById('legend').classList.remove('legend-drak');
    document.getElementById('fieldset-dark').classList.remove('fieldset-drak');

    // Descripcion
    document.getElementById('descrip').classList.remove('bg-ic2');
    document.getElementById('font-descrip-1').classList.remove('color-bc');
    document.getElementById('font-descrip-2').classList.remove('color-bc');
    document.getElementById('font-descrip-3').classList.remove('color-bc');
    document.getElementById('font-descrip-4').classList.remove('color-bc');

    // Label and input
    document.getElementById('label-font-1').classList.remove('font-wh');
    document.getElementById('label-font-2').classList.remove('font-wh');

    // buttons
    document.getElementById('back-button').classList.remove('border-w');
    // 
    document.getElementById('save-button').classList.remove('button-save');
    // 
    document.getElementById('next-button').classList.remove('button-next');


    // Icons Menu
    document.getElementById('icon-menu-dark').classList.remove('dark-fill');
    document.getElementById('close-menu-dark').classList.remove('dark-fill');

    // Chech Dark
    document.getElementById('contente-check').classList.remove('check-dark');
    document.getElementById('contente-check').classList.add('check');
    document.getElementById('LCheck-1').classList.remove('font-wh');

    // Footer
    document.getElementById('dark-footer').classList.remove('dark-background');
    // Icon Footer
    document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
    document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
    document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');
    // Etiqueeta a
    document.getElementById('dark-a1').classList.remove('dark-font');
    document.getElementById('dark-a2').classList.remove('dark-font');
    document.getElementById('dark-a3').classList.remove('dark-font');
    // Copy R
    document.getElementById('dark-copy').classList.remove('dark-font');
    // Icons Contactenos
    document.getElementById('dark-messa').style.fill = SCV_500;
    document.getElementById('dark-thel').style.fill = TCV_500;



}