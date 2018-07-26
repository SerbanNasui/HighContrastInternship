function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementsByClassName('menu-overlay')[0].style.display = 'block';
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementsByClassName('menu-overlay')[0].style.display = 'none';
}



//goToTop
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

$(document).ready(function(){
    $('.slickCarousel').slick({
        arrows: true,
        slidesToShow: 5,
        prevArrow: '<i class="fa fa-angle-left slick-arrow icons-carousel--prev"></i>',
        nextArrow: '<i class="fa fa-angle-right slick-arrow icons-carousel--next"></i>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
           
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    });
  });
  
  

  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$(".procesare-comanda").paroller({ factor: 0.2, factorXs: 0.2, type: 'foreground', direction: 'vertical' });

$(".depozitare").paroller({ factor: 0.2, factorXs: 0.2, type: 'foreground', direction: 'vertical' });

(".integrari").paroller({ factor: 0.2, factorXs: 0.2, type: 'foreground', direction: 'vertical' });

$(".clienti").paroller({ factor: 0.2, factorXs: 0.2, type: 'foreground', direction: 'vertical' });

$(".depozite").paroller({ factor: 0.2, factorXs: 0.2, type: 'foreground', direction: 'vertical' });