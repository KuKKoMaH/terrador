$('.top__button--open').on('click', (e) => {
  const $item = $(e.currentTarget).parents('.top__item');
  $item.addClass('top__item--active')
})

$('.top__button--close').on('click', (e) => {
  const $item = $(e.currentTarget).parents('.top__item');
  $item.removeClass('top__item--active')
})
