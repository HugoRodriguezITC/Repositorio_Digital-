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
const TCV_700 = '#046531';
const SCV_500 = '#F2B90F';
const TCV_500 = '06A852';
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




    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');


        // Header RDI-dark 
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
        // Menu´s Font
        document.getElementById('dark-wh-1').style.color = WHCV_500;
        document.getElementById('dark-wh-2').style.color = WHCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_200;
        // Menu´s Icon
        document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
        document.getElementById('icon-dark-doc').style.fill = WHCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_200;

        // Section
        document.getElementById('head-dark').classList.add('dark-headline');
        document.getElementById('font-dark').classList.add('dark');

        // Create New Button
        document.getElementById('create-new').classList.add('wh-border');

        // Fieldset
        document.getElementById('fieldset').classList.add('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #141927';
        // Descrip
        document.getElementById('descrip').style.backgroundColor = ICV_200;
        document.getElementById('dark-font').style.color = BCV_500;

        // Header List
        document.getElementById('header-dark').style.backgroundColor = SCV_500;
        document.getElementById('font-title1').style.color = BCV_500;
        document.getElementById('font-title2').style.color = BCV_500;
        document.getElementById('font-title3').style.color = BCV_500;

        // Item List
        document.getElementById('item-dark').style.backgroundColor = PCV_200;
        // Button
        document.getElementById('border-wh').classList.add('border-wh-button');


        // Fieldset --------------------------------------->
        document.getElementById('fieldset2').classList.add('fieldset-dark');
        // Legend
        document.getElementById('legend2').style.border = '2px solid #141927';
        // Descrip
        document.getElementById('descrip2').style.backgroundColor = ICV_200;
        document.getElementById('dark-font2').style.color = BCV_500;

        // Header List
        document.getElementById('header-dark2').style.backgroundColor = SCV_500;
        document.getElementById('font-title11').style.color = BCV_500;
        document.getElementById('font-title22').style.color = BCV_500;
        document.getElementById('font-title33').style.color = BCV_500;

        // Item List
        document.getElementById('item-dark2').style.backgroundColor = PCV_200;


        // Boxshaw
        document.getElementById('item-dark').classList.add('bg-boxsaw');
        document.getElementById('item-dark2').classList.add('bg-boxsaw');









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
        // Menu´s Font
        document.getElementById('dark-wh-1').style.color = BCV_500;
        document.getElementById('dark-wh-2').style.color = BCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_500;
        // Menu´s Icon
        document.getElementById('icon-dark-perfil').style.fill = BCV_500;
        document.getElementById('icon-dark-doc').style.fill = BCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_500;

        // Section
        document.getElementById('head-dark').classList.remove('dark-headline');
        document.getElementById('font-dark').classList.remove('dark');

        // Create New Button
        document.getElementById('create-new').classList.remove('wh-border');

        // Fieldset
        document.getElementById('fieldset').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip').style.backgroundColor = ICV_500;
        document.getElementById('dark-font').style.color = WHCV_500;

        // Header List
        document.getElementById('header-dark').style.backgroundColor = PCV_500;
        document.getElementById('font-title1').style.color = WHCV_500;
        document.getElementById('font-title2').style.color = WHCV_500;
        document.getElementById('font-title3').style.color = WHCV_500;
        // Item List
        document.getElementById('item-dark').style.backgroundColor = WHCV_500;
        // Button
        document.getElementById('border-wh').classList.remove('border-wh-button');

        // Fieldset -------------------------------------->
        document.getElementById('fieldset2').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('legend2').style.border = '2px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip2').style.backgroundColor = ICV_500;
        document.getElementById('dark-font2').style.color = WHCV_500;

        // Header List
        document.getElementById('header-dark2').style.backgroundColor = PCV_500;
        document.getElementById('font-title11').style.color = WHCV_500;
        document.getElementById('font-title22').style.color = WHCV_500;
        document.getElementById('font-title33').style.color = WHCV_500;

        // Item List
        document.getElementById('item-dark2').style.backgroundColor = WHCV_500;


        // Boxshaw
        document.getElementById('item-dark').classList.remove('bg-boxsaw');
        document.getElementById('item-dark2').classList.remove('bg-boxsaw');








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


    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');

        // Header 
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
        // Menu´s Font
        document.getElementById('dark-wh-1').style.color = WHCV_500;
        document.getElementById('dark-wh-2').style.color = WHCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_200;
        // Menu´s Icon
        document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
        document.getElementById('icon-dark-doc').style.fill = WHCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_200;

        // Section
        document.getElementById('head-dark').classList.add('dark-headline');
        document.getElementById('font-dark').classList.add('dark');

        // Create New Button
        document.getElementById('create-new').classList.add('wh-border');

        // Fieldset
        document.getElementById('fieldset').classList.add('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #141927';
        // Descrip
        document.getElementById('descrip').style.backgroundColor = ICV_200;
        document.getElementById('dark-font').style.color = BCV_500;


        // Header List
        document.getElementById('header-dark').style.backgroundColor = PCV_500;
        document.getElementById('font-title1').style.color = BCV_500;
        document.getElementById('font-title2').style.color = BCV_500;
        document.getElementById('font-title3').style.color = BCV_500;

        // Item List
        document.getElementById('item-dark').style.backgroundColor = PCV_200;
        // Button
        document.getElementById('border-wh').classList.add('border-wh-button');


        // Fieldset --------------------------------------->
        document.getElementById('fieldset2').classList.add('fieldset-dark');
        // Legend
        document.getElementById('legend2').style.border = '2px solid #141927';
        // Descrip
        document.getElementById('descrip2').style.backgroundColor = ICV_200;
        document.getElementById('dark-font2').style.color = BCV_500;

        // Header List
        document.getElementById('header-dark2').style.backgroundColor = SCV_500;
        document.getElementById('font-title11').style.color = BCV_500;
        document.getElementById('font-title22').style.color = BCV_500;
        document.getElementById('font-title33').style.color = BCV_500;

        // Item List
        document.getElementById('item-dark2').style.backgroundColor = PCV_200;


        // Boxshaw
        document.getElementById('item-dark').classList.add('bg-boxsaw');
        document.getElementById('item-dark2').classList.add('bg-boxsaw');






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
        // Menu´s Font
        document.getElementById('dark-wh-1').style.color = BCV_500;
        document.getElementById('dark-wh-2').style.color = BCV_500;
        document.getElementById('dark-wh-3').style.color = DCV_500;
        // Menu´s Icon
        document.getElementById('icon-dark-perfil').style.fill = BCV_500;
        document.getElementById('icon-dark-doc').style.fill = BCV_500;
        document.getElementById('icon-dark-close').style.fill = DCV_500;

        // Section
        document.getElementById('head-dark').classList.remove('dark-headline');
        document.getElementById('font-dark').classList.remove('dark');

        // Create New Button
        document.getElementById('create-new').classList.remove('wh-border');

        // Fieldset
        document.getElementById('fieldset').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip').style.backgroundColor = ICV_500;
        document.getElementById('dark-font').style.color = WHCV_500;

        // Header List
        document.getElementById('header-dark').style.backgroundColor = PCV_500;
        document.getElementById('font-title1').style.color = WHCV_500;
        document.getElementById('font-title2').style.color = WHCV_500;
        document.getElementById('font-title3').style.color = WHCV_500;

        // Item List
        document.getElementById('item-dark').style.backgroundColor = WHCV_500;
        // Button
        document.getElementById('border-wh').classList.remove('border-wh-button');

        // Fieldset -------------------------------------->
        document.getElementById('fieldset2').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('legend2').style.border = '2px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip2').style.backgroundColor = ICV_500;
        document.getElementById('dark-font2').style.color = WHCV_500;

        // Header List
        document.getElementById('header-dark2').style.backgroundColor = PCV_500;
        document.getElementById('font-title11').style.color = WHCV_500;
        document.getElementById('font-title22').style.color = WHCV_500;
        document.getElementById('font-title33').style.color = WHCV_500;

        // Item List
        document.getElementById('item-dark2').style.backgroundColor = WHCV_500;


        // Boxshaw
        document.getElementById('item-dark').classList.remove('bg-boxsaw');
        document.getElementById('item-dark2').classList.remove('bg-boxsaw');







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
    // Menu´s Font
    document.getElementById('dark-wh-1').style.color = WHCV_500;
    document.getElementById('dark-wh-2').style.color = WHCV_500;
    document.getElementById('dark-wh-3').style.color = DCV_200;
    // Menu´s Icon
    document.getElementById('icon-dark-perfil').style.fill = WHCV_500;
    document.getElementById('icon-dark-doc').style.fill = WHCV_500;
    document.getElementById('icon-dark-close').style.fill = DCV_200;

    // Section
    document.getElementById('head-dark').classList.add('dark-headline');
    document.getElementById('font-dark').classList.add('dark');

    // Create New Button
    document.getElementById('create-new').classList.add('wh-border');

    // Fieldset
    document.getElementById('fieldset').classList.add('fieldset-dark');
    // Legend
    document.getElementById('legend').style.border = '2px solid #141927';
    // Descrip
    document.getElementById('descrip').style.backgroundColor = ICV_200;
    document.getElementById('dark-font').style.color = BCV_500;

    // Header List
    document.getElementById('header-dark').style.backgroundColor = SCV_500;
    document.getElementById('font-title1').style.color = BCV_500;
    document.getElementById('font-title2').style.color = BCV_500;
    document.getElementById('font-title3').style.color = BCV_500;

    // Item List
    document.getElementById('item-dark').style.backgroundColor = PCV_200;
    // Button
    document.getElementById('border-wh').classList.add('border-wh-button');


    // Fieldset --------------------------------------->
    document.getElementById('fieldset2').classList.add('fieldset-dark');
    // Legend
    document.getElementById('legend2').style.border = '2px solid #141927';
    // Descrip
    document.getElementById('descrip2').style.backgroundColor = ICV_200;
    document.getElementById('dark-font2').style.color = BCV_500;

    // Header List
    document.getElementById('header-dark2').style.backgroundColor = SCV_500;
    document.getElementById('font-title11').style.color = BCV_500;
    document.getElementById('font-title22').style.color = BCV_500;
    document.getElementById('font-title33').style.color = BCV_500;

    // Item List
    document.getElementById('item-dark2').style.backgroundColor = PCV_200;

    // Boxshaw
    document.getElementById('item-dark').classList.add('bg-boxsaw');
    document.getElementById('item-dark2').classList.add('bg-boxsaw');










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
    // Menu´s Font
    document.getElementById('dark-wh-1').style.color = BCV_500;
    document.getElementById('dark-wh-2').style.color = BCV_500;
    document.getElementById('dark-wh-3').style.color = DCV_500;
    // Menu´s Icon
    document.getElementById('icon-dark-perfil').style.fill = BCV_500;
    document.getElementById('icon-dark-doc').style.fill = BCV_500;
    document.getElementById('icon-dark-close').style.fill = DCV_500;

    // Create New Button
    document.getElementById('create-new').classList.remove('wh-border2');

    // Fieldset
    document.getElementById('fieldset').classList.remove('fieldset-dark');
    // Legend
    document.getElementById('legend').style.border = '2px solid #F9F9F9';
    // Descrip
    document.getElementById('descrip').style.backgroundColor = ICV_500;
    document.getElementById('dark-font').style.color = WHCV_500;

    // Header List
    document.getElementById('header-dark').style.backgroundColor = PCV_500;
    document.getElementById('font-title1').style.color = WHCV_500;
    document.getElementById('font-title2').style.color = WHCV_500;
    document.getElementById('font-title3').style.color = WHCV_500;

    // Item List
    document.getElementById('item-dark').style.backgroundColor = WHCV_500;
    // Button
    document.getElementById('border-wh').classList.remove('border-wh-button');


    // Fieldset -------------------------------------->
    document.getElementById('fieldset2').classList.remove('fieldset-dark');
    // Legend
    document.getElementById('legend2').style.border = '2px solid #F9F9F9';
    // Descrip
    document.getElementById('descrip2').style.backgroundColor = ICV_500;
    document.getElementById('dark-font2').style.color = WHCV_500;

    // Header List
    document.getElementById('header-dark2').style.backgroundColor = PCV_500;
    document.getElementById('font-title11').style.color = WHCV_500;
    document.getElementById('font-title22').style.color = WHCV_500;
    document.getElementById('font-title33').style.color = WHCV_500;

    // Item List
    document.getElementById('item-dark2').style.backgroundColor = WHCV_500;


    // Boxshaw
    document.getElementById('item-dark').classList.remove('bg-boxsaw');
    document.getElementById('item-dark2').classList.remove('bg-boxsaw');












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