$(document).ready(function () {
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
    $('.navbar-toggle').click(function () {
        $('#nav-icon').toggleClass('open');
        $('div#bs-example-navbar-collapse-1').stop(true, true).slideToggle();
    });

    /*Gallery photos*/
    photos = {
        'a': {
            'url': 'https://images.unsplash.com/photo-1465326117523-6450112b60b2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f340b4d4a364ac53dcb92955373fc5e0',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'b': {
            'url': 'https://images.unsplash.com/photo-1427435150519-42d9bcd0aa81?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=1896a40b338ccfb0d8ff7e5199e5ecd2',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Pellentesque porta ligula.'
        },
        'c': {
            'url': 'https://images.unsplash.com/photo-1461295025362-7547f63dbaea?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'd': {
            'url': 'https://images.unsplash.com/photo-1461016951828-c09537329b3a?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'e': {
            'url': 'https://images.unsplash.com/photo-1460400408855-36abd76648b9?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'f': {
            'url': 'https://images.unsplash.com/photo-1459197648846-52de5e4d1e9a?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'g': {
            'url': 'https://images.unsplash.com/reserve/Lt0DwxdqRKSQkX7439ey_Chaz_fisheye-11.jpg?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'h': {
            'url': 'https://images.unsplash.com/photo-1456374407032-6e4baf58fb62?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'i': {
            'url': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'j': {
            'url': 'https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'k': {
            'url': 'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?crop=entropy&fit=crop&fm=jpg&h=950&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'l': {
            'url': './img/7.jpg',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'm': {
            'url': 'https://images.unsplash.com/photo-1467691965561-60bbe8ad30ab?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=fff7942e2266ecb4de4e25e9b898fff1',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'n': {
            'url': 'https://images.unsplash.com/photo-1467705621242-842cb5cf9037?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0f5311b2b05ecafc0e404e769594b270',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        },
        'ñ': {
            'url': 'https://images.unsplash.com/photo-1467627713392-e256124aa09d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=5c83e3805a97bdc9a40c5ea037a6c75d',
            'title': 'Pellentesque porta ligula',
            'desciption': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.'
        }
    };

    loadPhotos(photos);

    $(window).load(function () {
        loadItems(photos);
    });

    var mediaquery = window.matchMedia("(max-width: 991px)");
    mediaquery.addListener(handleOrientationChange);

    //if mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.project-hover').css('display', 'none');
        $('.project-item').css('height','auto');
    }
});

function loadPhotos(photos) {

    var position = 1;
    var index = 0;
    $.each(photos, function (item, value) {
        var id = 'img_' + item;
        var a = document.createElement('a');
        a.className = 'img_link';
        a.setAttribute('data-index', "" + index++);

        switch (position = ($(window).width() <= 991) ? 1 : position) {
            case 1:
                if (!$('#column_one').length) {
                    var column_one = document.createElement('div');
                    column_one.className = 'col-md-4';
                    column_one.setAttribute('id', 'column_one');
                    $('.container#photos').append(column_one);
                }
                $('#column_one').append(a);
                position = 2;
                break;
            case 2:
                if (!$('#column_two').length) {
                    var column_two = document.createElement('div');
                    column_two.className = 'col-md-4';
                    column_two.setAttribute('id', 'column_two');
                    $('.container#photos').append(column_two);
                }
                $('#column_two').append(a);
                position = 3;
                break;
            case 3:
                if (!$('#column_three').length) {
                    var column_three = document.createElement('div');
                    column_three.className = 'col-md-4';
                    column_three.setAttribute('id', 'column_three');
                    $('.container#photos').append(column_three);
                }
                $('#column_three').append(a);
                position = 1;
                break;
        }

        var project_item = document.createElement('div');
        project_item.className = 'project-item gallery';
        a.appendChild(project_item);

        var img = document.createElement('img');
        img.src = value.url;
        img.setAttribute('id', id);
        project_item.appendChild(img);

        var project_hover = document.createElement('div');
        project_hover.className = 'project-hover';
        project_item.appendChild(project_hover);
        var inside = document.createElement('div');
        inside.className = 'inside';
        project_hover.appendChild(inside);


        var h5 = document.createElement('h5');
        inside.appendChild(h5);
        var a_href = document.createElement('a');
        a_href.textContent = value.title;
        h5.appendChild(a_href);

        var paragraph = document.createElement('p');
        paragraph.textContent = value.desciption;
        inside.appendChild(paragraph);
    });
}
var items = [];
function loadItems(photos) {
    var array_title = [];
    var array_desciption = [];
    $.each(photos, function (item, value) {
        array_title.push(value.title);
        array_desciption.push(value.desciption);
    });
    var sort_array = [];
    $("img[id*='img_']").each(function (item, value) {
        sort_array.push(value.id + "");
    });
    sort_array.sort();
    $.each(sort_array, function (item, value) {
        var img = document.getElementById(value);
        var new_item = {
            src: img.src,
            w: img.naturalWidth,
            h: img.naturalHeight,
            title: '<h2 class="caption title">' + array_title[item] + '</h2>' + '<span>' + array_desciption[item] + '</span>'
        };
        items.push(new_item);
    });
    $('body').on('click', 'a.img_link', function () {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        // define options (if needed)
        var options = {
            closeOnScroll: false,
            index: parseInt($(this).attr('data-index')) // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();

    });
}

function handleOrientationChange(mediaquery) {
    $('.container#photos').html('');
    if (mediaquery.matches) {
        loadPhotos(photos);
    } else {
        loadPhotos(photos);
    }
}