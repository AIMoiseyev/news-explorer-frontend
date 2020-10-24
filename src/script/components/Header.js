"use strict"
import BaseComponent from "./BaseComponent";

export default class Header extends BaseComponent {
  constructor(props, container, mainApi) {
    super(props);
    this.container = container
    this.mainApi = mainApi
    this.headerList = this.container.querySelector('.header__list')
    this.userName = props
  }

  _setUserName = (name) => {
    this.userName.textContent = name
  }

  _logout = () => {
    return this.mainApi.logout().then((data) => {
      this.headerList.classList.remove('header__list_logged_in')
      this.headerList.classList.add('header__list_logged_out')
    }).catch((err) => {
      throw new Error(err)
    })
  }

  _setLoginHeader = (data) => {
    this.headerList.classList.remove('header__list_logged_out')
    this.headerList.classList.add('header__list_logged_in')
    this._setUserName(data.data.name)
    this._setHandlers(this.userName, this._logout)
  }

  _setLogoutHeader = () => {
    this.headerList.classList.remove('header__list_logged_in')
    this.headerList.classList.add('header__list_logged_out')
  }

  render = () => {
    return this.mainApi.getUser().then((data) => {
      console.log('render', data)
      if (data) {
        this._setLoginHeader(data)
      } else {
        this._setLogoutHeader()
      }
    }).catch((err) => {
      this._setLogoutHeader()
      throw new Error(err)
    })
  }

}
