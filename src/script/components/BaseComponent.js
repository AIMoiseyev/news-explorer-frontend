"use strict"

export default class BaseComponent {
  constructor(domElement) {
    this.domElement = domElement
  }

  _setHandlers = (elem, method) => {
    elem.addEventListener('click', method)
  }

  _removeHandlers = (elem, method) => {
    this.domElement.removeEventListener('click', method)
  }
}
