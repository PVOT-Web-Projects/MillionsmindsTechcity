$(document).ready(function(){
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};

    $.datepicker.regional['fr'] = {clearText: 'Effacer', clearStatus: '',
        closeText: 'Fermer', closeStatus: 'Fermer sans modifier',
        prevText: '<Préc', prevStatus: 'Voir le mois précédent',
        nextText: 'Suiv>', nextStatus: 'Voir le mois suivant',
        currentText: 'Courant', currentStatus: 'Voir le mois courant',
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
            'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun',
            'Jul','Aoû','Sep','Oct','Nov','Déc'],
        monthStatus: 'Voir un autre mois', yearStatus: 'Voir un autre année',
        weekHeader: 'Sm', weekStatus: '',
        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
        dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
        dayStatus: 'Utiliser DD comme premier jour de la semaine', dateStatus: 'Choisir le DD, MM d',
        dateFormat: 'dd/mm/yy', firstDay: 0,
        initStatus: 'Choisir la date', isRTL: false};

    $.datepicker.regional['de'] = {clearText: 'Auslöschen', clearStatus: '',
        closeText: 'Schliessen',
        prevText: '<vorheriges',
        nextText: 'folgend>',
        currentText: 'heute',
        monthNames: ['Januar','Februar','März','April','Mai','Juni',
            'Juli','August','September','Oktober','November','Dezember'],
        monthNamesShort: ['jan','feb','märz','apr','mai','jun',
            'jul','aug','sep','okt','nov','dez'],
        monthStatus: 'Bekijk een andere maand', yearStatus: 'Bekijk nog een jaar',
        weekHeader: 'Sm', weekStatus: '',
        dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
        dayNamesShort: ['so','mo', 'di','mi','do','fr','sa'],
        dayNamesMin: ['so','mo', 'di','mi','do','fr','sa'],
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        initStatus: 'Wählen Sie ein Datum aus', isRTL: false};
    /* motor interactions */
    $.datepicker.setDefaults($.datepicker.regional[$("#lang-input").val()]),
        $("#datein").datepicker({
            showOn: "focus",
            minDate: 0,
            dateFormat: "dd-mm-yy",
            constrainInput: !0,
            onClose: function (s) {
                if (s.indexOf("-") > 0) {
                    var o = s.split("-");
                }
                if (s.indexOf("/") > 0) {
                    var o = s.split("/");
                }
                if(o!==undefined){
                    dia = o[0], mes = o[1], ano = o[2], tempD = mes + "/" + dia + "/" + ano, testM = new Date(tempD), testM.setDate(testM.getDate() + 2), dia = testM.getDate(), mes = parseInt(testM.getMonth()) + 1, ano = testM.getFullYear(), tempD = dia + "-" + mes + "-" + ano, $("#dateout").datepicker("option", "minDate", $("#datein").val()), $("#dateout").val(tempD);
                }
                $("#dateout").datepicker('show');
            }
        }), $("#dateout").datepicker({
        dateFormat: "dd-mm-yy",
        showOn: "focus",
        minDate: 1,
        maxDate: +10,
        constrainInput: !0
    });
    $("#datein").change(function(){
        var someDate = $("#datein").datepicker('getDate');
        var numberOfDaysToAdd = 14;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        $('#dateout').datepicker('option', 'maxDate', someDate);
    });
    $("#datein").datepicker("setDate", "0");
    $("#dateout").datepicker("setDate", "1");


    /** MOTOR FORM **/
    function isMobile(){
        return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/BlackBerry/);
    }

    var dispositivo = $("#dispositivo");
    isMobile() ? dispositivo.val(isMobile()) : dispositivo.val("PC");
    var affiliate = $("#affiliate");
    affiliate.val(affiliate.val()+dispositivo.val());

    $('.js-active-inputs').click(function(){
        var btn = $(this);
        var parent = btn.parents('.select-guests');
        
        if(!parent.hasClass('active')){
            parent.addClass('active');
        }else{
            parent.removeClass('active');
            var guests = $('#guests-field select').val();
            var kids = $('#kids-field select').val();
            var babies = $('#babies-field select').val();
            $('.motor-input.select-guests .select-input.counter').text(+guests + +kids + +babies);
        }
    });
    
    $('.js-apply-inputs').click(function(){
        var guests = $('#guests-field select').val();
        var kids = $('#kids-field select').val();
        var babies = $('#babies-field select').val();
        $('.motor-input.select-guests .select-input.counter').text(+guests + +kids + +babies);
        $('.motor-input.select-guests').removeClass('active');
    });
    
    var max_guests = $('#guests-field').attr('data-max');
    var max_kids = $('#kids-field').attr('data-max');
    var max_babies = $('#babies-field').attr('data-max');

    var min_guests = $('#guests-field').attr('data-min');
    var min_kids = $('#kids-field').attr('data-min');
    var min_babies = $('#babies-field').attr('data-min');

    var max_kids_age = $('#kids-field').attr('data-max-age');
    var max_babies_age = $('#babies-field').attr('data-max-age');

    var min_kids_age = +max_babies_age + 1;
    var min_babies_age = $('#babies-field').attr('data-min-age');
    
    $('#hotels-select').change(function(){
        $('#guests-field select').val(2);
        $('#kids-field select').val(0);
        $('#babies-field select').val(0);
        $('.motor-subinputs').removeClass('open');
        setTimeout(function(){
            $('.subinputs-list-element').remove();
        }, 700);
        setTimeout(function(){
            max_guests = $('#guests-field').attr('data-max');
            max_kids = $('#kids-field').attr('data-max');
            max_babies = $('#babies-field').attr('data-max');
        
            min_guests = $('#guests-field').attr('data-min');
            min_kids = $('#kids-field').attr('data-min');
            min_babies = $('#babies-field').attr('data-min');
        
            max_kids_age = $('#kids-field').attr('data-max-age');
            max_babies_age = $('#babies-field').attr('data-max-age');
        
            min_kids_age = +max_babies_age + 1;
            min_babies_age = $('#babies-field').attr('data-min-age');

            /* load ages range text */
            var text = $('#kids-field').attr('data-age-text');
            $('#kids-field .wrap-motor-input .motor-input-content .motor-input-text small').text(' / ' + min_kids_age + ' - ' + max_kids_age + ' ' + text);

            var text = $('#babies-field').attr('data-age-text');
            $('#babies-field .wrap-motor-input .motor-input-content .motor-input-text small').text('/ ' + min_babies_age + ' - ' + max_babies_age + ' ' + text);
            
            $('#guests-field select option').remove();
            for(var i = min_guests; i < +max_guests+1; i++) {
                $('#guests-field select').append("<option>" + i + "</option>");
            };
            
            $('#kids-field select option').remove();
            for(var i = min_kids; i < +max_kids+1; i++) {
                $('#kids-field select').append("<option>" + i + "</option>");
            };
            
            $('#babies-field select option').remove();
            for(var i = min_babies; i < +max_babies+1; i++) {
                $('#babies-field select').append("<option>" + i + "</option>");
            };
            
        }, 1000);
    });

    function print_ages(min,max){
        var str = "";
        for (i = min; i <= max; i++){
            str+="<option>" + i + "</option>";
        }
        return str;
    }
    
    if($('#kids-field').length){
        var max_kids = $('#kids-field').attr('data-max');
        if(max_kids === '0'){
            $('#kids-field').css('display', 'none');
            $('.motor-subinputs').removeClass('open');
        }else{
            $('#kids-field').css('display', 'block');
            $('#kids-field .motor-input-field.select-input option').remove();
            $('#kids-field .motor-input-field.select-input').append(print_ages(0 ,max_kids));
        }
        $('.js-select-adults').change(function(){
            max_kids = $('#kids-field').attr('data-max');
            if(max_kids === '0'){
                $('#kids-field').css('display', 'none');
                $('.motor-subinputs').removeClass('open');
            }else{
                $('#kids-field').css('display', 'block');
                $('#kids-field .motor-input-field.select-input option').remove();
                $('#kids-field .motor-input-field.select-input').append(print_ages(0 ,max_kids));
            }
        });
    };
    
    var number = 1;
    $('#kids-field select').change(function(){
        var input = $(this);
        var value = input.val();
        var count = $('.subinputs-list-element').length;
        max_guests = $('#guests-field').attr('data-max');
        max_kids = $('#kids-field').attr('data-max');
        max_babies = $('#babies-field').attr('data-max');
        
        min_guests = $('#guests-field').attr('data-min');
        min_kids = $('#kids-field').attr('data-min');
        min_babies = $('#babies-field').attr('data-min');
        
        max_kids_age = $('#kids-field').attr('data-max-age');
        max_babies_age = $('#babies-field').attr('data-max-age');
        
        min_kids_age = +max_babies_age + 1;
        min_babies_age = $('#babies-field').attr('data-min-age');
        
        var text = $('#kids-field').attr('data-kid-text');
        
        if(!$('.motor-module').hasClass('no-kids-ages')){
            if(value === '0'){
                $('.motor-subinputs').removeClass('open');
                $('#kids-field').removeClass('marked');
                setTimeout(function(){
                    $('.subinputs-list-element').remove();
                }, 700);
            }else if(value > count){
                $('.motor-subinputs').addClass('open');
                $('#kids-field').addClass('marked');
                var result = value - count;
                for(var i = 0; i < result; i++) {
                    $('.js-insert-kid').append("<div class='subinputs-list-element'><div class='wrap-subinput-element'><p class='subinput-element-title'>" + text + " " + number + "</p><div class='subinput-field'><select class='subinput-field-select'>" + print_ages(min_kids_age ,max_kids_age) + "</select></div></div></div>");
                    number++;
                };
            }else if(value < count && value != 0){
                $('.motor-subinputs').addClass('open');
                $('#kids-field').addClass('marked');
                var result = count - value;
                for(var i = 0; i < result; i++) {
                    $('.subinputs-list-element').last().remove();
                    number--;
                };
            };
        };       
    });

    if(isMobile()){
        $("#motor-form").submit(function(){
            $("#datein_hidden").val($("#fini_mobile").val().split("-").reverse().join("-"));
            $("#dateout_hidden").val($("#fout_mobile").val().split("-").reverse().join("-"));
        });

        function returnActualDate(){
            var actualDate = new Date();
            var year       = actualDate.getFullYear();
            var month      = actualDate.getMonth() + 1;
            var day        = actualDate.getDate();

            if(month < 10){
                month = "0" + month;
            }

            if(day < 10){
                day = "0" + day;
            }

            $("#fini_mobile").attr("min", year + "-" + month + "-" + day);
            $("#fini_mobile").val(year + "-" + month + "-" + day);
        }

        // Salida

        function returnDateOut(){
            var dateIn = new Date($("#fini_mobile").val());
            dateIn.setDate(dateIn.getDate() + 2);

            year  = dateIn.getFullYear();
            month = dateIn.getMonth() + 1;
            day   = dateIn.getDate();

            if(month < 10){
                month = "0" + month;
            }

            if(day < 10){
                day = "0" + day;
            }

            $("#fout_mobile").attr("min", $("#fini_mobile").val());
            $("#fout_mobile").val(year + "-" + month + "-" + day);
        }

        returnActualDate();
        returnDateOut();

        $("#fini_mobile").change(function(){
            returnDateOut();
        });

    }    if(isMobile()){
        $("#motor-form").submit(function(){
            $("#datein_hidden").val($("#fini_mobile").val().split("-").reverse().join("-"));
            $("#dateout_hidden").val($("#fout_mobile").val().split("-").reverse().join("-"));
        });

        function returnActualDate(){
            var actualDate = new Date();
            var year       = actualDate.getFullYear();
            var month      = actualDate.getMonth() + 1;
            var day        = actualDate.getDate();

            if(month < 10){
                month = "0" + month;
            }

            if(day < 10){
                day = "0" + day;
            }

            $("#fini_mobile").attr("min", year + "-" + month + "-" + day);
            $("#fini_mobile").val(year + "-" + month + "-" + day);
        }

        // Salida

        function returnDateOut(){
            var dateIn = new Date($("#fini_mobile").val());
            dateIn.setDate(dateIn.getDate() + 2);

            year  = dateIn.getFullYear();
            month = dateIn.getMonth() + 1;
            day   = dateIn.getDate();

            if(month < 10){
                month = "0" + month;
            }

            if(day < 10){
                day = "0" + day;
            }

            $("#fout_mobile").attr("min", $("#fini_mobile").val());
            $("#fout_mobile").val(year + "-" + month + "-" + day);
        }

        returnActualDate();
        returnDateOut();

        $("#fini_mobile").change(function(){
            returnDateOut();
        });

    }
});