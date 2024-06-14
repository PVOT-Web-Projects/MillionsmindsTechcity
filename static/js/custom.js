function setCookie(c_name, value, exdays){
    $.cookie(c_name, value, {expires: exdays, path: "/"});
}

function isMobile(){
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/BlackBerry/);
}

function getJsonTexts(gidPage, lang){
    var json = null;
    $.ajax({
        "async": false,
        "global": false,
        "url": "/backoffice/text/" + lang + ".json",
        "dataType": "json",
        "success": function(data){
            json = data[gidPage];
        }
    });
    return json;
}

function onCaptchaLoaded(){
    var grecaptchav3_sitekey = "6LeYQwIaAAAAABTkK_for88BnawVhMQtA-yKgpx-";

    grecaptcha.render(
        "recaptcha_container",
        {
            "sitekey": grecaptchav3_sitekey,
            // "badge": "bottomleft",
            "size": "invisible"
        }
    );
}

$(document).on("ready", function(){

    $(".js-close-cookies").click(function(){
        setCookie("aviso", "1", 365);
    });
    $(".js-close-popup").click(function(){
        setCookie("advice", "1", 1);
    });


    $(".js-close-popup").click(function(){
        setCookie("pop-up", "1", 0.1);
    });


    $('form#news-form').submit(function(e){
       e.preventDefault();
       console.log($(this).serialize());
        var lang   = $("#lang-input").val();
        var tokens = getJsonTexts(0, lang);
        var alertContent = "";

        if($("input[name=nombre]").val().length < 2){
            alertContent += tokens[1201] + "\n";
        }

        if($("input[name=apellidos]").val().length < 2){
            alertContent += tokens[1202] + "\n";
        }

        if($("input[name=email]").val().length > 0){
            if(!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test($("input[name=email]").val())){
                alertContent += tokens[1203] + "\n";
            }
        }
        if(!$("#conditions_news").is(":checked")){
            alertContent += tokens[1205] + "\n";
        }

        if(alertContent.length > 0){
            alertContent = tokens[1200] + "\n\n" + alertContent;
            alert(alertContent);
        }else{

            var formData = new FormData($("#news-form").get(0));
            $(".modal-loading").show();
            $.ajax({
                url: "/include/sendMail.php",
                type: "POST",
                data: formData,
                success: function(data){
                    $(".modal-loading").hide();
                    alert(tokens[1204]);
                    $("form#news-form").trigger("reset");
                },
                cache: false,
                contentType: false,
                processData: false
            });
        }
    });


    $("form#contact-form").submit(function(e){
        e.preventDefault();

        var lang   = $("#lang-input").val();
        var tokens = getJsonTexts(1171523235, lang);

        grecaptcha.ready(function(){
            grecaptcha.execute(0, {action: "send_contact"}).then(function(token){
                var alertContent = "";

                if($("select[name=tipo_consulta]").val().length < 1){
                    alertContent += tokens[6507] + "\n";
                }

                if($("input[name=nombre]").val().length < 2){
                    alertContent += tokens[6501] + "\n";
                }

                if($("input[name=apellidos]").val().length < 2){
                    alertContent += tokens[6502] + "\n";
                }

                if($("input[name=email]").val().length > 0){
                    if(!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test($("input[name=email]").val())){
                        alertContent += tokens[6503] + "\n";
                    }
                }

                if($("input[name=telefono]").val() > 0){
                    if(!/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g.test($("input[name=telefono]").val())){
                        alertContent += tokens[6504] + "\n";
                    }
                }

                if($("textarea[name=mensaje]").val().length < 2){
                    alertContent += tokens[6505] + "\n";
                }

                if(!$("#check_contact").is(":checked")){
                    alertContent += tokens[6511] + "\n";
                }

                if(alertContent.length > 0){
                    alertContent = tokens[6500] + "\n\n" + alertContent;
                    alert(alertContent);
                }else{
                    // Añade token al formulario
                    $("form#contact-form").prepend("<input type=\"hidden\" name=\"token\" value=\"" + token + "\">");
                    $("form#contact-form").prepend("<input type=\"hidden\" name=\"action\" value=\"send_contact\">");
                    var formData = new FormData($("#contact-form").get(0));
                    $(".modal-loading").show();
                    $.ajax({
                        url: "/include/sendMail.php",
                        type: "POST",
                        data: formData,
                        success: function(data){
                            $(".modal-loading").hide();
                            alert(tokens[6506]);
                            $("form#contact-form").trigger("reset");
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                }
            });
        });
    });



});
