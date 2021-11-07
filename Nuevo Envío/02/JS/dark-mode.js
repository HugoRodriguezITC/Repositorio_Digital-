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


        // Steps
        // Posición Actual
        document.getElementById('number-1').style.color = WHCV_500;
        // No Seleccionados Numbers
        document.getElementById('number-2').style.color = BCV_500;
        document.getElementById('number-3').style.color = BCV_500;
        document.getElementById('number-4').style.color = BCV_500;
        document.getElementById('number-5').style.color = BCV_500;
        document.getElementById('number-6').style.color = BCV_500;
        document.getElementById('number-7').style.color = BCV_500;
        // Cuadros Not Select
        document.getElementById('cuadro-1').style.border = '3px solid #A1B9DF';
        document.getElementById('cuadro-2').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-3').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-4').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-5').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-6').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-7').style.border = '3px solid #F9F9F9';
        // Cuadros Not Select BG
        document.getElementById('cuadro-2').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-3').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-4').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-5').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-6').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-7').style.backgroundColor = BCV_200;
        // Font Descrip
        document.getElementById('font-desc-1').style.color = WHCV_500;
        document.getElementById('font-desc-2').style.color = WHCV_700;
        document.getElementById('font-desc-3').style.color = WHCV_700;
        document.getElementById('font-desc-4').style.color = WHCV_700;
        document.getElementById('font-desc-5').style.color = WHCV_700;
        document.getElementById('font-desc-6').style.color = WHCV_700;
        document.getElementById('font-desc-7').style.color = WHCV_700;


        // Fieldset
        document.getElementById('fieldset').classList.add('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #141927';



        // Authors
        document.getElementById('title-section-1').style.color = WHCV_500;
        // Labels
        document.getElementById('label-input-1').style.color = WHCV_500;
        document.getElementById('label-input-2').style.color = WHCV_500;
        // Inputs
        // Buttons
        document.getElementById('add-1').style.fill = SUCV_200;
        document.getElementById('dark-names').style.backgroundColor = BCV_400;
        document.getElementById('dark-names').style.color = WHCV_500;
        document.getElementById('dark-names').style.border = '1px solid #F9F9F9';
        document.getElementById('dark-lastname').style.color = WHCV_500;
        document.getElementById('dark-lastname').style.backgroundColor = BCV_400;
        document.getElementById('dark-lastname').style.border = '1px solid #F9F9F9';
        // List
        document.getElementById('list-label-1').style.color = WHCV_500;
        document.getElementById('list-label-2').style.color = WHCV_500;
        document.getElementById('list-label-3').style.color = WHCV_500;

        // Button 
        document.getElementById('remove-button-dark').classList.add('remove-button-dark');





        // ==============================================================>
        // Title 
        document.getElementById('title-section-2').style.color = WHCV_500;
        // Labels
        document.getElementById('label-input-3').style.color = WHCV_500;
        document.getElementById('label-input-4').style.color = WHCV_500;
        document.getElementById('label-input-5').style.color = WHCV_500;
        document.getElementById('label-input-6').style.color = WHCV_500;
        document.getElementById('label-input-7').style.color = WHCV_500;
        document.getElementById('label-input-8').style.color = WHCV_500;
        // Inputs
        document.getElementById('dark-input-1').style.backgroundColor = BCV_400;
        document.getElementById('dark-input-1').style.color = WHCV_500;
        document.getElementById('dark-input-1').style.border = '1px solid #F9F9F9';
        document.getElementById('dark-input-2').style.color = WHCV_500;
        document.getElementById('dark-input-2').style.backgroundColor = BCV_400;
        document.getElementById('dark-input-2').style.border = '1px solid #F9F9F9';
        // Inputs
        // Buttons
        document.getElementById('add-2').style.fill = SUCV_200;
        // Button 
        document.getElementById('remove-button-dark1').classList.add('remove-button-dark');

        // ============================================================>

        // Date Action
        document.getElementById('item-date-1').style.color = WHCV_500;
        document.getElementById('item-date-2').style.color = WHCV_500;
        document.getElementById('item-date-3').style.color = WHCV_500;
        document.getElementById('item-date-4').style.color = WHCV_500;
        // Inputs Box
        document.getElementById('box-dark-1').style.backgroundColor = BCV_400;
        document.getElementById('box-dark-2').style.backgroundColor = BCV_400;
        document.getElementById('box-dark-3').style.backgroundColor = BCV_400;
        // Inputs Box
        document.getElementById('box-dark-1').style.color = WHCV_500;
        document.getElementById('box-dark-2').style.color = WHCV_500;
        document.getElementById('box-dark-3').style.color = WHCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-1').style.border = '1px solid #F9F9F9';
        document.getElementById('box-dark-2').style.border = '1px solid #F9F9F9';
        document.getElementById('box-dark-3').style.border = '1px solid #F9F9F9';

        // ===========================================================>
        // Labels
        document.getElementById('label-editor').style.color = WHCV_500;
        document.getElementById('label-citacion').style.color = WHCV_500;
        // Inputs Box
        document.getElementById('box-dark-4').style.backgroundColor = BCV_400;
        document.getElementById('box-dark-5').style.backgroundColor = BCV_400;
        // Inputs Box
        document.getElementById('box-dark-4').style.color = WHCV_500;
        document.getElementById('box-dark-5').style.color = WHCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-4').style.border = '1px solid #F9F9F9';
        document.getElementById('box-dark-5').style.border = '1px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip-dark-1').style.color = ICV_200;
        document.getElementById('descrip-dark-2').style.color = ICV_200;

        // ===========================================================>
        // Label Series
        document.getElementById('label-series').style.color = WHCV_500;
        document.getElementById('descrip-1').style.backgroundColor = ICV_200;
        document.getElementById('descrip-dark').style.color = BCV_500;
        // Labels Inputs
        document.getElementById('label-dark-1').style.color = WHCV_500;
        document.getElementById('label-dark-2').style.color = WHCV_500;
        // Input 1
        document.getElementById('input1-dark-series').style.backgroundColor = BCV_400;
        document.getElementById('input1-dark-series').style.color = WHCV_500;
        document.getElementById('input1-dark-series').style.border = '1px solid #F9F9F9';
        // Input 2
        document.getElementById('input2-dark-series').style.backgroundColor = BCV_400;
        document.getElementById('input2-dark-series').style.color = WHCV_500;
        document.getElementById('input2-dark-series').style.border = '1px solid #F9F9F9';
        // Button Series
        document.getElementById('add-series').style.fill = SUCV_200;
        // Labels check
        document.getElementById('label-1-series').style.color = WHCV_500;
        document.getElementById('label-2-series').style.color = WHCV_500;
        document.getElementById('label-3-series').style.color = WHCV_500;
        // Button
        document.getElementById('remove-button-dark-2').classList.add('remove-button-dark2');
        // ======================================================================>
        // Label Series Identificadores
        document.getElementById('label-identifi').style.color = WHCV_500;
        document.getElementById('descrip-2').style.backgroundColor = ICV_200;
        document.getElementById('identifi-dark').style.color = BCV_500;
        // Input 1               
        document.getElementById('input1-dark-identifi').style.backgroundColor = BCV_400;
        document.getElementById('input1-dark-identifi').style.color = WHCV_500;
        document.getElementById('input1-dark-identifi').style.border = '1px solid #F9F9F9';
        // Input 2
        document.getElementById('input2-dark-identifi').style.backgroundColor = BCV_400;
        document.getElementById('input2-dark-identifi').style.color = WHCV_500;
        document.getElementById('input2-dark-identifi').style.border = '1px solid #F9F9F9';
        // Button Identifi
        document.getElementById('add-identifi').style.fill = SUCV_200;
        // Labels check
        document.getElementById('label-1-identifi').style.color = WHCV_500;
        document.getElementById('label-2-identifi').style.color = WHCV_500;
        document.getElementById('label-3-identifi').style.color = WHCV_500;
        // Button
        document.getElementById('remove-button-dark-3').classList.add('remove-button-dark2');


        // ======================================================================>
        // Label Series Tipos
        document.getElementById('label-type').style.color = WHCV_500;
        document.getElementById('label-type-2').style.color = WHCV_500;

        // Input 1               
        document.getElementById('input1-dark-type').style.backgroundColor = BCV_400;
        document.getElementById('input1-dark-type').style.color = WHCV_500;
        document.getElementById('input1-dark-type').style.border = '1px solid #F9F9F9';
        // Button Identifi
        document.getElementById('add-type').style.fill = SUCV_200;
        // Labels check
        document.getElementById('label-1-type').style.color = WHCV_500;
        document.getElementById('label-2-type').style.color = WHCV_500;
        document.getElementById('label-3-type').style.color = WHCV_500;
        // Button
        document.getElementById('remove-button-dark-4').classList.add('remove-button-dark2');
        // ======================================================================>
        // Label Lenguaje
        document.getElementById('label-lenguajes').style.color = WHCV_500;
        document.getElementById('descrip-3').style.backgroundColor = ICV_200;
        document.getElementById('lenguaje-dark').style.color = BCV_500;
        // Input 1               
        document.getElementById('input1-dark-lenguaje').style.backgroundColor = BCV_400;
        document.getElementById('input1-dark-lenguaje').style.color = WHCV_500;
        document.getElementById('input1-dark-lenguaje').style.border = '1px solid #F9F9F9';
        // ======================================================================>
        // Buttons
        document.getElementById('cancel-button').classList.add('cancel-button-dark');
        document.getElementById('next-button').classList.add('next-button-dark');







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



        // Steps
        // Posición Actual
        document.getElementById('number-1').style.color = BCV_500;
        // No Seleccionados Numbers
        document.getElementById('number-2').style.color = BCV_500;
        document.getElementById('number-3').style.color = BCV_500;
        document.getElementById('number-4').style.color = BCV_500;
        document.getElementById('number-5').style.color = BCV_500;
        document.getElementById('number-6').style.color = BCV_500;
        document.getElementById('number-7').style.color = BCV_500;
        // Cuadros Not Select
        document.getElementById('cuadro-1').style.border = '3px solid #1550AF';
        document.getElementById('cuadro-2').style.border = '3px solid #141927';
        document.getElementById('cuadro-3').style.border = '3px solid #141927';
        document.getElementById('cuadro-4').style.border = '3px solid #141927';
        document.getElementById('cuadro-5').style.border = '3px solid #141927';
        document.getElementById('cuadro-6').style.border = '3px solid #141927';
        document.getElementById('cuadro-7').style.border = '3px solid #141927';
        // Cuadros Not Select BG
        document.getElementById('cuadro-2').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-3').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-4').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-5').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-6').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-7').style.backgroundColor = ICV_200;
        // Font Descrip
        document.getElementById('font-desc-1').style.color = BCV_500;
        document.getElementById('font-desc-2').style.color = ICV_200;
        document.getElementById('font-desc-3').style.color = ICV_200;
        document.getElementById('font-desc-4').style.color = ICV_200;
        document.getElementById('font-desc-5').style.color = ICV_200;
        document.getElementById('font-desc-6').style.color = ICV_200;
        document.getElementById('font-desc-7').style.color = ICV_200;



        // Fieldset
        document.getElementById('fieldset').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #F9F9F9';


        // Authors
        document.getElementById('title-section-1').style.color = BCV_500;
        // Labels
        document.getElementById('label-input-1').style.color = BCV_500;
        document.getElementById('label-input-2').style.color = BCV_500;
        // Inputs
        // Buttons
        document.getElementById('add-1').style.fill = SUCV_500;
        document.getElementById('dark-names').style.backgroundColor = WHCV_500;
        document.getElementById('dark-names').style.color = BCV_500;
        document.getElementById('dark-names').style.border = '1px solid #1B396A';
        document.getElementById('dark-lastname').style.color = BCV_500;
        document.getElementById('dark-lastname').style.backgroundColor = WHCV_500;
        document.getElementById('dark-lastname').style.border = '1px solid #1B396A';
        // List
        document.getElementById('list-label-1').style.color = BCV_500;
        document.getElementById('list-label-2').style.color = BCV_500;
        document.getElementById('list-label-3').style.color = BCV_500;

        // Button 
        document.getElementById('remove-button-dark').classList.remove('remove-button-dark');

        // ==============================================================>
        // Title 
        document.getElementById('title-section-2').style.color = BCV_500;
        // Labels
        document.getElementById('label-input-3').style.color = BCV_500;
        document.getElementById('label-input-4').style.color = BCV_500;
        document.getElementById('label-input-5').style.color = BCV_500;
        document.getElementById('label-input-6').style.color = BCV_500;
        document.getElementById('label-input-7').style.color = BCV_500;
        document.getElementById('label-input-8').style.color = BCV_500;
        // Inputs
        document.getElementById('dark-input-1').style.backgroundColor = WHCV_400;
        document.getElementById('dark-input-1').style.color = BCV_500;
        document.getElementById('dark-input-1').style.border = '1px solid #1B396A';
        // border: 1px solid rgba(27, 57, 106, 1)
        document.getElementById('dark-input-2').style.color = BCV_500;
        document.getElementById('dark-input-2').style.backgroundColor = WHCV_400;
        document.getElementById('dark-input-2').style.border = '1px solid #1B396A';
        // Buttons
        document.getElementById('add-2').style.fill = SUCV_500;
        // Button 
        document.getElementById('remove-button-dark1').classList.remove('remove-button-dark');


        // ============================================================>

        // Date Action
        document.getElementById('item-date-1').style.color = BCV_500;
        document.getElementById('item-date-2').style.color = BCV_500;
        document.getElementById('item-date-3').style.color = BCV_500;
        document.getElementById('item-date-4').style.color = BCV_500;
        // Inputs Box
        document.getElementById('box-dark-1').style.backgroundColor = WHCV_500;
        document.getElementById('box-dark-2').style.backgroundColor = WHCV_500;
        document.getElementById('box-dark-3').style.backgroundColor = WHCV_500;
        // Inputs Box
        document.getElementById('box-dark-1').style.color = BCV_500;
        document.getElementById('box-dark-2').style.color = BCV_500;
        document.getElementById('box-dark-3').style.color = BCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-1').style.border = '1px solid #1B396A';
        document.getElementById('box-dark-2').style.border = '1px solid #1B396A';
        document.getElementById('box-dark-3').style.border = '1px solid #1B396A';


        // ===========================================================>
        // Labels
        document.getElementById('label-editor').style.color = BCV_500;
        document.getElementById('label-citacion').style.color = BCV_500;
        // Inputs Box
        document.getElementById('box-dark-4').style.backgroundColor = WHCV_400;
        document.getElementById('box-dark-5').style.backgroundColor = WHCV_400;
        // Inputs Box
        document.getElementById('box-dark-4').style.color = BCV_500;
        document.getElementById('box-dark-5').style.color = BCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-4').style.border = '1px solid #1B396A';
        document.getElementById('box-dark-5').style.border = '1px solid #1B396A';
        // Descrip
        document.getElementById('descrip-dark-1').style.color = ICV_500;
        document.getElementById('descrip-dark-2').style.color = ICV_500;

        // ===========================================================>
        // Labels
        document.getElementById('label-editor').style.color = WHCV_500;
        document.getElementById('label-citacion').style.color = WHCV_500;
        // Inputs Box
        document.getElementById('box-dark-4').style.backgroundColor = BCV_400;
        document.getElementById('box-dark-5').style.backgroundColor = BCV_400;
        // Inputs Box
        document.getElementById('box-dark-4').style.color = WHCV_500;
        document.getElementById('box-dark-5').style.color = WHCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-4').style.border = '1px solid #F9F9F9';
        document.getElementById('box-dark-5').style.border = '1px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip-dark-1').style.color = ICV_200;
        document.getElementById('descrip-dark-2').style.color = ICV_200;

        // ===========================================================>
        // Label Series
        document.getElementById('label-series').style.color = BCV_500;
        document.getElementById('descrip-1').style.backgroundColor = ICV_500;
        document.getElementById('descrip-dark').style.color = WHCV_500;
        // Labels Inputs
        document.getElementById('label-dark-1').style.color = WHCV_500;
        document.getElementById('label-dark-2').style.color = WHCV_500;
        // Input 1
        document.getElementById('input1-dark-series').style.backgroundColor = WHCV_500;
        document.getElementById('input1-dark-series').style.color = BCV_500;
        document.getElementById('input1-dark-series').style.border = '1px solid #141927';
        // Input 2
        document.getElementById('input2-dark-series').style.backgroundColor = WHCV_500;
        document.getElementById('input2-dark-series').style.color = BCV_500;
        document.getElementById('input2-dark-series').style.border = '1px solid #141927';
        // Button Series
        document.getElementById('add-series').style.fill = SUCV_500;
        // Labels check
        document.getElementById('label-1-series').style.color = BCV_500;
        document.getElementById('label-2-series').style.color = BCV_500;
        document.getElementById('label-3-series').style.color = BCV_500;
        // Button
        document.getElementById('remove-button-dark-2').classList.remove('remove-button-dark2');

        // ======================================================================>
        // Label Series Identificadores
        document.getElementById('label-identifi').style.color = BCV_500;
        document.getElementById('descrip-2').style.backgroundColor = ICV_500;
        document.getElementById('identifi-dark').style.color = WHCV_500;
        // Input 1               
        document.getElementById('input1-dark-identifi').style.backgroundColor = WHCV_500;
        document.getElementById('input1-dark-identifi').style.color = BCV_500;
        document.getElementById('input1-dark-identifi').style.border = '1px solid #141927';
        // Input 2
        document.getElementById('input2-dark-identifi').style.backgroundColor = WHCV_500;
        document.getElementById('input2-dark-identifi').style.color = BCV_500;
        document.getElementById('input2-dark-identifi').style.border = '1px solid #141927';
        // Button Identifi
        document.getElementById('add-identifi').style.fill = SUCV_500;
        // Labels check
        document.getElementById('label-1-identifi').style.color = BCV_500;
        document.getElementById('label-2-identifi').style.color = BCV_500;
        document.getElementById('label-3-identifi').style.color = BCV_500;
        // Button
        document.getElementById('remove-button-dark-3').classList.remove('remove-button-dark2');

        // ======================================================================>
        // Label Series Tipos
        document.getElementById('label-type').style.color = BCV_500;
        document.getElementById('label-type-2').style.color = BCV_500;

        // Input 1               
        document.getElementById('input1-dark-type').style.backgroundColor = WHCV_500;
        document.getElementById('input1-dark-type').style.color = BCV_500;
        document.getElementById('input1-dark-type').style.border = '1px solid #141927';
        // Button Identifi
        document.getElementById('add-type').style.fill = SUCV_500;
        // Labels check
        document.getElementById('label-1-type').style.color = BCV_500;
        document.getElementById('label-2-type').style.color = BCV_500;
        document.getElementById('label-3-type').style.color = BCV_500;
        // Button
        document.getElementById('remove-button-dark-4').classList.remove('remove-button-dark2');
        // ======================================================================>
        // Label Lenguaje
        document.getElementById('label-lenguajes').style.color = BCV_500;
        document.getElementById('descrip-3').style.backgroundColor = ICV_500;
        document.getElementById('lenguaje-dark').style.color = WHCV_500;
        // Input 1               
        document.getElementById('input1-dark-lenguaje').style.backgroundColor = WHCV_500;
        document.getElementById('input1-dark-lenguaje').style.color = BCV_500;
        document.getElementById('input1-dark-lenguaje').style.border = '1px solid #141927';

        // ======================================================================>
        // Buttons
        document.getElementById('cancel-button').classList.remove('cancel-button-dark');
        document.getElementById('next-button').classList.remove('next-button-dark');



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

        // Steps
        // Posición Actual
        document.getElementById('number-1').style.color = WHCV_500;
        // No Seleccionados Numbers
        document.getElementById('number-2').style.color = BCV_500;
        document.getElementById('number-3').style.color = BCV_500;
        document.getElementById('number-4').style.color = BCV_500;
        document.getElementById('number-5').style.color = BCV_500;
        document.getElementById('number-6').style.color = BCV_500;
        document.getElementById('number-7').style.color = BCV_500;
        // Cuadros Not Select
        document.getElementById('cuadro-1').style.border = '3px solid #A1B9DF';
        document.getElementById('cuadro-2').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-3').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-4').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-5').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-6').style.border = '3px solid #F9F9F9';
        document.getElementById('cuadro-7').style.border = '3px solid #F9F9F9';
        // Cuadros Not Select BG
        document.getElementById('cuadro-2').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-3').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-4').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-5').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-6').style.backgroundColor = BCV_200;
        document.getElementById('cuadro-7').style.backgroundColor = BCV_200;
        // Font Descrip
        document.getElementById('font-desc-1').style.color = WHCV_500;
        document.getElementById('font-desc-2').style.color = WHCV_700;
        document.getElementById('font-desc-3').style.color = WHCV_700;
        document.getElementById('font-desc-4').style.color = WHCV_700;
        document.getElementById('font-desc-5').style.color = WHCV_700;
        document.getElementById('font-desc-6').style.color = WHCV_700;
        document.getElementById('font-desc-7').style.color = WHCV_700;

        // Fieldset
        document.getElementById('fieldset').classList.add('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #141927';

        // Authors
        document.getElementById('title-section-1').style.color = WHCV_500;
        // Labels
        document.getElementById('label-input-1').style.color = WHCV_500;
        document.getElementById('label-input-2').style.color = WHCV_500;
        // Inputs
        // Buttons
        document.getElementById('add-1').style.fill = SUCV_200;
        document.getElementById('dark-names').style.backgroundColor = BCV_400;
        document.getElementById('dark-names').style.color = WHCV_500;
        document.getElementById('dark-names').style.border = '1px solid #F9F9F9';
        document.getElementById('dark-lastname').style.color = WHCV_500;
        document.getElementById('dark-lastname').style.backgroundColor = BCV_400;
        document.getElementById('dark-lastname').style.border = '1px solid #F9F9F9';
        // List
        document.getElementById('list-label-1').style.color = WHCV_500;
        document.getElementById('list-label-2').style.color = WHCV_500;
        document.getElementById('list-label-3').style.color = WHCV_500;

        // Button 
        document.getElementById('remove-button-dark').classList.add('remove-button-dark');


        // ==============================================================>
        // Title 
        document.getElementById('title-section-2').style.color = WHCV_500;
        // Labels
        document.getElementById('label-input-3').style.color = WHCV_500;
        document.getElementById('label-input-4').style.color = WHCV_500;
        document.getElementById('label-input-5').style.color = WHCV_500;
        document.getElementById('label-input-6').style.color = WHCV_500;
        document.getElementById('label-input-7').style.color = WHCV_500;
        document.getElementById('label-input-8').style.color = WHCV_500;
        // Inputs
        document.getElementById('dark-input-1').style.backgroundColor = BCV_400;
        document.getElementById('dark-input-1').style.color = WHCV_500;
        document.getElementById('dark-input-1').style.border = '1px solid #F9F9F9';
        document.getElementById('dark-input-2').style.color = WHCV_500;
        document.getElementById('dark-input-2').style.backgroundColor = BCV_400;
        document.getElementById('dark-input-2').style.border = '1px solid #F9F9F9';
        // Inputs
        // Buttons
        document.getElementById('add-2').style.fill = SUCV_200;
        // Button 
        document.getElementById('remove-button-dark1').classList.add('remove-button-dark');

        // ============================================================>

        // Date Action
        document.getElementById('item-date-1').style.color = WHCV_500;
        document.getElementById('item-date-2').style.color = WHCV_500;
        document.getElementById('item-date-3').style.color = WHCV_500;
        document.getElementById('item-date-4').style.color = WHCV_500;
        // Inputs Box
        document.getElementById('box-dark-1').style.backgroundColor = BCV_400;
        document.getElementById('box-dark-2').style.backgroundColor = BCV_400;
        document.getElementById('box-dark-3').style.backgroundColor = BCV_400;
        // Inputs Box
        document.getElementById('box-dark-1').style.color = WHCV_500;
        document.getElementById('box-dark-2').style.color = WHCV_500;
        document.getElementById('box-dark-3').style.color = WHCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-1').style.border = '1px solid #F9F9F9';
        document.getElementById('box-dark-2').style.border = '1px solid #F9F9F9';
        document.getElementById('box-dark-3').style.border = '1px solid #F9F9F9';

        // ===========================================================>
        // Labels
        document.getElementById('label-editor').style.color = WHCV_500;
        document.getElementById('label-citacion').style.color = WHCV_500;
        // Inputs Box
        document.getElementById('box-dark-4').style.backgroundColor = BCV_400;
        document.getElementById('box-dark-5').style.backgroundColor = BCV_400;
        // Inputs Box
        document.getElementById('box-dark-4').style.color = WHCV_500;
        document.getElementById('box-dark-5').style.color = WHCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-4').style.border = '1px solid #F9F9F9';
        document.getElementById('box-dark-5').style.border = '1px solid #F9F9F9';
        // Descrip
        document.getElementById('descrip-dark-1').style.color = ICV_200;
        document.getElementById('descrip-dark-2').style.color = ICV_200;

        // ===========================================================>
        // Label Series
        document.getElementById('label-series').style.color = WHCV_500;
        document.getElementById('descrip-1').style.backgroundColor = ICV_200;
        document.getElementById('descrip-dark').style.color = BCV_500;
        // Labels Inputs
        document.getElementById('label-dark-1').style.color = WHCV_500;
        document.getElementById('label-dark-2').style.color = WHCV_500;
        // Input 1
        document.getElementById('input1-dark-series').style.backgroundColor = BCV_400;
        document.getElementById('input1-dark-series').style.color = WHCV_500;
        document.getElementById('input1-dark-series').style.border = '1px solid #F9F9F9';
        // Input 2
        document.getElementById('input2-dark-series').style.backgroundColor = BCV_400;
        document.getElementById('input2-dark-series').style.color = WHCV_500;
        document.getElementById('input2-dark-series').style.border = '1px solid #F9F9F9';
        // Button Series
        document.getElementById('add-series').style.fill = SUCV_200;
        // Labels check
        document.getElementById('label-1-series').style.color = WHCV_500;
        document.getElementById('label-2-series').style.color = WHCV_500;
        document.getElementById('label-3-series').style.color = WHCV_500;
        // Button
        document.getElementById('remove-button-dark-2').classList.add('remove-button-dark2');
        // ======================================================================>
        // Label Series Identificadores
        document.getElementById('label-identifi').style.color = WHCV_500;
        document.getElementById('descrip-2').style.backgroundColor = ICV_200;
        document.getElementById('identifi-dark').style.color = BCV_500;
        // Input 1               
        document.getElementById('input1-dark-identifi').style.backgroundColor = BCV_400;
        document.getElementById('input1-dark-identifi').style.color = WHCV_500;
        document.getElementById('input1-dark-identifi').style.border = '1px solid #F9F9F9';
        // Input 2
        document.getElementById('input2-dark-identifi').style.backgroundColor = BCV_400;
        document.getElementById('input2-dark-identifi').style.color = WHCV_500;
        document.getElementById('input2-dark-identifi').style.border = '1px solid #F9F9F9';
        // Button Identifi
        document.getElementById('add-identifi').style.fill = SUCV_200;
        // Labels check
        document.getElementById('label-1-identifi').style.color = WHCV_500;
        document.getElementById('label-2-identifi').style.color = WHCV_500;
        document.getElementById('label-3-identifi').style.color = WHCV_500;
        // Button
        document.getElementById('remove-button-dark-3').classList.add('remove-button-dark2');
        // ======================================================================>
        // Label Series Tipos
        document.getElementById('label-type').style.color = WHCV_500;
        document.getElementById('label-type-2').style.color = WHCV_500;

        // Input 1               
        document.getElementById('input1-dark-type').style.backgroundColor = BCV_400;
        document.getElementById('input1-dark-type').style.color = WHCV_500;
        document.getElementById('input1-dark-type').style.border = '1px solid #F9F9F9';
        // Button Identifi
        document.getElementById('add-type').style.fill = SUCV_200;
        // Labels check
        document.getElementById('label-1-type').style.color = WHCV_500;
        document.getElementById('label-2-type').style.color = WHCV_500;
        document.getElementById('label-3-type').style.color = WHCV_500;
        // Button
        document.getElementById('remove-button-dark-4').classList.add('remove-button-dark2');
        // ======================================================================>
        // Label Lenguaje
        document.getElementById('label-lenguajes').style.color = WHCV_500;
        document.getElementById('descrip-3').style.backgroundColor = ICV_200;
        document.getElementById('lenguaje-dark').style.color = BCV_500;
        // Input 1               
        document.getElementById('input1-dark-lenguaje').style.backgroundColor = BCV_400;
        document.getElementById('input1-dark-lenguaje').style.color = WHCV_500;
        document.getElementById('input1-dark-lenguaje').style.border = '1px solid #F9F9F9';

        // ======================================================================>
        // Buttons
        document.getElementById('cancel-button').classList.add('cancel-button-dark');
        document.getElementById('next-button').classList.add('next-button-dark');


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

        // Steps
        // Posición Actual
        document.getElementById('number-1').style.color = BCV_500;
        // No Seleccionados Numbers
        document.getElementById('number-2').style.color = BCV_500;
        document.getElementById('number-3').style.color = BCV_500;
        document.getElementById('number-4').style.color = BCV_500;
        document.getElementById('number-5').style.color = BCV_500;
        document.getElementById('number-6').style.color = BCV_500;
        document.getElementById('number-7').style.color = BCV_500;
        // Cuadros Not Select
        document.getElementById('cuadro-1').style.border = '3px solid #1550AF';
        document.getElementById('cuadro-2').style.border = '3px solid #141927';
        document.getElementById('cuadro-3').style.border = '3px solid #141927';
        document.getElementById('cuadro-4').style.border = '3px solid #141927';
        document.getElementById('cuadro-5').style.border = '3px solid #141927';
        document.getElementById('cuadro-6').style.border = '3px solid #141927';
        document.getElementById('cuadro-7').style.border = '3px solid #141927';
        // Cuadros Not Select BG
        document.getElementById('cuadro-2').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-3').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-4').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-5').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-6').style.backgroundColor = ICV_200;
        document.getElementById('cuadro-7').style.backgroundColor = ICV_200;
        // Font Descrip
        document.getElementById('font-desc-1').style.color = BCV_500;
        document.getElementById('font-desc-2').style.color = ICV_200;
        document.getElementById('font-desc-3').style.color = ICV_200;
        document.getElementById('font-desc-4').style.color = ICV_200;
        document.getElementById('font-desc-5').style.color = ICV_200;
        document.getElementById('font-desc-6').style.color = ICV_200;
        document.getElementById('font-desc-7').style.color = ICV_200;

        // Fieldset
        document.getElementById('fieldset').classList.remove('fieldset-dark');
        // Legend
        document.getElementById('legend').style.border = '2px solid #F9F9F9';

        // Authors
        document.getElementById('title-section-1').style.color = BCV_500;
        // Labels
        document.getElementById('label-input-1').style.color = BCV_500;
        document.getElementById('label-input-2').style.color = BCV_500;
        // Inputs
        // Buttons
        document.getElementById('add-1').style.fill = SUCV_500;
        document.getElementById('dark-names').style.backgroundColor = WHCV_500;
        document.getElementById('dark-names').style.color = BCV_500;
        document.getElementById('dark-names').style.border = '1px solid #1B396A';
        document.getElementById('dark-lastname').style.color = BCV_500;
        document.getElementById('dark-lastname').style.backgroundColor = WHCV_500;
        document.getElementById('dark-lastname').style.border = '1px solid #1B396A';
        // List
        document.getElementById('list-label-1').style.color = BCV_500;
        document.getElementById('list-label-2').style.color = BCV_500;
        document.getElementById('list-label-3').style.color = BCV_500;

        // Button 
        document.getElementById('remove-button-dark').classList.remove('remove-button-dark');

        // ==============================================================>
        // Title 
        document.getElementById('title-section-2').style.color = BCV_500;
        // Labels
        document.getElementById('label-input-3').style.color = BCV_500;
        document.getElementById('label-input-4').style.color = BCV_500;
        document.getElementById('label-input-5').style.color = BCV_500;
        document.getElementById('label-input-6').style.color = BCV_500;
        document.getElementById('label-input-7').style.color = BCV_500;
        document.getElementById('label-input-8').style.color = BCV_500;
        // Inputs
        document.getElementById('dark-input-1').style.backgroundColor = WHCV_500;
        document.getElementById('dark-input-1').style.color = BCV_500;
        document.getElementById('dark-input-1').style.border = '1px solid #1B396A';
        // border: 1px solid rgba(27, 57, 106, 1)
        document.getElementById('dark-input-2').style.color = BCV_500;
        document.getElementById('dark-input-2').style.backgroundColor = WHCV_500;
        document.getElementById('dark-input-2').style.border = '1px solid #1B396A';
        // Buttons
        document.getElementById('add-2').style.fill = SUCV_500;
        // Button 
        document.getElementById('remove-button-dark1').classList.remove('remove-button-dark');

        // ============================================================>

        // Date Action
        document.getElementById('item-date-1').style.color = BCV_500;
        document.getElementById('item-date-2').style.color = BCV_500;
        document.getElementById('item-date-3').style.color = BCV_500;
        document.getElementById('item-date-4').style.color = BCV_500;
        // Inputs Box
        document.getElementById('box-dark-1').style.backgroundColor = WHCV_500;
        document.getElementById('box-dark-2').style.backgroundColor = WHCV_500;
        document.getElementById('box-dark-3').style.backgroundColor = WHCV_500;
        // Inputs Box
        document.getElementById('box-dark-1').style.color = BCV_500;
        document.getElementById('box-dark-2').style.color = BCV_500;
        document.getElementById('box-dark-3').style.color = BCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-1').style.border = '1px solid #1B396A';
        document.getElementById('box-dark-2').style.border = '1px solid #1B396A';
        document.getElementById('box-dark-3').style.border = '1px solid #1B396A';

        // ===========================================================>
        // Labels
        document.getElementById('label-editor').style.color = BCV_500;
        document.getElementById('label-citacion').style.color = BCV_500;
        // Inputs Box
        document.getElementById('box-dark-4').style.backgroundColor = WHCV_500;
        document.getElementById('box-dark-5').style.backgroundColor = WHCV_500;
        // Inputs Box
        document.getElementById('box-dark-4').style.color = BCV_500;
        document.getElementById('box-dark-5').style.color = BCV_500;
        // Inputs Box Border
        document.getElementById('box-dark-4').style.border = '1px solid #1B396A';
        document.getElementById('box-dark-5').style.border = '1px solid #1B396A';
        // Descrip
        document.getElementById('descrip-dark-1').style.color = ICV_500;
        document.getElementById('descrip-dark-2').style.color = ICV_500;

        // ===========================================================>
        // Label Series
        document.getElementById('label-series').style.color = BCV_500;
        document.getElementById('descrip-1').style.backgroundColor = ICV_500;
        document.getElementById('descrip-dark').style.color = WHCV_500;
        // Labels Inputs
        document.getElementById('label-dark-1').style.color = WHCV_500;
        document.getElementById('label-dark-2').style.color = WHCV_500;
        // Input 1
        document.getElementById('input1-dark-series').style.backgroundColor = WHCV_500;
        document.getElementById('input1-dark-series').style.color = BCV_500;
        document.getElementById('input1-dark-series').style.border = '1px solid #141927';
        // Input 2
        document.getElementById('input2-dark-series').style.backgroundColor = WHCV_500;
        document.getElementById('input2-dark-series').style.color = BCV_500;
        document.getElementById('input2-dark-series').style.border = '1px solid #141927';
        // Button Series
        document.getElementById('add-series').style.fill = SUCV_500;
        // Labels check
        document.getElementById('label-1-series').style.color = BCV_500;
        document.getElementById('label-2-series').style.color = BCV_500;
        document.getElementById('label-3-series').style.color = BCV_500;
        // Button
        document.getElementById('remove-button-dark-2').classList.remove('remove-button-dark2');

        // ======================================================================>
        // Label Series Identificadores
        document.getElementById('label-identifi').style.color = BCV_500;
        document.getElementById('descrip-2').style.backgroundColor = ICV_500;
        document.getElementById('identifi-dark').style.color = WHCV_500;
        // Input 1               
        document.getElementById('input1-dark-identifi').style.backgroundColor = WHCV_500;
        document.getElementById('input1-dark-identifi').style.color = BCV_500;
        document.getElementById('input1-dark-identifi').style.border = '1px solid #141927';
        // Input 2
        document.getElementById('input2-dark-identifi').style.backgroundColor = WHCV_500;
        document.getElementById('input2-dark-identifi').style.color = BCV_500;
        document.getElementById('input2-dark-identifi').style.border = '1px solid #141927';
        // Button Identifi
        document.getElementById('add-identifi').style.fill = SUCV_500;
        // Labels check
        document.getElementById('label-1-identifi').style.color = BCV_500;
        document.getElementById('label-2-identifi').style.color = BCV_500;
        document.getElementById('label-3-identifi').style.color = BCV_500;
        // Button
        document.getElementById('remove-button-dark-3').classList.remove('remove-button-dark2');

        // ======================================================================>
        // Label Series Tipos
        document.getElementById('label-type').style.color = BCV_500;
        document.getElementById('label-type-2').style.color = BCV_500;

        // Input 1               
        document.getElementById('input1-dark-type').style.backgroundColor = WHCV_500;
        document.getElementById('input1-dark-type').style.color = BCV_500;
        document.getElementById('input1-dark-type').style.border = '1px solid #141927';
        // Button Identifi
        document.getElementById('add-type').style.fill = SUCV_500;
        // Labels check
        document.getElementById('label-1-type').style.color = BCV_500;
        document.getElementById('label-2-type').style.color = BCV_500;
        document.getElementById('label-3-type').style.color = BCV_500;
        // Button
        document.getElementById('remove-button-dark-4').classList.remove('remove-button-dark2');
        // ======================================================================>
        // Label Lenguaje
        document.getElementById('label-lenguajes').style.color = BCV_500;
        document.getElementById('descrip-3').style.backgroundColor = ICV_500;
        document.getElementById('lenguaje-dark').style.color = WHCV_500;
        // Input 1               
        document.getElementById('input1-dark-lenguaje').style.backgroundColor = WHCV_500;
        document.getElementById('input1-dark-lenguaje').style.color = BCV_500;
        document.getElementById('input1-dark-lenguaje').style.border = '1px solid #141927';

        // ======================================================================>
        // Buttons
        document.getElementById('cancel-button').classList.remove('cancel-button-dark');
        document.getElementById('next-button').classList.remove('next-button-dark');




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

    // Steps
    // Posición Actual
    document.getElementById('number-1').style.color = WHCV_500;
    // No Seleccionados Numbers
    document.getElementById('number-2').style.color = BCV_500;
    document.getElementById('number-3').style.color = BCV_500;
    document.getElementById('number-4').style.color = BCV_500;
    document.getElementById('number-5').style.color = BCV_500;
    document.getElementById('number-6').style.color = BCV_500;
    document.getElementById('number-7').style.color = BCV_500;
    // Cuadros Not Select
    document.getElementById('cuadro-1').style.border = '3px solid #A1B9DF';
    document.getElementById('cuadro-2').style.border = '3px solid #F9F9F9';
    document.getElementById('cuadro-3').style.border = '3px solid #F9F9F9';
    document.getElementById('cuadro-4').style.border = '3px solid #F9F9F9';
    document.getElementById('cuadro-5').style.border = '3px solid #F9F9F9';
    document.getElementById('cuadro-6').style.border = '3px solid #F9F9F9';
    document.getElementById('cuadro-7').style.border = '3px solid #F9F9F9';
    // Cuadros Not Select BG
    document.getElementById('cuadro-2').style.backgroundColor = BCV_200;
    document.getElementById('cuadro-3').style.backgroundColor = BCV_200;
    document.getElementById('cuadro-4').style.backgroundColor = BCV_200;
    document.getElementById('cuadro-5').style.backgroundColor = BCV_200;
    document.getElementById('cuadro-6').style.backgroundColor = BCV_200;
    document.getElementById('cuadro-7').style.backgroundColor = BCV_200;
    // Font Descrip
    document.getElementById('font-desc-1').style.color = WHCV_500;
    document.getElementById('font-desc-2').style.color = WHCV_700;
    document.getElementById('font-desc-3').style.color = WHCV_700;
    document.getElementById('font-desc-4').style.color = WHCV_700;
    document.getElementById('font-desc-5').style.color = WHCV_700;
    document.getElementById('font-desc-6').style.color = WHCV_700;
    document.getElementById('font-desc-7').style.color = WHCV_700;
    // ==================================================================
    // Fieldset
    document.getElementById('fieldset').classList.add('fieldset-dark');
    // Legend
    document.getElementById('legend').style.border = '2px solid #141927';

    // Authors
    document.getElementById('title-section-1').style.color = WHCV_500;
    // Labels
    document.getElementById('label-input-1').style.color = WHCV_500;
    document.getElementById('label-input-2').style.color = WHCV_500;
    // Inputs
    // Buttons
    document.getElementById('add-1').style.fill = SUCV_200;
    document.getElementById('dark-names').style.backgroundColor = BCV_400;
    document.getElementById('dark-names').style.color = WHCV_500;
    document.getElementById('dark-names').style.border = '1px solid #F9F9F9';
    document.getElementById('dark-lastname').style.color = WHCV_500;
    document.getElementById('dark-lastname').style.backgroundColor = BCV_400;
    document.getElementById('dark-lastname').style.border = '1px solid #F9F9F9';
    // List
    document.getElementById('list-label-1').style.color = WHCV_500;
    document.getElementById('list-label-2').style.color = WHCV_500;
    document.getElementById('list-label-3').style.color = WHCV_500;

    // Button 
    document.getElementById('remove-button-dark').classList.add('remove-button-dark');
    // ==============================================================>


    // ==============================================================>
    // Title 
    document.getElementById('title-section-2').style.color = WHCV_500;
    // Labels
    document.getElementById('label-input-3').style.color = WHCV_500;
    document.getElementById('label-input-4').style.color = WHCV_500;
    document.getElementById('label-input-5').style.color = WHCV_500;
    document.getElementById('label-input-6').style.color = WHCV_500;
    document.getElementById('label-input-7').style.color = WHCV_500;
    document.getElementById('label-input-8').style.color = WHCV_500;
    // Inputs
    document.getElementById('dark-input-1').style.backgroundColor = BCV_400;
    document.getElementById('dark-input-1').style.color = WHCV_500;
    document.getElementById('dark-input-1').style.border = '1px solid #F9F9F9';
    document.getElementById('dark-input-2').style.color = WHCV_500;
    document.getElementById('dark-input-2').style.backgroundColor = BCV_400;
    document.getElementById('dark-input-2').style.border = '1px solid #F9F9F9';
    // Inputs
    // Buttons
    document.getElementById('add-2').style.fill = SUCV_200;
    // Button 
    document.getElementById('remove-button-dark1').classList.add('remove-button-dark');

    // ============================================================>

    // Date Action
    document.getElementById('item-date-1').style.color = WHCV_500;
    document.getElementById('item-date-2').style.color = WHCV_500;
    document.getElementById('item-date-3').style.color = WHCV_500;
    document.getElementById('item-date-4').style.color = WHCV_500;
    // Inputs Box
    document.getElementById('box-dark-1').style.backgroundColor = BCV_400;
    document.getElementById('box-dark-2').style.backgroundColor = BCV_400;
    document.getElementById('box-dark-3').style.backgroundColor = BCV_400;
    // Inputs Box
    document.getElementById('box-dark-1').style.color = WHCV_500;
    document.getElementById('box-dark-2').style.color = WHCV_500;
    document.getElementById('box-dark-3').style.color = WHCV_500;
    // Inputs Box Border
    document.getElementById('box-dark-1').style.border = '1px solid #F9F9F9';
    document.getElementById('box-dark-2').style.border = '1px solid #F9F9F9';
    document.getElementById('box-dark-3').style.border = '1px solid #F9F9F9';


    // ===========================================================>
    // Labels
    document.getElementById('label-editor').style.color = WHCV_500;
    document.getElementById('label-citacion').style.color = WHCV_500;
    // Inputs Box
    document.getElementById('box-dark-4').style.backgroundColor = BCV_400;
    document.getElementById('box-dark-5').style.backgroundColor = BCV_400;
    // Inputs Box
    document.getElementById('box-dark-4').style.color = WHCV_500;
    document.getElementById('box-dark-5').style.color = WHCV_500;
    // Inputs Box Border
    document.getElementById('box-dark-4').style.border = '1px solid #F9F9F9';
    document.getElementById('box-dark-5').style.border = '1px solid #F9F9F9';
    // Descrip
    document.getElementById('descrip-dark-1').style.color = ICV_200;
    document.getElementById('descrip-dark-2').style.color = ICV_200;

    // ===========================================================>
    // Label Series
    document.getElementById('label-series').style.color = WHCV_500;
    document.getElementById('descrip-1').style.backgroundColor = ICV_200;
    document.getElementById('descrip-dark').style.color = BCV_500;
    // Labels Inputs
    document.getElementById('label-dark-1').style.color = WHCV_500;
    document.getElementById('label-dark-2').style.color = WHCV_500;
    // Input 1
    document.getElementById('input1-dark-series').style.backgroundColor = BCV_400;
    document.getElementById('input1-dark-series').style.color = WHCV_500;
    document.getElementById('input1-dark-series').style.border = '1px solid #F9F9F9';
    // Input 2
    document.getElementById('input2-dark-series').style.backgroundColor = BCV_400;
    document.getElementById('input2-dark-series').style.color = WHCV_500;
    document.getElementById('input2-dark-series').style.border = '1px solid #F9F9F9';
    // Button Series
    document.getElementById('add-series').style.fill = SUCV_200;
    // Labels check
    document.getElementById('label-1-series').style.color = WHCV_500;
    document.getElementById('label-2-series').style.color = WHCV_500;
    document.getElementById('label-3-series').style.color = WHCV_500;
    // Button
    document.getElementById('remove-button-dark-2').classList.add('remove-button-dark2');


    // ======================================================================>
    // Label Series Identificadores
    document.getElementById('label-identifi').style.color = WHCV_500;
    document.getElementById('descrip-2').style.backgroundColor = ICV_200;
    document.getElementById('identifi-dark').style.color = BCV_500;
    // Input 1               
    document.getElementById('input1-dark-identifi').style.backgroundColor = BCV_400;
    document.getElementById('input1-dark-identifi').style.color = WHCV_500;
    document.getElementById('input1-dark-identifi').style.border = '1px solid #F9F9F9';
    // Input 2
    document.getElementById('input2-dark-identifi').style.backgroundColor = BCV_400;
    document.getElementById('input2-dark-identifi').style.color = WHCV_500;
    document.getElementById('input2-dark-identifi').style.border = '1px solid #F9F9F9';
    // Button Identifi
    document.getElementById('add-identifi').style.fill = SUCV_200;
    // Labels check
    document.getElementById('label-1-identifi').style.color = WHCV_500;
    document.getElementById('label-2-identifi').style.color = WHCV_500;
    document.getElementById('label-3-identifi').style.color = WHCV_500;
    // Button
    document.getElementById('remove-button-dark-3').classList.add('remove-button-dark2');

    // ======================================================================>
    // Label Series Tipos
    document.getElementById('label-type').style.color = WHCV_500;
    document.getElementById('label-type-2').style.color = WHCV_500;

    // Input 1               
    document.getElementById('input1-dark-type').style.backgroundColor = BCV_400;
    document.getElementById('input1-dark-type').style.color = WHCV_500;
    document.getElementById('input1-dark-type').style.border = '1px solid #F9F9F9';
    // Button Identifi
    document.getElementById('add-type').style.fill = SUCV_200;
    // Labels check
    document.getElementById('label-1-type').style.color = WHCV_500;
    document.getElementById('label-2-type').style.color = WHCV_500;
    document.getElementById('label-3-type').style.color = WHCV_500;
    // Button
    document.getElementById('remove-button-dark-4').classList.add('remove-button-dark2');

    // ======================================================================>
    // Label Lenguaje
    document.getElementById('label-lenguajes').style.color = WHCV_500;
    document.getElementById('descrip-3').style.backgroundColor = ICV_200;
    document.getElementById('lenguaje-dark').style.color = BCV_500;
    // Input 1               
    document.getElementById('input1-dark-lenguaje').style.backgroundColor = BCV_400;
    document.getElementById('input1-dark-lenguaje').style.color = WHCV_500;
    document.getElementById('input1-dark-lenguaje').style.border = '1px solid #F9F9F9';

    // ======================================================================>
    // Buttons
    document.getElementById('cancel-button').classList.add('cancel-button-dark');
    document.getElementById('next-button').classList.add('next-button-dark');




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

    // Steps
    // Posición Actual
    document.getElementById('number-1').style.color = BCV_500;
    // No Seleccionados Numbers
    document.getElementById('number-2').style.color = BCV_500;
    document.getElementById('number-3').style.color = BCV_500;
    document.getElementById('number-4').style.color = BCV_500;
    document.getElementById('number-5').style.color = BCV_500;
    document.getElementById('number-6').style.color = BCV_500;
    document.getElementById('number-7').style.color = BCV_500;
    // Cuadros Not Select
    document.getElementById('cuadro-1').style.border = '3px solid #1550AF';
    document.getElementById('cuadro-2').style.border = '3px solid #141927';
    document.getElementById('cuadro-3').style.border = '3px solid #141927';
    document.getElementById('cuadro-4').style.border = '3px solid #141927';
    document.getElementById('cuadro-5').style.border = '3px solid #141927';
    document.getElementById('cuadro-6').style.border = '3px solid #141927';
    document.getElementById('cuadro-7').style.border = '3px solid #141927';
    // Cuadros Not Select BG
    document.getElementById('cuadro-2').style.backgroundColor = ICV_200;
    document.getElementById('cuadro-3').style.backgroundColor = ICV_200;
    document.getElementById('cuadro-4').style.backgroundColor = ICV_200;
    document.getElementById('cuadro-5').style.backgroundColor = ICV_200;
    document.getElementById('cuadro-6').style.backgroundColor = ICV_200;
    document.getElementById('cuadro-7').style.backgroundColor = ICV_200;
    // Font Descrip
    document.getElementById('font-desc-1').style.color = BCV_500;
    document.getElementById('font-desc-2').style.color = ICV_200;
    document.getElementById('font-desc-3').style.color = ICV_200;
    document.getElementById('font-desc-4').style.color = ICV_200;
    document.getElementById('font-desc-5').style.color = ICV_200;
    document.getElementById('font-desc-6').style.color = ICV_200;
    document.getElementById('font-desc-7').style.color = ICV_200;


    // Fieldset
    document.getElementById('fieldset').classList.remove('fieldset-dark');
    // Legend
    document.getElementById('legend').style.border = '2px solid #F9F9F9';

    // Authors
    document.getElementById('title-section-1').style.color = BCV_500;
    // Labels
    document.getElementById('label-input-1').style.color = BCV_500;
    document.getElementById('label-input-2').style.color = BCV_500;
    // Inputs
    // Buttons
    document.getElementById('add-1').style.fill = SUCV_500;
    document.getElementById('dark-names').style.backgroundColor = WHCV_500;
    document.getElementById('dark-names').style.color = BCV_500;
    document.getElementById('dark-names').style.border = '1px solid #1B396A';
    document.getElementById('dark-lastname').style.color = BCV_500;
    document.getElementById('dark-lastname').style.backgroundColor = WHCV_500;
    document.getElementById('dark-lastname').style.border = '1px solid #1B396A';
    // List
    document.getElementById('list-label-1').style.color = BCV_500;
    document.getElementById('list-label-2').style.color = BCV_500;
    document.getElementById('list-label-3').style.color = BCV_500;

    // Button 
    document.getElementById('remove-button-dark').classList.remove('remove-button-dark');

    // ==============================================================>
    // Title 
    document.getElementById('title-section-2').style.color = BCV_500;
    // Labels
    document.getElementById('label-input-3').style.color = BCV_500;
    document.getElementById('label-input-4').style.color = BCV_500;
    document.getElementById('label-input-5').style.color = BCV_500;
    document.getElementById('label-input-6').style.color = BCV_500;
    document.getElementById('label-input-7').style.color = BCV_500;
    document.getElementById('label-input-8').style.color = BCV_500;
    // Inputs
    document.getElementById('dark-input-1').style.backgroundColor = WHCV_500;
    document.getElementById('dark-input-1').style.color = BCV_500;
    document.getElementById('dark-input-1').style.border = '1px solid #1B396A';
    // border: 1px solid rgba(27, 57, 106, 1)
    document.getElementById('dark-input-2').style.color = BCV_500;
    document.getElementById('dark-input-2').style.backgroundColor = WHCV_500;
    document.getElementById('dark-input-2').style.border = '1px solid #1B396A';
    // Buttons
    document.getElementById('add-2').style.fill = SUCV_500;
    // Button 
    document.getElementById('remove-button-dark1').classList.remove('remove-button-dark');

    // ============================================================>

    // Date Action
    document.getElementById('item-date-1').style.color = BCV_500;
    document.getElementById('item-date-2').style.color = BCV_500;
    document.getElementById('item-date-3').style.color = BCV_500;
    document.getElementById('item-date-4').style.color = BCV_500;
    // Inputs Box
    document.getElementById('box-dark-1').style.backgroundColor = WHCV_500;
    document.getElementById('box-dark-2').style.backgroundColor = WHCV_500;
    document.getElementById('box-dark-3').style.backgroundColor = WHCV_500;
    // Inputs Box
    document.getElementById('box-dark-1').style.color = BCV_500;
    document.getElementById('box-dark-2').style.color = BCV_500;
    document.getElementById('box-dark-3').style.color = BCV_500;
    // Inputs Box Border
    document.getElementById('box-dark-1').style.border = '1px solid #1B396A';
    document.getElementById('box-dark-2').style.border = '1px solid #1B396A';
    document.getElementById('box-dark-3').style.border = '1px solid #1B396A';


    // ===========================================================>
    // Labels
    document.getElementById('label-editor').style.color = BCV_500;
    document.getElementById('label-citacion').style.color = BCV_500;
    // Inputs Box
    document.getElementById('box-dark-4').style.backgroundColor = WHCV_500;
    document.getElementById('box-dark-5').style.backgroundColor = WHCV_500;
    // Inputs Box
    document.getElementById('box-dark-4').style.color = BCV_500;
    document.getElementById('box-dark-5').style.color = BCV_500;
    // Inputs Box Border
    document.getElementById('box-dark-4').style.border = '1px solid #1B396A';
    document.getElementById('box-dark-5').style.border = '1px solid #1B396A';
    // Descrip
    document.getElementById('descrip-dark-1').style.color = ICV_500;
    document.getElementById('descrip-dark-2').style.color = ICV_500;

    // ===========================================================>
    // Label Series
    document.getElementById('label-series').style.color = BCV_500;
    document.getElementById('descrip-1').style.backgroundColor = ICV_500;
    document.getElementById('descrip-dark').style.color = WHCV_500;
    // Labels Inputs
    document.getElementById('label-dark-1').style.color = WHCV_500;
    document.getElementById('label-dark-2').style.color = WHCV_500;
    // Input 1
    document.getElementById('input1-dark-series').style.backgroundColor = WHCV_500;
    document.getElementById('input1-dark-series').style.color = BCV_500;
    document.getElementById('input1-dark-series').style.border = '1px solid #141927';
    // Input 2
    document.getElementById('input2-dark-series').style.backgroundColor = WHCV_500;
    document.getElementById('input2-dark-series').style.color = BCV_500;
    document.getElementById('input2-dark-series').style.border = '1px solid #141927';
    // Button Series
    document.getElementById('add-series').style.fill = SUCV_500;
    // Labels check
    document.getElementById('label-1-series').style.color = BCV_500;
    document.getElementById('label-2-series').style.color = BCV_500;
    document.getElementById('label-3-series').style.color = BCV_500;
    // Button
    document.getElementById('remove-button-dark-2').classList.remove('remove-button-dark2');

    // ======================================================================>
    // Label Series Identificadores
    document.getElementById('label-identifi').style.color = BCV_500;
    document.getElementById('descrip-2').style.backgroundColor = ICV_500;
    document.getElementById('identifi-dark').style.color = WHCV_500;
    // Input 1               
    document.getElementById('input1-dark-identifi').style.backgroundColor = WHCV_500;
    document.getElementById('input1-dark-identifi').style.color = BCV_500;
    document.getElementById('input1-dark-identifi').style.border = '1px solid #141927';
    // Input 2
    document.getElementById('input2-dark-identifi').style.backgroundColor = WHCV_500;
    document.getElementById('input2-dark-identifi').style.color = BCV_500;
    document.getElementById('input2-dark-identifi').style.border = '1px solid #141927';
    // Button Identifi
    document.getElementById('add-identifi').style.fill = SUCV_500;
    // Labels check
    document.getElementById('label-1-identifi').style.color = BCV_500;
    document.getElementById('label-2-identifi').style.color = BCV_500;
    document.getElementById('label-3-identifi').style.color = BCV_500;
    // Button
    document.getElementById('remove-button-dark-3').classList.remove('remove-button-dark2');

    // ======================================================================>
    // Label Series Tipos
    document.getElementById('label-type').style.color = BCV_500;
    document.getElementById('label-type-2').style.color = BCV_500;

    // Input 1               
    document.getElementById('input1-dark-type').style.backgroundColor = WHCV_500;
    document.getElementById('input1-dark-type').style.color = BCV_500;
    document.getElementById('input1-dark-type').style.border = '1px solid #141927';
    // Button Identifi
    document.getElementById('add-type').style.fill = SUCV_500;
    // Labels check
    document.getElementById('label-1-type').style.color = BCV_500;
    document.getElementById('label-2-type').style.color = BCV_500;
    document.getElementById('label-3-type').style.color = BCV_500;
    // Button
    document.getElementById('remove-button-dark-4').classList.remove('remove-button-dark2');

    // ======================================================================>
    // Label Lenguaje
    document.getElementById('label-lenguajes').style.color = BCV_500;
    document.getElementById('descrip-3').style.backgroundColor = ICV_500;
    document.getElementById('lenguaje-dark').style.color = WHCV_500;
    // Input 1               
    document.getElementById('input1-dark-lenguaje').style.backgroundColor = WHCV_500;
    document.getElementById('input1-dark-lenguaje').style.color = BCV_500;
    document.getElementById('input1-dark-lenguaje').style.border = '1px solid #141927';

    // ======================================================================>
    // Buttons
    document.getElementById('cancel-button').classList.remove('cancel-button-dark');
    document.getElementById('next-button').classList.remove('next-button-dark');




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