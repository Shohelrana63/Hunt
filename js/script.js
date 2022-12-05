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
    // autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    nextArrow : '.up',
    prevArrow : '.down',
    vertical: true,
  });
  $('.item-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    nextArrow: '<i class="fas fa-chevron-up team-up"></i>',
    prevArrow: '<i class="fas fa-chevron-down team-down"></i>',
    asNavFor: '.details-slider',
    centerMode: true,
  centerPadding: "0"
  });

  $('.details-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    focusOnSelect: true,
    asNavFor: '.item-slider',
  });

})