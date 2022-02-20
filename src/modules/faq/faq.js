const containerClassName = 'faq__items';
const itemClassName = 'faq__item';
const activeClassName = 'faq__item--active';
const bodyClassName = 'faq__body';
const contentClassName = 'faq__inner';

const $container = $('.' + containerClassName);

$('.faq__head').on('click', ( e ) => {
  const $prevActiveItem = $('.' + activeClassName);
  const $prevActiveBody = $prevActiveItem.find('.' + bodyClassName);
  const $prevActiveContent = $prevActiveItem.find('.' + contentClassName);

  const $newActiveItem = $(e.currentTarget).parents('.' + itemClassName);
  const $newActiveBody = $newActiveItem.find('.' + bodyClassName);
  const $newActiveContent = $newActiveItem.find('.' + contentClassName);

  $prevActiveBody.css('maxHeight', $prevActiveContent.outerHeight());
  $prevActiveItem.removeClass(activeClassName);

  $newActiveBody.css('maxHeight', $newActiveContent.outerHeight());
  $newActiveItem.addClass(activeClassName);

  $newActiveBody.one('transitionend', ( e ) => {
    $newActiveBody.css('maxHeight', '');
  });

  requestAnimationFrame(() => {
    $prevActiveBody.css('maxHeight', '');
  });

  updateHeight();
});

const updateHeight = () => {
  $container.css('min-height', $container.find(`.${activeClassName} .${contentClassName}`)[0].clientHeight);
};
updateHeight();
$(window).on('resize', updateHeight);
