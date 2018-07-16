function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.body.style.backgroundColor = "white";
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
        nextArrow: '<i class="fa fa-angle-right slick-arrow icons-carousel--next"></i>'
    });
  });
  
  