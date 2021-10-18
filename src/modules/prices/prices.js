import initSlider from "src/js/initSlider";

initSlider('.prices__slider', ( $el ) => ({
  wrapperClass: 'prices__slides',
  slideClass:   'prices__slide',
  navigation:   {
    prevEl: $el.parents('.prices').find('.prices__arrow--prev')[0],
    nextEl: $el.parents('.prices').find('.prices__arrow--next')[0],
  },
  // pagination:      {
  //   el:        $el.parents('.spare').find('.pagination')[0],
  //   clickable: true,
  // },
  // touchEventsTarget: 'wrapper',
  slidesPerView: 1,
  spaceBetween:  0,
}));
