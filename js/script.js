$(function () {
  $('.banner-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
  });

  $('.service-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    nextArrow : '.up',
    prevArrow : '.down',
    vertical: true,
  });



})