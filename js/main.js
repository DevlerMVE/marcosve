(function ($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.project-item').addClass('mobile');
        $('.project-hover').addClass('mobile');
        $('.project-hover .inside').addClass('mobile');
    }
    "use strict";
    $('.navigation').singlePageNav({
        currentClass: 'active'
    });

    $('.toggle-menu').click(function () {
        $('.responsive-menu').stop(true, true).slideToggle();
        return false;
    });

    $('a.toggle-menu').click(function () {
        $('#nav-icon').toggleClass('open');
    });

    $('.atomatic_scroll').click(function () {
        if ($(this).hasClass('button-collapse'))return;
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });


    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).removeClass('animated ' + animationName).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
    Pace.on('done', function () {
        //wait a little time to hidde the div
        setTimeout(function () {
            $('.cover').fadeOut('slow');
        }, 200);

        //wait a more time to make appear the elements
        setTimeout(function () {
            $('.welcome-text h2').css('display', 'block').animateCss('fadeIn');
            $('.welcome-text h5').css('display', 'block').animateCss('fadeInLeft');
            $('.welcome-text h3').css('display', 'block').animateCss('fadeInRight');
            $('.about.container a').css('display', 'block').animateCss('fadeInUpBig');
            $('hr#vertical').css('display', 'block').animateCss('fadeInUpBig');
        }, 500);

        scrollTopAnimations();

        $(document).scroll(function () {
            scrollTopAnimations();
        });

    });


})(jQuery);
/**
 * Scroll Top animation.
 * funtion that check if a element need appear
 * */
var scroll_start = 0;

var gotop = false;
var gotop_top = $('#about').offset();

var chart = false;
var charts_top = $('#charts').offset();

var skills = false;
var skill_top = $('.skill div span').offset();

var experience = false;
var experience_top = $('#experience').offset();

var plexus = false;
var plexus_top = $('#plexus').offset();

var balidea_exp = false;
var balidea_exp_top = $('#balidea-exp').offset();

var balidea_prc = false;
var balidea_prc_top = $('#balidea-prc').offset();

var education = false;
var education_top = $('#education').offset();

var daw = false;
var daw_top = $('#daw').offset();

var ios = false;
var ios_top = $('#ios').offset();

var languages = false;
var languages_top = $('#languages').offset();

var dam = false;
var dam_top = $('#dam').offset();

var highschool = false;
var highschool_top = $('#highschool').offset();

var footer = false;
var footer_top = $('.col-md-12.text-center').offset();

function scrollTopAnimations() {
    scroll_start = $(this).scrollTop() + $(window).height();

    /*
     * scroll top gotop
     * */
    if (scroll_start > gotop_top.top && !gotop) {
        $('.gotop').fadeIn();
        gotop = true;
    } else if (scroll_start <= gotop_top.top) {
        $('.gotop').fadeOut();
        gotop = false;
    }

    /*
     * scroll top charts
     * */
    if (scroll_start > charts_top.top && !chart) {
        setCircleChart(0.7, $('#html_five'));
        setCircleChart(0.65, $('#android'));
        setCircleChart(0.75, $('#design'));
        chart = true;
    }
    /*
     * scroll top skill
     * */
    if (scroll_start > skill_top.top && !skills) {
        $('.skill div span').each(function () {
            $(this).animate({
                width: $(this).attr('data-width') + '%'
            }, 1000, function () {
                // Animation complete.
            });
            skills = true;
        });
    }

    /*
     * scroll top experience
     * */
    if (scroll_start > experience_top.top && !experience) {
        $('#experience .cd-timeline').css('visibility', 'inherit').animateCss('fadeIn');
        experience = true;
    }
    /*
     * scroll top plexus
     * */
    if (scroll_start > plexus_top.top && !plexus) {
        $('#plexus').css('visibility', 'inherit').animateCss('bounceIn');
        $('.plexus').css('visibility', 'inherit').animateCss('fadeInLeft');
        plexus = true;
    }

    /*
     * scroll top balidea-exp
     * */
    if (scroll_start > balidea_exp_top.top && !balidea_exp) {
        $('#balidea-exp').css('visibility', 'inherit').animateCss('bounceIn');
        $('.balidea-exp').css('visibility', 'inherit').animateCss('fadeInRight');
        balidea_exp = true;
    }
    /*
     * scroll top balidea-prc
     * */
    if (scroll_start > balidea_prc_top.top && !balidea_prc) {
        $('#balidea-prc').css('visibility', 'inherit').animateCss('bounceIn');
        $('.balidea-prc').css('visibility', 'inherit').animateCss('fadeInLeft');
        balidea_prc = true;
    }
    /*
     * scroll top education
     * */
    if (scroll_start > education_top.top && !education) {
        $('#education .cd-timeline').css('visibility', 'inherit').animateCss('fadeIn');
        education = true;
    }
    /*
     * scroll top daw
     * */
    if (scroll_start > daw_top.top && !daw) {
        $('#daw').css('visibility', 'inherit').animateCss('bounceIn');
        $('.daw').css('visibility', 'inherit').animateCss('fadeInRight');
        daw = true;
    }
    /*
     * scroll top ios
     * */
    if (scroll_start > ios_top.top && !ios) {
        $('#ios').css('visibility', 'inherit').animateCss('bounceIn');
        $('.ios').css('visibility', 'inherit').animateCss('fadeInLeft');
        ios = true;
    }

    /*
     * scroll top languages
     * */
    if (scroll_start > languages_top.top && !languages) {
        $('#languages').css('visibility', 'inherit').animateCss('bounceIn');
        $('.languages').css('visibility', 'inherit').animateCss('fadeInUp');
        languages = true;
    }

    /*
     * scroll top dam
     * */
    if (scroll_start > dam_top.top && !dam) {
        $('#dam').css('visibility', 'inherit').animateCss('bounceIn');
        $('.dam').css('visibility', 'inherit').animateCss('fadeInDown');
        dam = true;
    }

    /*
     * scroll top highschooll
     * */
    if (scroll_start > highschool_top.top && !highschool) {
        $('#highschool').css('visibility', 'inherit').animateCss('bounceIn');
        $('.highschool').css('visibility', 'inherit').animateCss('fadeInRight');
        highschool = true;
    }

    /*
     * Scroll top footer
     * */
    if (scroll_start >= footer_top.top + $('.col-md-12.text-center').height() && !footer) {
        $('.gotop').animate({
            bottom: '75px',
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            backgroundSize: '50%'
        }, 500, function () {
            // Animation complete.
        });
        footer = true;
    } else if (scroll_start <= footer_top.top + $('.col-md-12.text-center').height() && footer) {
        $('.gotop').animate({
            bottom: '25px',
            borderRadius: '0',
            width: '45px',
            height: '45px',
            backgroundSize: '60%'
        }, 500, function () {
            // Animation complete.
        });
        footer = false;
    }
}

/*
 var xH;
 $('.project-item').hover(
 function () {
 xH = $(this).children("img").css("height");
 xH = parseInt(xH);
 xH = xH - 292;
 xH = "-" + xH + "px";
 $(this).children("img").css("top", xH);
 }, function () {
 $(this).children("img").css("top", "0px");
 });
 */