(function () {
    $('.btn-floating.btn-large.waves-effect.waves-light.red.darken-4').click(function () {
        console.log($(window).width() + " " + $(window).height());

    });
    $('#navbar a').click(function () {
        if ($(this).hasClass('button-collapse'))return;
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });


    $('#gallery .row .col.m3 .picture .overlay').hover(function () {
        $(this).css('background-color', 'rgba(183, 28, 28, 0.49)');
        $(this).children('.plus').css('display', 'block');
    }, function () {
        $(this).css('background-color', 'transparent');
        $(this).children('.plus').css('display', 'none');
    });


    setheights();

    var mediaquery = window.matchMedia("(max-width: 992px)");
    mediaquery.addListener(handleWidthChange);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.parallax-container#gallery .parallax img').attr('src', 'img/background-m.jpg')
        $('.parallax-container#video .overlay').css('background-color', 'rgba(31, 25, 25, 0.93)');
        //remove if it's a phone.
        $('#contactus .input-field.col.s6 #phone').parent().remove();
        $('#gallery .row .col.m3 .picture .overlay').remove();
        $('.fixed-action-btn').remove();
        $('#video-wrap').remove();
    }

    $(window).load(function () {
        scrollefect();
        setTimeout(function () {
            $('.full').fadeOut('slow');
        }, 700);
        setTimeout(function () {
            $('.full').remove();
        }, 3000);
    });

    $(document).scroll(function () {
        scrollefect();
    });

}());

var scroll_start = 0;

var offset = $('#index-banner').offset();

var gotop = false;
var gotop_top = $('#main').offset();

function scrollefect() {

    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top) {
        $('#navbar').addClass('nav-color');
        $('#logo').removeClass('hidden');
        $('nav ul a').removeClass('white-text');
        $('.button-collapse').removeClass('white-text');
        $('nav.navbar-fixed').addClass('new').css('position', 'fixed');

    } else {
        $('#navbar').removeClass('nav-color');
        $('#logo').addClass('hidden');
        $('nav ul a').addClass('white-text');
        $('.button-collapse').addClass('white-text');
        $('nav.navbar-fixed').removeClass('new').css('position', 'absolute');
    }

    if (scroll_start > gotop_top.top && !gotop) {
        $('.btn-floating.btn-large.waves-effect.waves-light.red.darken-4').show("scale", {}, 1000);
        gotop = true;
    }
}

function setheights() {
    $('#ourclass .row .col.m6 .picture').css('height', $('#ourclass .row .col.m6 .text_container').outerHeight() + 'px');
    $('.parallax-container#gallery').css('height', $('#gallery .row').height() + 90 + 'px');
    $('.parallax-container#video').css('height', $('.parallax-container#video .overlay .container').height() + 'px');

}

function handleWidthChange(mediaquery) {
    if (mediaquery.matches) {

    } else {
        $('#contactus .input-field.col.s6 #phone').parent().css("display", "block");
    }
}