"use strict"
import BaseComponent from "./BaseComponent";

export default class Header extends BaseComponent {
  constructor(props, container, mainApi, mainPath) {
    super(props);
    this.container = container
    this.mainApi = mainApi
    this.headerList = this.container.querySelector('.header__list')
    this.userName = props
    this.mainPath = mainPath
  }

  _setUserName = (name) => {
    this.userName.textContent = name
  }

  _logout = () => {
    return this.mainApi.logout().then((data) => {
      if(window.location.pathname !== this.mainPath) {
        window.location.replace(this.mainPath);
        return;
      }
      this.headerList.classList.remove('header__list_logged_in')
      this.headerList.classList.add('header__list_logged_out')
      localStorage.setItem('loggedIn', 'false');
      window.location.reload();
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
      if (data) {
        this._setLoginHeader(data)
        localStorage.setItem('loggedIn', 'true');
      } else {
        this._setLogoutHeader()
        localStorage.setItem('loggedIn', 'false');
        if(window.location.pathname !== this.mainPath) {
          window.location.replace(this.mainPath);
        }
      }
    }).catch((err) => {
      this._setLogoutHeader()
      console.log(window.location.pathname)
      localStorage.setItem('loggedIn', 'false');
      if(window.location.pathname !== this.mainPath) {
        window.location.replace(this.mainPath);
        return;
      }
      throw new Error(err)
    })
  }

}
