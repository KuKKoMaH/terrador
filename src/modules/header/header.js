const $menu = $('.header__popup');
const menuActiveClass = 'header__popup--active';

$('.header__menuOpen').on('click', () => $menu.addClass(menuActiveClass));
$('.header__menuClose').on('click', () => $menu.removeClass(menuActiveClass));
