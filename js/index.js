$(function($){
var swiper = new Swiper('.swiper-container', {
        // effect: 'fade',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction : 'vertical',
        mousewheelControl : true,
        onSlideChangeStart: function(swiper){
            switch (swiper.activeIndex) {
                case 0: 
                    $('.nav_menu_mile').addClass('nav_menu').removeClass('nav_menu_mile');
                    $('img').removeClass('animated fadeInUp').hide().addClass('animated fadeInUp').show();                    
                    break;
                case 1: 
                case 2:
                case 3:
                case 4: 
                    $('img').removeClass('animated fadeInUp').hide().addClass('animated fadeInUp').show();
                    $('.nav_menu').addClass('nav_menu_mile').removeClass('nav_menu');
                    break;
            }
        }
    });

    $('img').addClass('animated fadeInUp').show();
});