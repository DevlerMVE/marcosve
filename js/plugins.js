// Avoid `console` errors in browsers that lack a console.
(function () {
    /**
     *  Parrallax plugin.
     *  To make a parallax design
     */
    $('.banner-bg').parallax({imageSrc: 'img/7.jpg'});
    $('.row.slogan').parallax({imageSrc: 'img/9.jpg'});
    $('.row.hobbies').parallax({imageSrc: 'img/10.jpg'});

    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/**
 * circle-progress
 *jQuery Plugin to draw animated circular progress bars
 */
function setCircleChart(value, item) {
    item.circleProgress({
        startAngle: -Math.PI / 2,
        value: value,
        size: 120,
        lineCap: 'round',
        fill: {color: '#555555'}
    }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('strong').html(String(stepValue.toFixed(2)).substr(2) + '<i class="fa fa-percent" aria-hidden="true"></i>');
    });
    // let's emulate dynamic value update
    setTimeout(function () {
        item.circleProgress('value', value + 0.2);
    }, 1000);
    setTimeout(function () {
        item.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        item.circleProgress('value', value);
    }, 2100);
}

/**
 * Single Page Nav Plugin
 * Copyright (c) 2013 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.1.0
 */

// Utility
if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() {
        }

        F.prototype = obj;
        return new F();
    };
}

(function ($, window, document, undefined) {
    "use strict";

    var SinglePageNav = {

        init: function (options, container) {

            this.options = $.extend({}, $.fn.singlePageNav.defaults, options);

            this.container = container;
            this.$container = $(container);
            this.$links = this.$container.find('a');

            if (this.options.filter !== '') {
                this.$links = this.$links.filter(this.options.filter);
            }

            this.$window = $(window);
            this.$htmlbody = $('html, body');

            this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));

            this.didScroll = false;
            this.checkPosition();
            this.setTimer();
        },

        handleClick: function (e) {
            var self = this,
                link = e.currentTarget,
                $elem = $(link.hash);

            e.preventDefault();

            if ($elem.length) { // Make sure the target elem exists


                // Prevent active link from cycling during the scroll
                self.clearTimer();

                // Before scrolling starts
                if (typeof self.options.beforeStart === 'function') {
                    self.options.beforeStart();
                }

                self.setActiveLink(link.hash);

                self.scrollTo($elem, function () {

                    if (self.options.updateHash) {
                        document.location.hash = link.hash;
                    }

                    self.setTimer();

                    // After scrolling ends
                    if (typeof self.options.onComplete === 'function') {
                        self.options.onComplete();
                    }
                });
            }
        },

        scrollTo: function ($elem, callback) {
            var self = this;
            var target = self.getCoords($elem).top;
            var called = false;

            self.$htmlbody.stop().animate(
                {scrollTop: target},
                {
                    duration: self.options.speed,
                    easing: self.options.easing,
                    complete: function () {
                        if (typeof callback === 'function' && !called) {
                            callback();
                        }
                        called = true;
                    }
                }
            );
        },

        setTimer: function () {
            var self = this;

            self.$window.on('scroll.singlePageNav', function () {
                self.didScroll = true;
            });

            self.timer = setInterval(function () {
                if (self.didScroll) {
                    self.didScroll = false;
                    self.checkPosition();
                }
            }, 250);
        },

        clearTimer: function () {
            clearInterval(this.timer);
            this.$window.off('scroll.singlePageNav');
            this.didScroll = false;
        },

        // Check the scroll position and set the active section
        checkPosition: function () {
            var scrollPos = this.$window.scrollTop();
            var currentSection = this.getCurrentSection(scrollPos);
            this.setActiveLink(currentSection);
        },

        getCoords: function ($elem) {
            return {
                top: Math.round($elem.offset().top) - this.options.offset
            };
        },

        setActiveLink: function (href) {
            var $activeLink = this.$container.find("a[href='" + href + "']");

            if (!$activeLink.hasClass(this.options.currentClass)) {
                this.$links.removeClass(this.options.currentClass);
                $activeLink.addClass(this.options.currentClass);
            }
        },

        getCurrentSection: function (scrollPos) {
            var i, hash, coords, section;

            for (i = 0; i < this.$links.length; i++) {
                hash = this.$links[i].hash;

                if ($(hash).length) {
                    coords = this.getCoords($(hash));

                    if (scrollPos >= coords.top - this.options.threshold) {
                        section = hash;
                    }
                }
            }

            // The current section or the first link
            return section || this.$links[0].hash;
        }
    };

    $.fn.singlePageNav = function (options) {
        return this.each(function () {
            var singlePageNav = Object.create(SinglePageNav);
            singlePageNav.init(options, this);
        });
    };

    $.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: 'current',
        easing: 'swing',
        updateHash: false,
        filter: '',
        onComplete: false,
        beforeStart: false
    };

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });


    /**
     * imagefill.js
     * Center img into div
     */
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $('.project-item').imagefill();
    }
    $('.about-image').imagefill();
})(jQuery, window, document);

//MAPA
function initMap() {
    var meposition = {lat: 42.868464, lng:  -8.544887};

    // Create an array of styles.
    var styles = [
        {
            stylers: [
                {hue: "#00ffe6"},
                {saturation: -100}
            ]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {lightness: 100},
                {visibility: "simplified"}
            ]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {visibility: "off"}
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});


    var mapOptions = {
        scrollwheel: false,
        zoom: 15,
        center: meposition,
        scroll: {x: $(window).scrollLeft(), y: $(window).scrollTop()},
        mapTypeControlOptions: {

            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        disableDefaultUI: true
    };

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    new google.maps.Marker({
        position: meposition,
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADHUlEQVRoQ+1Z3XHTQBDe81jPhApIKsCpAKcCxEj3HFIBKSFUgKkg8fNKg6ggpAKcCjAVgJ/l8TI7SIzQRLrdu9NAZnIvftDe3n77893u2cAjX+aR2w9PAP51BKNGwFq7IKJzAFgYY474twG4IaKfALAxxqwRcRMLeBQAWZadz2azKwA4Fhq2PRwOV2VZroXyg2JBANjjAHDd8bTWHo7ERUhEvAFkWZYaY66bVNEa/keeU4uILsqyrHyUeAFg42ez2SefA4f2ENFZURRftDrVAJpCvQ31fN9QjoQx5kybTj4AvgbkvMvBG0Q8dQl1v6sAWGvfNkWrOUMry0V9I92kBfBNQZVSG/pyW0Q8kW4WA2gok9PHuYjoMwCs2qLM83wJAJfGmNfOzb8FTqW1oAGwAoB3AgMGU0CRgh8R8VJwlryZs9Yyxb0aU8qeL4oiHZPJ87wSROIOETlqzqWJgJN9JFzO6WSMuXVYJmYjDQByuQMRRfqstdF0iQ5kw2MeGlOXBgC3w88cNeBsB4QptENEbsedSwPAWcQAUCHim7FTrbXcQ40WOgDEL+I8z2+MMTysuNb/SaN5nvNF9MFlffOdW+MVIt419cP0y7zu8nyrXtxOiFMoTdPjJEm4lZh81XV9UlXVVnKQGEDjSZ6gXkoUB8jcI2I7SzvVqAAo08h5+ICAOH14vwpAmqZHSZL88LVMsq+u6+dVVTFli5YKAGtUsJHIgK4QEa2LouCZQ7zUAKYsZk3xtgjVAKaKgo/31TXQop4gCru6rhdS6uzml1cEGkqVDjjOfCai90VR8MueenkDaBiJL5vRBs9lERF93+/37H0x80SJACuJ8cAlGYLGnOAdgVapcEQcskE8+w4pCAbgm0qhqRNEo31vCIeUv7aFpk5UAFpWCmGdvvOCU6irUPL0opm2XAzmfZENKeZ6mM/n/DfSiwGZ+7qul76U+ZDOqBFoUol7eZ6f+/fDDgCW0idDifejR6A99KH7IVbRTloDvXroPsWrhhSp9yeLQGtA85gLmvd+jfGTA9Aa4yMfvYh9jAjZ8wQgxHsx9v4CkVhXQKcJVikAAAAASUVORK5CYII=',
        map: map
    });
}