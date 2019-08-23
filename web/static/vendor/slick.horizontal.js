// By Pete

const slider = $('.side-scroll');
slider.slick({
  dots: false,
  speed: 1500,
  arrows: false,
  slidesToShow: 1.04,
});

slider.on('wheel', function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }
});
