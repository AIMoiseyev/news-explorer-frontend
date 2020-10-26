export default function (openButton, closeButton, nav, page) {
  openButton.classList.add('header__menu_hidden')
  closeButton.classList.remove('header__menu-close_hidden')
  nav.classList.add('header__navigation_mobile-opened')
  page.classList.add('page_scroll-off')
}
