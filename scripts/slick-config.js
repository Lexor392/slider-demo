$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.slider-nav',
        prevArrow: $('.custom2-slick-prev'),
        nextArrow: $('.custom2-slick-next')
    });
    $('.slider-nav').slick({
        vertical: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        infinite: false,
        focusOnSelect: true,
        prevArrow: $('.custom1-slick-prev'),
        nextArrow: $('.custom1-slick-next')
    });

});