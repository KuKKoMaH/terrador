import initSlider from "src/js/initSlider";

initSlider('.testimonials__slider', ( $el ) => ({
  wrapperClass: 'testimonials__slides',
  slideClass:   'testimonials__slide',
  // navigation:   {
  //   prevEl: $el.parents('.prices').find('.prices__arrow--prev')[0],
  //   nextEl: $el.parents('.prices').find('.prices__arrow--next')[0],
  // },
  // pagination:      {
  //   el:        $el.parents('.spare').find('.pagination')[0],
  //   clickable: true,
  // },
  // touchEventsTarget: 'wrapper',
  slidesPerView: 'auto',
  spaceBetween:  0,
}));
