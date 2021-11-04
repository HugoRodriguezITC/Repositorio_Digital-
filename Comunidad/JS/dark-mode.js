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







switchButton.addEventListener('click', () => {


    alert('Aqui paso a dark mode');

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
        document.getElementById('login-dark').classList.add('dark');
        // 
        document.getElementById('dark-Lhelp').classList.add('dark-font');

        // Section
        document.getElementById('dark-headline').classList.add('dark-background');
        document.getElementById('dark-FH').classList.add('dark-font');
        document.getElementById('dark-headline2').classList.add('dark-background');
        document.getElementById('dark-FH2').classList.add('dark-font');


        // organims-dark
        document.getElementById('organims-dark').style.backgroundColor = BCV_400;

        // Slider
        document.getElementById('slider-dark').style.backgroundColor = BCV_200;
        // Cards
        document.getElementById('content-dark').style.backgroundColor = BCV_400;
        document.getElementById('content1-dark').style.backgroundColor = BCV_400;
        document.getElementById('content2-dark').style.backgroundColor = BCV_400;





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




        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('login-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');

        // Section
        document.getElementById('dark-headline').classList.remove('dark-background');
        document.getElementById('dark-FH').classList.remove('dark-font');
        document.getElementById('dark-headline2').classList.remove('dark-background');
        document.getElementById('dark-FH2').classList.remove('dark-font');

        // organims-dark
        document.getElementById('organims-dark').style.backgroundColor = WHCV_500;

        // Slider
        document.getElementById('slider-dark').style.backgroundColor = BCV_500;
        // Cards
        document.getElementById('content-dark').style.backgroundColor = WHCV_500;
        document.getElementById('content1-dark').style.backgroundColor = WHCV_500;
        document.getElementById('content2-dark').style.backgroundColor = WHCV_500;











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





switchButton2.addEventListener('click', () => {

    alert('Aqui quito dark mode');

    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';

    // Al clic quitamos el darkmode
    document.body.classList.remove('dark');



    // alert('no');

    if (document.body.classList.contains('dark')) {

        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');




        // Header 
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('login-dark').classList.add('dark');
        document.getElementById('dark-Lhelp').classList.add('dark-font');
        // Section
        document.getElementById('dark-headline').classList.add('dark-background');
        document.getElementById('dark-FH').classList.add('dark-font');
        document.getElementById('dark-headline2').classList.add('dark-background');
        document.getElementById('dark-FH2').classList.add('dark-font');
        // organims-dark
        document.getElementById('organims-dark').style.backgroundColor = BCV_400;

        // Slider
        document.getElementById('slider-dark').style.backgroundColor = BCV_200;
        // Cards
        document.getElementById('content-dark').style.backgroundColor = BCV_400;
        document.getElementById('content1-dark').style.backgroundColor = BCV_400;
        document.getElementById('content2-dark').style.backgroundColor = BCV_400;







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


        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('login-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');

        // Section
        document.getElementById('dark-headline').classList.remove('dark-background');
        document.getElementById('dark-FH').classList.remove('dark-font');
        document.getElementById('dark-headline2').classList.remove('dark-background');
        document.getElementById('dark-FH2').classList.remove('dark-font');

        // organims-dark
        document.getElementById('organims-dark').style.backgroundColor = WHCV_500;


        // Slider
        document.getElementById('slider-dark').style.backgroundColor = BCV_500;
        // Cards
        document.getElementById('content-dark').style.backgroundColor = WHCV_500;
        document.getElementById('content1-dark').style.backgroundColor = WHCV_500;
        document.getElementById('content2-dark').style.backgroundColor = WHCV_500;






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
    document.getElementById('login-dark').classList.add('dark');
    document.getElementById('dark-Lhelp').classList.add('dark-font');

    // Section
    document.getElementById('dark-headline').classList.add('dark-background');
    document.getElementById('dark-FH').classList.add('dark-font');
    document.getElementById('dark-headline2').classList.add('dark-background');
    document.getElementById('dark-FH2').classList.add('dark-font');

    // organims-dark
    document.getElementById('organims-dark').style.backgroundColor = BCV_400;

    // Slider
    document.getElementById('slider-dark').style.backgroundColor = BCV_200;
    // Cards
    document.getElementById('content-dark').style.backgroundColor = BCV_400;
    document.getElementById('content1-dark').style.backgroundColor = BCV_400;
    document.getElementById('content2-dark').style.backgroundColor = BCV_400;







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






    function BGdark1() {
        document.getElementById('list-item').style.backgroundColor = BCV_400;
        document.getElementById('dark-a').style.color = WHCV_500;
        document.getElementById('icon-dark').style.fill = WHCV_500;
    }

    function BGOriginal1() {
        document.getElementById('list-item').style.backgroundColor = PCV_200;
        document.getElementById('dark-a').style.color = BCV_500;
        document.getElementById('icon-dark').style.fill = BCV_500;
    }

    // 1


    function BGdark2() {
        document.getElementById('list-item1').style.backgroundColor = BCV_400;
        document.getElementById('dark-a1').style.color = WHCV_500;
        document.getElementById('icon1-dark').style.fill = WHCV_500;
    }

    function BGOriginal2() {
        document.getElementById('list-item1').style.backgroundColor = PCV_200;
        document.getElementById('dark-a1').style.color = BCV_500;
        document.getElementById('icon1-dark').style.fill = BCV_500;
    }

    // 2

    function BGdark3() {
        document.getElementById('list-item2').style.backgroundColor = BCV_400;
        document.getElementById('dark-a2').style.color = WHCV_500;
        document.getElementById('icon2-dark').style.fill = WHCV_500;
    }

    function BGOriginal3() {
        document.getElementById('list-item2').style.backgroundColor = PCV_200;
        document.getElementById('dark-a2').style.color = BCV_500;
        document.getElementById('icon2-dark').style.fill = BCV_500;
    }
    // 3
    function BGdark4() {
        document.getElementById('list-item3').style.backgroundColor = BCV_400;
        document.getElementById('dark-a3').style.color = WHCV_500;
        document.getElementById('icon3-dark').style.fill = WHCV_500;
    }

    function BGOriginal4() {
        document.getElementById('list-item3').style.backgroundColor = PCV_200;
        document.getElementById('dark-a3').style.color = BCV_500;
        document.getElementById('icon3-dark').style.fill = BCV_500;
    }



} else {



    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';


    // Quitamos al cargar valores del localstorage
    document.body.classList.remove('dark');



    document.getElementById('dark-header').classList.remove('dark');
    document.getElementById('RDI-dark').classList.remove('dark');
    document.getElementById('login-dark').classList.remove('dark');
    document.getElementById('dark-Lhelp').classList.remove('dark-font');

    // Section
    document.getElementById('dark-headline').classList.remove('dark-background');
    document.getElementById('dark-FH').classList.remove('dark-font');
    document.getElementById('dark-headline2').classList.remove('dark-background');
    document.getElementById('dark-FH2').classList.remove('dark-font');

    // organims-dark
    document.getElementById('organims-dark').style.backgroundColor = WHCV_500;

    // Slider
    document.getElementById('slider-dark').style.backgroundColor = BCV_500;
    // Cards
    document.getElementById('content-dark').style.backgroundColor = WHCV_500;
    document.getElementById('content1-dark').style.backgroundColor = WHCV_500;
    document.getElementById('content2-dark').style.backgroundColor = WHCV_500;










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

    function BGdark1() {
        document.getElementById('list-item').style.backgroundColor = WHCV_500;

    }

    function BGOriginal1() {
        document.getElementById('list-item').style.backgroundColor = PCV_200;
    }
    // 1
    function BGdark2() {
        document.getElementById('list-item1').style.backgroundColor = WHCV_500;

    }

    function BGOriginal2() {
        document.getElementById('list-item1').style.backgroundColor = PCV_200;
    }
    // 2
    function BGdark3() {
        document.getElementById('list-item2').style.backgroundColor = WHCV_500;

    }

    function BGOriginal3() {
        document.getElementById('list-item2').style.backgroundColor = PCV_200;
    }
    // 3
    function BGdark4() {
        document.getElementById('list-item3').style.backgroundColor = WHCV_500;

    }

    function BGOriginal4() {
        document.getElementById('list-item3').style.backgroundColor = PCV_200;
    }

}