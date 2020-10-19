"use strict"

export default class BaseComponent {
  constructor(domElement) {
    this.domElement = domElement
    // console.log('33', this.domElement)
  }

  getButtons = () => {
    this.buttons = {}
    this.domElement.forEach(elem => {
      this.buttons[elem] = elem
    })
  }
  _setHandlers = (elem, method) => {
    elem.addEventListener('click', method)
  }

  _removeHandlers = (...elem) => {
    this.domElement.removeEventListener(...elem)
  }
}
