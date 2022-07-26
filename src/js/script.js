$(document).ready(function(){
    $('.carousel__inner').slick({
        nav: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                nav: false,
                dots: true,
                arrows: false
              }
            }
          ]
    });
  });