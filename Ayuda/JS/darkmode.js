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
        document.getElementById('login-dark').classList.add('dark');

        // Secction 
        document.getElementById('headline-dark').classList.add('dark-headline');
        document.getElementById('h2-dark').classList.add('dark-h2');
        document.getElementById('help-dark').classList.add('dark-help');
        document.getElementById('h5-dark').classList.add('dark-h5');

        // Questions
        document.getElementById('dark-con-ques').classList.add('dark-question');
        document.getElementById('dark-con-ques2').classList.add('dark-question');
        document.getElementById('dark-con-ques3').classList.add('dark-question');
        document.getElementById('dark-con-ques4').classList.add('dark-question');
        // Questios font
        document.getElementById('font-dark').classList.add('dark-font-wh');
        document.getElementById('font-dark2').classList.add('dark-font-wh');
        document.getElementById('font-dark3').classList.add('dark-font-wh');
        document.getElementById('font-dark4').classList.add('dark-font-wh');
        // Questions icons
        document.getElementById('up-1').style.fill = WHCV_500;
        document.getElementById('down-1').style.fill = WHCV_500;
        document.getElementById('up-2').style.fill = WHCV_500;
        document.getElementById('down-2').style.fill = WHCV_500;
        document.getElementById('up-3').style.fill = WHCV_500;
        document.getElementById('down-3').style.fill = WHCV_500;
        document.getElementById('up-4').style.fill = WHCV_500;
        document.getElementById('down-4').style.fill = WHCV_500;


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

        // Section
        document.getElementById('headline-dark').classList.remove('dark-headline');
        document.getElementById('h2-dark').classList.remove('dark-h2');
        document.getElementById('help-dark').classList.remove('dark-help');
        document.getElementById('h5-dark').classList.remove('dark-h5');

        // Questions
        document.getElementById('dark-con-ques').classList.remove('dark-question');
        document.getElementById('dark-con-ques2').classList.remove('dark-question');
        document.getElementById('dark-con-ques3').classList.remove('dark-question');
        document.getElementById('dark-con-ques4').classList.remove('dark-question');
        // Questios font
        document.getElementById('font-dark').classList.remove('dark-font-wh');
        document.getElementById('font-dark2').classList.remove('dark-font-wh');
        document.getElementById('font-dark3').classList.remove('dark-font-wh');
        document.getElementById('font-dark4').classList.remove('dark-font-wh');
        // Questions icons
        document.getElementById('up-1').style.fill = PCV_500;
        document.getElementById('down-1').style.fill = PCV_500;
        document.getElementById('up-2').style.fill = PCV_500;
        document.getElementById('down-2').style.fill = PCV_500;
        document.getElementById('up-3').style.fill = PCV_500;
        document.getElementById('down-3').style.fill = PCV_500;
        document.getElementById('up-4').style.fill = PCV_500;
        document.getElementById('down-4').style.fill = PCV_500;


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

        // Secction 
        document.getElementById('headline-dark').classList.add('dark-headline');
        document.getElementById('h2-dark').classList.add('dark-h2');
        document.getElementById('help-dark').classList.add('dark-help');
        document.getElementById('h5-dark').classList.add('dark-h5');

        // Questions
        document.getElementById('dark-con-ques').classList.add('dark-question');
        document.getElementById('dark-con-ques2').classList.add('dark-question');
        document.getElementById('dark-con-ques3').classList.add('dark-question');
        document.getElementById('dark-con-ques4').classList.add('dark-question');
        // Questios font
        document.getElementById('font-dark').classList.add('dark-font-wh');
        document.getElementById('font-dark2').classList.add('dark-font-wh');
        document.getElementById('font-dark3').classList.add('dark-font-wh');
        document.getElementById('font-dark4').classList.add('dark-font-wh');
        // Questions icons
        document.getElementById('up-1').style.fill = WHCV_500;
        document.getElementById('down-1').style.fill = WHCV_500;
        document.getElementById('up-2').style.fill = WHCV_500;
        document.getElementById('down-2').style.fill = WHCV_500;
        document.getElementById('up-3').style.fill = WHCV_500;
        document.getElementById('down-3').style.fill = WHCV_500;
        document.getElementById('up-4').style.fill = WHCV_500;
        document.getElementById('down-4').style.fill = WHCV_500;

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


        // Secction 
        document.getElementById('headline-dark').classList.remove('dark-headline');
        document.getElementById('h2-dark').classList.remove('dark-h2');
        document.getElementById('help-dark').classList.remove('dark-help');
        document.getElementById('h5-dark').classList.remove('dark-h5');

        // Questions
        document.getElementById('dark-con-ques').classList.remove('dark-question');
        document.getElementById('dark-con-ques2').classList.remove('dark-question');
        document.getElementById('dark-con-ques3').classList.remove('dark-question');
        document.getElementById('dark-con-ques4').classList.remove('dark-question');
        // Questios font
        document.getElementById('font-dark').classList.remove('dark-font-wh');
        document.getElementById('font-dark2').classList.remove('dark-font-wh');
        document.getElementById('font-dark3').classList.remove('dark-font-wh');
        document.getElementById('font-dark4').classList.remove('dark-font-wh');
        // Questions icons
        document.getElementById('up-1').style.fill = PCV_500;
        document.getElementById('down-1').style.fill = PCV_500;
        document.getElementById('up-2').style.fill = PCV_500;
        document.getElementById('down-2').style.fill = PCV_500;
        document.getElementById('up-3').style.fill = PCV_500;
        document.getElementById('down-3').style.fill = PCV_500;
        document.getElementById('up-4').style.fill = PCV_500;
        document.getElementById('down-4').style.fill = PCV_500;

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

    // Secction 
    document.getElementById('headline-dark').classList.add('dark-headline');
    document.getElementById('h2-dark').classList.add('dark-h2');
    document.getElementById('help-dark').classList.add('dark-help');
    document.getElementById('h5-dark').classList.add('dark-h5');

    // Questions
    document.getElementById('dark-con-ques').classList.add('dark-question');
    document.getElementById('dark-con-ques2').classList.add('dark-question');
    document.getElementById('dark-con-ques3').classList.add('dark-question');
    document.getElementById('dark-con-ques4').classList.add('dark-question');
    // Questios font
    document.getElementById('font-dark').classList.add('dark-font-wh');
    document.getElementById('font-dark2').classList.add('dark-font-wh');
    document.getElementById('font-dark3').classList.add('dark-font-wh');
    document.getElementById('font-dark4').classList.add('dark-font-wh');
    // Questions icons
    document.getElementById('up-1').style.fill = WHCV_500;
    document.getElementById('down-1').style.fill = WHCV_500;
    document.getElementById('up-2').style.fill = WHCV_500;
    document.getElementById('down-2').style.fill = WHCV_500;
    document.getElementById('up-3').style.fill = WHCV_500;
    document.getElementById('down-3').style.fill = WHCV_500;
    document.getElementById('up-4').style.fill = WHCV_500;
    document.getElementById('down-4').style.fill = WHCV_500;

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
    document.getElementById('login-dark').classList.remove('dark');

    // Secction 
    document.getElementById('headline-dark').classList.remove('dark-headline');
    document.getElementById('h2-dark').classList.remove('dark-h2');
    document.getElementById('help-dark').classList.remove('dark-help');
    document.getElementById('h5-dark').classList.remove('dark-h5');

    // Questions
    document.getElementById('dark-con-ques').classList.remove('dark-question');
    document.getElementById('dark-con-ques2').classList.remove('dark-question');
    document.getElementById('dark-con-ques3').classList.remove('dark-question');
    document.getElementById('dark-con-ques4').classList.remove('dark-question');
    // Questios font
    document.getElementById('font-dark').classList.remove('dark-font-wh');
    document.getElementById('font-dark2').classList.remove('dark-font-wh');
    document.getElementById('font-dark3').classList.remove('dark-font-wh');
    document.getElementById('font-dark4').classList.remove('dark-font-wh');
    // Questions icons
    document.getElementById('up-1').style.fill = PCV_500;
    document.getElementById('down-2').style.fill = PCV_500;
    document.getElementById('up-2').style.fill = PCV_500;
    document.getElementById('down-2').style.fill = PCV_500;
    document.getElementById('up-3').style.fill = PCV_500;
    document.getElementById('down-3').style.fill = PCV_500;
    document.getElementById('up-4').style.fill = PCV_500;
    document.getElementById('down-4').style.fill = PCV_500;

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