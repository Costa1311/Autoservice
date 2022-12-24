import burger from './modules/burger.js';

// Slider
$(document).ready(function () {
    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


// Accordeon Service.html
$(document).ready(function () {
    $('.services__col__item__trigger').click(function () {
        $(this).next('.services__col__item__content').slideToggle(500);
    });
    $('.services__col__item__trigger').on('click', function () {
        $(this).toggleClass('trigger');
    });
});




// Accordeon index.html
$(document).ready(function () {
    $('.').click(function () {
        $(this).next('.').slideToggle(500);
    });
    $('.').on('click', function () {
        $(this).toggleClass('');
    });
});


// Svg
$('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
        var $svg = $(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
    }, 'xml');
});

// PopUp
const openPopup = document.getElementById('open_popup');
const closePopup = document.getElementById('pop-up__close');
const popUp = document.getElementById('pop-up');

openPopup.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closePopup.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.body.style.overflow = '';
});


