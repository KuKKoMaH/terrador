const itemClassName = 'advantages__tab';
const activeClassName = 'advantages__tab--active';
const bodyClassName = 'advantages__body';
const contentClassName = 'advantages__content';

$('.advantages__head').on('click', ( e ) => {
  $('.advantages iframe').each((i, el) => {
    el.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
  })
  const $prevActiveItem = $('.' + activeClassName);
  const $prevActiveBody = $prevActiveItem.find('.' + bodyClassName);
  const $prevActiveContent = $prevActiveItem.find('.' + contentClassName);

  const $newActiveItem = $(e.currentTarget).parents('.' + itemClassName);
  const $newActiveBody = $newActiveItem.find('.' + bodyClassName);
  const $newActiveContent = $newActiveItem.find('.' + contentClassName);

  $prevActiveBody.css('maxHeight', $prevActiveContent.height());
  $prevActiveItem.removeClass(activeClassName);

  $newActiveBody.css('maxHeight', $newActiveContent.height());
  $newActiveItem.addClass(activeClassName);

  $newActiveBody.one('transitionend', ( e ) => {
    $newActiveBody.css('maxHeight', '');
  });

  requestAnimationFrame(() => {
    $prevActiveBody.css('maxHeight', '');
  });
});
