$(document).ready(function() {

/* CALC WINDOWS WIDTH MINUS SCROLL BAR */
var innerWidth = window.innerWidth;

//* INIT FUNCTIONS *//
    var resizeTimer1;
    var body_init = document.getElementsByTagName("BODY")[0];
    body_init.classList.add("resize-on");
    clearTimeout(resizeTimer1);
    resizeTimer1 = setTimeout(function() {
        body_init.classList.remove("resize-on");
    }, 150);
    
    var resizeTimer;
    window.onresize = function(e) {
        var body = document.getElementsByTagName("BODY")[0];
        body.classList.add("resize-on");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            body.classList.remove("resize-on");
        }, 150);
    };
    
//* SLICK SLIDERS *//
    $('.js-float-advantages').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.advantages-box-counter').find('.counter-num').text(i);
            $('.advantages-box-counter').find('.counter-total').text(slick.slideCount);
        });
    $('.js-float-advantages').slick({
        dots: false,
        arrows: true,
        prevArrow:"<div class='btn-circle icon-arrow_izquierda slick-btn prev slick-prev'></div>",
        nextArrow:"<div class='btn-circle icon-arrow_derecha slick-btn next slick-next'></div>",
        appendArrows:".advantages-box-arrows",
        infinite: true,
        useTransform: true,
        fade: true,
        cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.js-features-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.features-gallery-counter').find('.counter-num').text(i);
            $('.features-gallery-counter').find('.counter-total').text(slick.slideCount);
        });
    $('.js-features-slider').slick({
        dots: false,
        arrows: true,
        prevArrow:"<div class='btn-circle slick-btn prev slick-prev'></div>",
        nextArrow:"<div class='btn-circle slick-btn next slick-next'></div>",
        infinite: true,
        useTransform: true,
        fade: true,
        cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
    });
    $('.js-promotions-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.promotions-header-counter').find('.counter-num').text(i);
            $('.promotions-header-counter').find('.counter-total').text(slick.slideCount);
        });
    $('.js-promotions-slider').slick({
        dots: false,
        arrows: true,
        prevArrow:"<div class='btn-circle slick-btn prev slick-prev'></div>",
        nextArrow:"<div class='btn-circle slick-btn next slick-next'></div>",
        infinite: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        speed: 750,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.js-experiences-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.experiences-header-counter').find('.counter-num').text(i);
            $('.experiences-header-counter').find('.counter-total').text(slick.slideCount);
        });
    $('.js-experiences-slider').slick({
        dots: false,
        arrows: true,
        prevArrow:"<div class='btn-circle slick-btn prev slick-prev'></div>",
        nextArrow:"<div class='btn-circle slick-btn next slick-next'></div>",
        infinite: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.js-products-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.products-header-counter').find('.counter-num').text(i);
            $('.products-header-counter').find('.counter-total').text(slick.slideCount);
        });
    $('.js-products-slider').slick({
        dots: false,
        arrows: true,
        prevArrow:"<div class='btn-circle slick-btn prev slick-prev'></div>",
        nextArrow:"<div class='btn-circle slick-btn next slick-next'></div>",
        infinite: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.js-top-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        speed: 750,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
    });
    $('.js-images-slider').each(function(){
        var slider = $(this);
        var info = slider.parent().siblings('.galleries-content-info').find('.js-info-slider');
        var counter = slider.parents('.galleries-module').find('.galleries-info-counter');
        
        slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            counter.find('.counter-num').text(i);
            counter.find('.counter-total').text(slick.slideCount);
        });
        if(info.length != 0){
            slider.slick({
                dots: false,
                arrows: true,
                prevArrow:"<div class='btn-circle slick-btn prev slick-prev'></div>",
                nextArrow:"<div class='btn-circle slick-btn next slick-next'></div>",
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
                speed: 750,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                asNavFor: info,
                responsive: [
                    {
                        breakpoint: 1279,
                        settings: {
                            arrows: true,
                        }
                    },
                ]
            });
            info.slick({
                dots: false,
                arrows: false,
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
                speed: 750,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                draggable: false,
                swipe: false,
                swipeToSlide: false,
                touchMove: false,
            });
        }else{
            slider.slick({
                dots: false,
                arrows: true,
                prevArrow:"<div class='btn-circle slick-btn prev slick-prev'></div>",
                nextArrow:"<div class='btn-circle slick-btn next slick-next'></div>",
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
                speed: 750,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 1279,
                        settings: {
                            arrows: true,
                        }
                    },
                ]
            });
        }
    });
    
    function lazyload(){
        $(".lazyload-static").each(function(){
            var element = $(this);
            
            //onload: detect window position
            var img_position = element.offset().top;
            var window_fromtop = $(window).scrollTop();
            var window_position = window_fromtop + $(window).outerHeight(true) + 200;
            var path = element.attr('data-filename');
    
            //onwidth-breakpoints: change img url
            if(img_position <= window_position && element.is(':visible')){
                if($(this).is("img")){
                    $(this).attr("src",path);
                }else if($(this).is("a")){
                    $(this).attr("href",path);
                }else{
                    $(this).css("background-image", "url(" + path + ")");
                }
                $(this).css('background-color', 'transparent');
            }
        });
    }
    lazyload();
    $(window).scroll(function(){
        lazyload();
    });
    
    /* galleries module nav */
    function galleries_nav(){
        $('.galleries-nav-pointer').each(function(){
            var pointer = $(this);
            var module = pointer.parents('.galleries-module');
            var option = pointer.siblings('.wrap-galleries-nav').children('.js-slider');
            
            function nav_pointer(){
                var selected = pointer.siblings('.wrap-galleries-nav').children('.js-slider.active');
                var position = selected.position().left;
                var size = selected.width() / 2;
                var calc = position + size;
                pointer.css('left', calc + 'px');
            };
            setTimeout(function(){
                nav_pointer();
                pointer.css('opacity', '1');
            }, 500)
            
            option.click(function(){
                $('html, body').animate({
                    scrollTop: (module.offset().top - 80)
                },1000);
                module.find('.js-images-slider').slick("slickGoTo", $(this).data("slide"));
                option.removeClass("active");
                $(this).addClass("active");
                var dataIndex = module.find(".slick-active").data("slick-index");
                nav_pointer();
            });
            module.find('.slick-btn').click(function(){
                var element = module.find('.images-slider-element.slick-active');
                var slick = element.attr('data-slick-index');
                var selector = module.find("[data-slide='" + slick + "']");
                option.removeClass("active");
                console.log(selector)
                selector.addClass('active');
                nav_pointer();
            });
        });
    }
    if($('.galleries-nav-pointer').length && $('.galleries-nav-pointer').is(':visible')){
        galleries_nav();
    }
    
    //* NAV *//
    function calc_whitemenu(){
        if($('body').hasClass('home')){
            var space = $('.top-module').outerHeight(true) - 1;
            var position = $(window).scrollTop();
            if(position <= space){
                $('body').addClass('white-menu');
            }else{
                $('body').removeClass('white-menu');
            }
        }
    }
    calc_whitemenu();
    function calc_whitesubmenu(){
        if($('body').hasClass('full-intern')){
            var space = $('.top-module').outerHeight(true) - 1;
            var position = $(window).scrollTop();
            if(position <= space){
                $('body').addClass('submenu-white');
            }else{
                $('body').removeClass('submenu-white');
            }
        }
    }
    calc_whitesubmenu();
    $('.js-open-menu').click(function(){
        if(!$('body').hasClass('open-menu')){
            $('body').addClass('open-menu');
            $('body').addClass('noscroll');
            $('body').removeClass('white-menu');
        }else{
            $('body').removeClass('open-menu');
            $('body').removeClass('noscroll');
            setTimeout(function(){
                calc_whitemenu();
            }, 700);
        }
    });
    $('.js-close-menu').click(function(){
        $('body').removeClass('open-menu');
        $('body').removeClass('noscroll');
        setTimeout(function(){
            calc_whitemenu();
        }, 700);
    });
    $('.js-swap-placehoder').mouseenter(function(){
        var element = $(this);
        var placeholder = element.attr('data-placeholder');
        $('.dropdown-gallery-img').css('background-image', 'url("'+ placeholder +'")');
    }).mouseleave(function() {
        $('.dropdown-gallery-img').css('background-image', '');
    });
    
    //* POPUPS *//
    $('.js-open-popup').click(function(){
        var btn = $(this);
        var selection = btn.attr('data-selection');
        $('*[data-popup="' + selection + '"]').addClass('open');
        if($(this).hasClass('full-page-popup')){
            $('body').removeClass('white-menu');
            $('body').addClass('noscroll');
        }
        if(window.innerWidth <= 1024){
            $('body').addClass('noscroll');
        }
    });
    $('.js-close-popup').click(function(){
        $('.popup-module').removeClass('open');
        $('body').removeClass('noscroll');
        calc_whitemenu();
    });
    $('.js-login-section').click(function(){
        var btn = $(this);
        var selection = btn.attr('data-section');
        $('.login-box').removeClass('active');
        $('#' + selection).addClass('active');
        $('.login-nav-element').removeClass('active');
        btn.addClass('active');
    });
    if($('[data-popup="advice"]').length){
        setTimeout(function(){
            $('[data-popup="advice"]').addClass('open');
            if(window.innerWidth <= 1024){
                $('body').addClass('noscroll');
            }
        }, 2000);
    }
    
    //* GENERAL EVENTS *//
    if(window.location.hash) {
        var hash = window.location.hash;
        var nav_space = $('.page-subnav').outerHeight(true) + $('.page-nav').outerHeight(true);
        $('html, body').animate({
            scrollTop: ($(hash).offset().top - nav_space)
        },1000);
    }
    $('.js-scrollto').click(function(){
        var element = $(this).attr('data-scroll');
        if(window.innerWidth >= 1024){
            if(element === 'section1'){
                $('html, body').animate({
                    scrollTop: ($('#' + element).offset().top)
            }   ,1000);
            }else{
            var space = $('.page-subnav').outerHeight(true) + $('.page-nav').outerHeight(true);
            $('html, body').animate({
                scrollTop: ($('#' + element).offset().top - space)
            },1000);
            }
        }else{
            $('html, body').animate({
                scrollTop: ($('#' + element).offset().top)
            },1000);
        }
    });
    $('.js-scroll-down').click(function(){
        $('html, body').animate({
            scrollTop: ($('.top-module').outerHeight(true))
        },1000);
    });
    $('.js-show-moretext').click(function(){
        $('.intro-module').addClass('show-moreinfo');
        $('html, body').animate({
            scrollTop: ($('.intro-moreinfo').offset().top - 20)
        },1000);
    });
    $('.js-hide-moretext').click(function(){
        $('.intro-module').removeClass('show-moreinfo');
        $('html, body').animate({
            scrollTop: ($('.intro-info-content').offset().top - 80)
        },0);
    });
    setTimeout(function(){
        $('.popup-offer').addClass('active');
    }, 2000);
    $('.js-close-offer').click(function(){
        $('.popup-offer').removeClass('active');
    });
    function calc_advantages(){
        var total = $('.advantages-element').length;
        var container = $('.advantages-module .wrap-advantages-content');
        var height;
        if(total <= 6){
            setTimeout(function(){
                if(window.innerWidth < 1280){
                   height = $('.advantages-element:first-child').outerHeight(true) + 1;
                }else{
                    height = Math.max($('.advantages-element:first-child').height() , $('.advantages-element:nth-child(2)').height() , $('.advantages-element:nth-child(3)').height());
                }
                container.css('height', (height + 1) + 'px');
            }, 50);
        }else{
            setTimeout(function(){
                if(window.innerWidth < 1280){
                   height = $('.advantages-element:first-child').outerHeight(true) + $('.advantages-element:nth-child(2)').outerHeight(true) + $('.advantages-element:nth-child(3)').outerHeight(true) + 1;
                }else{
                    var max1 = Math.max($('.advantages-element:first-child').height() , $('.advantages-element:nth-child(2)').height() , $('.advantages-element:nth-child(3)').height());
                    var max2 = Math.max($('.advantages-element:nth-child(4)').height() , $('.advantages-element:nth-child(5)').height() , $('.advantages-element:nth-child(6)').height());
                    height = max1 + max2;
                }
                container.css('height', (height + 1) + 'px');
            }, 50);
        }
        if(total <= 3){
            $('.advantages-btns').css('display', 'none');
        }
    }
    if($('.advantages-module').length){
        calc_advantages();
    }
    $('.js-open-advantages').click(function(){
        $('.advantages-module').addClass('show-advantages');
        $('html, body').animate({
            scrollTop: ($('.advantages-content').offset().top)
        },1000);
    });
    $('.js-close-advantages').click(function(){
        $('.advantages-module').removeClass('show-advantages');
        $('html, body').animate({
            scrollTop: ($('.advantages-module').offset().top)
        },1000);
    });
    function footer_multimedia(){
        var position = $(window).scrollTop() + $('.page-nav').outerHeight(true);
        var point = $('.footer-container').offset().top;
        var stop_point = $('.footer-end').offset().top;
        var stop = $(window).scrollTop() + $(window).outerHeight(true);
        if(position >= point){
            $('.footer-multimedia').addClass('fixed');
        }else{
            $('.footer-multimedia').removeClass('fixed');
        }
        if(stop_point <= stop){
            $('.footer-multimedia').addClass('stop');
        }else{
            $('.footer-multimedia').removeClass('stop');
        }
    }
    if($('.footer-multimedia').length && $('.footer-multimedia').is(':visible')){
        footer_multimedia();
    }
    $('.js-scroll-top').click(function(){
        $('html, body').animate({
            scrollTop: ($('body').offset().top)
        },1000);
    });
    function features_gallery(){
        var position = $(window).scrollTop() + $('.page-nav').outerHeight(true) + $('.page-subnav').outerHeight(true);
        var point = $('.features-module').offset().top;
        var stop_point = $('.features-end').offset().top + 100;
        var stop = $(window).scrollTop() + $(window).outerHeight(true);
        if(position >= point){
            $('.features-gallery').addClass('fixed');
        }else{
            $('.features-gallery').removeClass('fixed');
        }
        if(stop_point <= stop){
            $('.features-gallery').addClass('stop');
        }else{
            $('.features-gallery').removeClass('stop');
        }
    }
    if($('.features-gallery').length && window.innerWidth >= 1280){
        features_gallery();
    };
    function card_gallery(){
        var stop_point = $('.card-gallery-end').offset().top;
        var stop = $(window).scrollTop() + $(window).outerHeight(true);
        if(stop_point <= stop){
            $('.card-gallery').addClass('stop');
            $('.card-info-socials').addClass('stop');
        }else{
            $('.card-gallery').removeClass('stop');
            $('.card-info-socials').removeClass('stop');
        }
    }
    if($('.card-gallery').length && window.innerWidth >= 1280){
        card_gallery();
    };
    if($('.gallery-page').length){
        // counter //
        var total = $('.gallery-list-element').length;
        $('.gallery-counter-number').text(total);
        // galerry nav //
        $('.js-gallery-main').click(function(){
            $('.gallery-subnav-box.main').addClass('open');
            $('body').addClass('noscroll');
        });
        $('.js-close-gmain').click(function(){
            $('.gallery-subnav-box.main').removeClass('open');
            $('body').removeClass('noscroll');
        });
        $('.js-gallery-rooms').click(function(){
            $('.gallery-subnav-box.rooms').addClass('open');
            $('body').addClass('noscroll');
        });
        $('.js-close-grooms').click(function(){
            $('.gallery-subnav-box.rooms').removeClass('open');
            if(!$('.gallery-subnav-box.main').hasClass('open')){
               $('body').removeClass('noscroll');
            }
        });
        $('.js-filter-gallery').click(function(){
            $('.gallery-subnav-box.main').removeClass('open');
            $('.gallery-subnav-box.rooms').removeClass('open');
            $('body').removeClass('noscroll');
            $('.gallery-subnav-element').removeClass('active');
            var selector = $(this);
            var filter = selector.attr('data-filter');
            selector.addClass('active');
            if(filter === 'all'){
                $('.gallery-list-element').removeClass('hidden');
                $('.gallery-list-element.video').removeClass('show');
                $('.gallery-list-element a').attr('data-lightbox', 'all');
            }else if(filter === 'videos'){
                $('.gallery-list-element').addClass('hidden');
                $('.gallery-list-element.video').removeClass('hidden');
                $('.gallery-list-element.video').addClass('show');
            }else{
                $('.gallery-list-element').addClass('hidden');
                $('.gallery-list-element.video').removeClass('show');
                $('.gallery-list-element[data-img="' + filter + '"]').removeClass('hidden');
                $('.gallery-list-element[data-img="' + filter + '"] a').attr('data-lightbox', filter);
            };
            setTimeout(function(){
                var counter = $('.gallery-list-element').not('.hidden');
                var total = counter.length;
                $('.gallery-counter-number').text(total);
                $('body').trigger('scroll');
            },100);
        });
        $('.gallery-list-element a').click(function(){
            setTimeout(function(){
                $(window).trigger('resize');
            }, 100);
        });
    }
    /* cookies */
    $('.cookies-module').addClass('display');
    setTimeout(function(){
        $('.cookies-module').addClass('show');
    },50);
    $('.js-close-cookies').click(function(){
        $('.cookies-module').removeClass('show');
        setTimeout(function(){
            $('.cookies-module').removeClass('display');
        },700);
    });
    function load_map(){
        var load_map_check = 0;
        if($('body').hasClass('home') && !$('#footer_map').hasClass('loaded') && window.innerWidth >= 1280){
            $('#footer_map').addClass('loaded');
            $.when(
                $.getScript( "https://maps.google.com/maps/api/js?key=AIzaSyAoFfF-qPFMvlEs8Igu6NnDXESdOeL-gqw" ),
                $.getScript( "/static/js/vendor/gmaps.min.js" ),
                $.Deferred(function( deferred ){
                    $( deferred.resolve );
                })
            ).done(function(){
                function initmap(){
                    var contact_map;
                    function start_contact_map(){
                        contact_map = new GMaps({
                            div: '#footer_map',
                            lat: '39.3552916',
                            lng: '3.1280862',
                            scrollwheel: false, 
                            zoom: 17,
                        });
                        contact_map.drawOverlay({
                            lat: '39.3552916',
                            lng: '3.1280862',
                            content: '<div class="map-marker"></div>'
                        });
                    }
                    
                    if($('#footer_map').is(':visible') ){
                        start_contact_map();
                    };
                };
                initmap();
            });
        }
    };
    if($('#footer_map').length){
        var map_position = $('#footer_map').offset().top;
        var map_window_fromtop = $(window).scrollTop();
        var map_window_position = map_window_fromtop + $(window).outerHeight(true) + 200;
        if(map_position <= map_window_position){
            load_map();
        };
    }
    
//* RESIZE EVENTS *//
    var width_checker = window.innerWidth;
    $(window).resize(function(){
        if(width_checker != $(window).innerWidth()){
            if($('.galleries-nav-pointer').length && $('.galleries-nav-pointer').is(':visible')){
                galleries_nav();
            }
            if($('.advantages-module').length){
                calc_advantages();
            }
        }
    });

//* SCROLL EVENTS *//
    $(window).scroll(function(){
        calc_whitemenu();
        calc_whitesubmenu();
        if($('.footer-multimedia').length && $('.footer-multimedia').is(':visible')){
            footer_multimedia();
        }
        if($('.features-gallery').length && window.innerWidth >= 1280){
            features_gallery();
        };
        if($('.card-gallery').length && window.innerWidth >= 1280){
            card_gallery();
        };
        if($('#footer_map').length){
            map_position = $('#footer_map').offset().top;
            map_window_fromtop = $(window).scrollTop();
            map_window_position = map_window_fromtop + $(window).outerHeight(true) + 200;
            if(map_position <= map_window_position){
                load_map();
            };
        }
    });
    
//* Document ready END *//
});

$(window).load(function() {

//* Window load END *//
});