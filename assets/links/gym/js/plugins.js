/**
 * Created by Marco on 27/07/2016.
 */
(function () {
    $('#ourclass .col.m6 .picture').imagefill({runOnce: true});
    $('#gallery  .col.m3 .picture').imagefill({runOnce: true});
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.button-collapse').sideNav({
        menuWidth: 300,
        closeOnClick: true
    });

    $('#gallery .picture a').magnificPopup({
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        },
        callbacks: {
            open: function () {
            },
            close: function () {
                // fixed a bug on map.
                $('#map').css('position', 'static');
            }
        }
    });

    $(window).load(function () {
        $('#my-video').backgroundVideo({
            parallax: true,
            parallaxOptions: {
                offset: 60,
                effect: 10
            }
        });
    });
    $('.carousel.carousel-slider').carousel({full_width: true});
    var options = [
        {
            selector: '#video',
            offset: 200,
            callback: function () {
                $('.count').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
        }
    ];
    Materialize.scrollFire(options);


})(jQuery, window, document);

//MAPA
function initMap() {
    var center = ($(window).width() > 992) ? {lat: 42.880194, lng: -8.553680} : {lat: 42.880501, lng: -8.545654};
    var location_pos = {lat: 42.880501, lng: -8.545654};
    var mapOptions = {
        scrollwheel: false,
        zoom: 17,
        center: center,
        scroll: {x: $(window).scrollLeft(), y: $(window).scrollTop()}
    };
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: location_pos,
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADP0lEQVRoQ+1ZTU5bQQy2QxZUIDXdIeZJhRM0nKCwqfSyKT0BcILmCPQEpScIOQGweU/qBjgBcAKoNIPYNUhE7SLFlaMEhTR5Y8+btEViNlEUj8ef/fmbnyA88YFPPH54BvCvKxi1Al+NqfcAthCxTkQ1/mSARHSOiB3+rAK03zl3Hgt4FAC5MVsAsAuIK6LAiK7YPnWuLbIvMCoFYJDx1jDT2mAGFdkpU5FgANny8iZUKi0EqGkDH7UngA7c3+80rq8PQ/wEAeDgsVI5CFmwYM5Gau2J1qcaQJ82iMdlMz8eKFeiSrShpZMaQGbMWSjnfdnlnmg4t+azG/1dBSA3ZhsQW5oF1LZEO6lz+9J5WgCXYqmURvAHl+gqdW5VOl0MgLn/C/FM6PgIAPaGTZknyToANAHgvWT+HNGatBfEADJj9hDxozeAAgpIKUhEXxrOMWDvkANIkhMEeOvxeJRau1lkkycJ631hJQjgtGEtV8075ABk6uPV8gGdjosi06iRGECeJORLR2qtyF9MX6IFOfCYi8b0pQHQAYCXnipEoRAA3KbWis5YYgCZoIkJ4LBh7YcikFmSHCBAYaPPpIlzY/YBkc/9xeO/lVFjmoj42Rc//86V4I2sYe0pf8+ShOW36cv8g2/FcUJMoXxpaQWq1UsJgNI2vd5qenPDtzbvEAPoK5Ex54D4xuu1jAHRRepc/y4tGSoAmYJGksUn2ijow/NVAI5rtdrPxcXvwcEJJs7f3b3a6HRYskVDBWBAI5kaiZYfMyJqp85ta6bqAcyymRXNOwSpBjCzKgRkX90DQ9QzkNRb6PXqUukcpVhQBdiB+IIjI/Sn1Npdmeljq2AAA0XizcZ3wCuMi4i+veh26xrliVKBfhXiPHB5T7BFGQiuwEM/CK6I0wLQ3H2n+SgNIJRKZalTSkbHsyG5507IYCnqRAUQoErBqjOeiNIUGnUovLWJn0wkshoVAPfDj4UF/jvp9cTFiS7mu931UMmc5DMqAF5g8ATJ7/zj+8PtHNG69MlQkv3go4TP+ZT9IUrTzrQHRp0/egdVXlJ8CYq2E/sW6oMAAM17v8/nX6uANpBQ++hNHBpI6LxnAKGZizXvN8lOYkAbHlXNAAAAAElFTkSuQmCC',
        map: map,
        title: 'FEM & Body'
    });

    var offset = $(map.getDiv()).offset();
    map.panBy(((mapOptions.scroll.x - offset.left) / 2), ((mapOptions.scroll.y - offset.top) / 2));
    google.maps.event.addDomListener(window, 'scroll', function () {
        var scrollY = $(window).scrollTop(),
            scrollX = $(window).scrollLeft(),
            scroll = map.get('scroll');
        if (scroll) {
            map.panBy(-((scroll.x - scrollX) / 2), -((scroll.y - scrollY) / 2));
        }
        map.set('scroll', {x: scrollX, y: scrollY})

    });
}