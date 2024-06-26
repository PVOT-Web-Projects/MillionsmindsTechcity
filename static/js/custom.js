function setCookie(c_name, value, exdays) {
  $.cookie(c_name, value, { expires: exdays, path: "/" });
}

function isMobile() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/BlackBerry/)
  );
}

function getJsonTexts(gidPage, lang) {
  var json = null;
  $.ajax({
    async: false,
    global: false,
    url: "/backoffice/text/" + lang + ".json",
    dataType: "json",
    success: function (data) {
      json = data[gidPage];
    },
  });
  return json;
}

function onCaptchaLoaded() {
  var grecaptchav3_sitekey = "6LeYQwIaAAAAABTkK_for88BnawVhMQtA-yKgpx-";

  grecaptcha.render("recaptcha_container", {
    sitekey: grecaptchav3_sitekey,
    // "badge": "bottomleft",
    size: "invisible",
  });
}

$(document).on("ready", function () {

  $(window).on('load', function() {
    // Hide the loader
    var $loader = $('#loader');
    var $content = $('.content');

    $loader.hide();
    $content.show();
});


  $(".js-close-cookies").click(function () {
    setCookie("aviso", "1", 365);
  });
  $(".js-close-popup").click(function () {
    setCookie("advice", "1", 1);
  });

  $(".js-close-popup").click(function () {
    setCookie("pop-up", "1", 0.1);
  });

  $("form#news-form").submit(function (e) {
    e.preventDefault();
    console.log($(this).serialize());
    var lang = $("#lang-input").val();
    var tokens = getJsonTexts(0, lang);
    var alertContent = "";

    if ($("input[name=nombre]").val().length < 2) {
      alertContent += tokens[1201] + "\n";
    }

    if ($("input[name=apellidos]").val().length < 2) {
      alertContent += tokens[1202] + "\n";
    }

    if ($("input[name=email]").val().length > 0) {
      if (
        !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test($("input[name=email]").val())
      ) {
        alertContent += tokens[1203] + "\n";
      }
    }
    if (!$("#conditions_news").is(":checked")) {
      alertContent += tokens[1205] + "\n";
    }

    if (alertContent.length > 0) {
      alertContent = tokens[1200] + "\n\n" + alertContent;
      alert(alertContent);
    } else {
      var formData = new FormData($("#news-form").get(0));
      $(".modal-loading").show();
      $.ajax({
        url: "/include/sendMail.php",
        type: "POST",
        data: formData,
        success: function (data) {
          $(".modal-loading").hide();
          alert(tokens[1204]);
          $("form#news-form").trigger("reset");
        },
        cache: false,
        contentType: false,
        processData: false,
      });
    }
  });

  $("form#contact-form").submit(function (e) {
    e.preventDefault();

    var lang = $("#lang-input").val();
    var tokens = getJsonTexts(1171523235, lang);

    grecaptcha.ready(function () {
      grecaptcha.execute(0, { action: "send_contact" }).then(function (token) {
        var alertContent = "";

        if ($("select[name=tipo_consulta]").val().length < 1) {
          alertContent += tokens[6507] + "\n";
        }

        if ($("input[name=nombre]").val().length < 2) {
          alertContent += tokens[6501] + "\n";
        }

        if ($("input[name=apellidos]").val().length < 2) {
          alertContent += tokens[6502] + "\n";
        }

        if ($("input[name=email]").val().length > 0) {
          if (
            !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(
              $("input[name=email]").val()
            )
          ) {
            alertContent += tokens[6503] + "\n";
          }
        }

        if ($("input[name=telefono]").val() > 0) {
          if (
            !/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g.test(
              $("input[name=telefono]").val()
            )
          ) {
            alertContent += tokens[6504] + "\n";
          }
        }

        if ($("textarea[name=mensaje]").val().length < 2) {
          alertContent += tokens[6505] + "\n";
        }

        if (!$("#check_contact").is(":checked")) {
          alertContent += tokens[6511] + "\n";
        }

        if (alertContent.length > 0) {
          alertContent = tokens[6500] + "\n\n" + alertContent;
          alert(alertContent);
        } else {
          // Añade token al formulario
          $("form#contact-form").prepend(
            '<input type="hidden" name="token" value="' + token + '">'
          );
          $("form#contact-form").prepend(
            '<input type="hidden" name="action" value="send_contact">'
          );
          var formData = new FormData($("#contact-form").get(0));
          $(".modal-loading").show();
          $.ajax({
            url: "/include/sendMail.php",
            type: "POST",
            data: formData,
            success: function (data) {
              $(".modal-loading").hide();
              alert(tokens[6506]);
              $("form#contact-form").trigger("reset");
            },
            cache: false,
            contentType: false,
            processData: false,
          });
        }
      });
    });
  });

  const observer = new IntersectionObserver(
    function (entries, observer) {
      $.each(entries, function (index, entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass("in-view");
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    },
    {
      threshold: 0.1, // Trigger when at least 10% of the section is visible
    }
  );

  $(".imgAnim").each(function () {
    observer.observe(this);
  });

  var pageLocation = [],
    lastPage = null;
  $Zz = 0;

  // Centering elements
  $(".centerClass").css({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  });
  $(".pageWrapper").css({
    left: "327px",
    perspective: "1000px",
  });
  $(".page").css({
    transformStyle: "preserve-3d",
    position: "relative",
  });
  $(".back").css({
    transform: "rotateY(-180deg)",
  });
  $(".back, .front").css({
    backfaceVisibility: "hidden",
  });

  // Page click event
  $(".page").click(function () {
    if (
      pageLocation[this.id] === undefined ||
      pageLocation[this.id] == "right"
    ) {
      $Zz = $(".left").length + 1;
      $(this)
        .css({
          transform: "rotateY(-180deg)",
          transformOrigin: "-1px top",
          zIndex: $Zz,
          z: $Zz,
        })
        .addClass("left")
        .removeClass("right");
      pageLocation[this.id] = "left";
    } else {
      $Zz = $(".right").length + 1;
      $(this)
        .css({
          transform: "rotateY(0deg)",
          transformOrigin: "left top",
          zIndex: $Zz,
          z: $Zz,
        })
        .addClass("right")
        .removeClass("left");
      pageLocation[this.id] = "right";
    }
  });

  // Front hover event
  $(".front").hover(
    function () {
      $(this).find(".pageFoldRight").animate(
        {
          width: "50px",
          height: "50px",
          backgroundImage:
            "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff 50%,#ffffff 100%)",
        },
        300
      );
    },
    function () {
      $(this).find(".pageFoldRight").animate(
        {
          width: "0px",
          height: "0px",
        },
        300
      );
    }
  );

  // Back hover event
  $(".back").hover(
    function () {
      $(this).find(".pageFoldLeft").animate(
        {
          width: "50px",
          height: "50px",
          backgroundImage:
            "linear-gradient(135deg,  #ffffff 0%,#ffffff 50%,#f2f2f2 51%,#fefefe 100%)",
        },
        300
      );
    },
    function () {
      $(this).find(".pageFoldLeft").animate(
        {
          width: "0px",
          height: "0px",
        },
        300
      );
    }
  );
  $(".accordion_item:first-child .accordion_item_heading").addClass(
    "accordion_open"
  );

  $(".accordion_item_heading").click(function () {
    $(".accordion_item_heading").removeClass("accordion_open");

    var $text = $(this).next(".accordion_item_text");

    $(".accordion_item_text").not($text).slideUp(300);

    if ($text.is(":visible")) {
      $text.slideUp(300);
    } else {
      $text.slideDown(300);
      $(this).addClass("accordion_open");
    }
  });
});
$(document).ready(function() {
  // Hide all images initially except the first one
  $('.tab_images_wrapper > div').hide();
  $('.tab_images_wrapper > .tab_image1').show().addClass('active');

  // Add active class to the first button
  $('.tab_buttons_wrapper > div:first-child').addClass('active');

  // Function to handle tab switching
  function switchTab(index) {
    // Remove active class from all buttons and add to the clicked one
    $('.tab_buttons_wrapper ul > li').removeClass('active');
    $('.tab_buttons_wrapper ul > li').eq(index).addClass('active');

    // Hide all tab images and show the selected one
    $('.tab_images_wrapper > div').removeClass('active').hide();
    $('.tab_images_wrapper > div').eq(index).addClass('active').show();
  }

  // Handle click event on tab buttons
  $('.tab_buttons_wrapper ul > li').click(function() {
    // Get the index of the clicked button
    const index = $(this).index();
    switchTab(index);

    // Reset the interval to start the timer over
    clearInterval(autoSwitch);
    autoSwitch = setInterval(autoChangeTab, 5000);
  });

  // Auto switch tabs every 5 seconds
  let currentIndex = 0;
  function autoChangeTab() {
    currentIndex = (currentIndex + 1) % $('.tab_buttons_wrapper ul > li').length;
    switchTab(currentIndex);
  }
  let autoSwitch = setInterval(autoChangeTab, 5000);
});