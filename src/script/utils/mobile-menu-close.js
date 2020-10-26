export default function (openButton, closeButton, nav, page) {
  closeButton.classList.add('header__menu-close_hidden')
  openButton.classList.remove('header__menu_hidden')
  nav.classList.remove('header__navigation_mobile-opened')
  page.classList.remove('page_scroll-off')
}
