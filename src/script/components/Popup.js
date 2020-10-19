"use strict"
import BaseComponent from "./BaseComponent";

export default class Popup extends BaseComponent {
  constructor(props, container, page) {
    super(props);
    this.popup = container
    this.closeButton = props
    this.page = page
  }

  open = () => {
    // console.log(this.props)
    // this._setHandlers(this.props)
    this.popup.classList.add('popup_open');
    this.page.classList.add('page_scroll-off')
  }

  close = () => {
    this.popup.classList.remove('popup_open')
    this.page.classList.remove('page_scroll-off')
  }
  setEventListeners = () => {
    this._setHandlers(this.closeButton, this.close)
  }

}
