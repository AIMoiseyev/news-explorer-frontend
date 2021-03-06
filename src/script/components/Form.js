"use strict"
import BaseComponent from "./BaseComponent";
import validator from "validator/es";

export default class Form extends BaseComponent {
  constructor(props, container, api, popup, regPopup) {
    super(props);
    this.container = container
    this.api = api;
    this.submitButton = props;
    this.popup = popup
    this.regPopup = regPopup
    this.error = this.container.querySelector('.popup__validate-message_position_submit')
  }

  _validateForm = (event) => {
    event.preventDefault();
    this.error.textContent = '';

    const inputs = Array.from(this.container.elements);
    this.inputs = inputs


    this._checkCustomValidity(event.target);

    if (inputs.every(this._validateInputElement)) {
      this._setSubmitButtonState(this.submitButton, true);
    } else {
      this._setSubmitButtonState(this.submitButton, false);
    }
  }

  _validateInputElement = (input) => {
    if (input.tagName !== "INPUT") {
      return true;
    }

    input.setCustomValidity("");

    if (input.validity.valueMissing) {
      input.setCustomValidity("Это обязательное поле");
      return false;
    }

    if (input.name === 'email' && !validator.isEmail(input.value)) {
      input.setCustomValidity("Неправильный формат email");
      return false;
    }

    if (input.name === 'username' && (input.validity.tooShort || input.validity.tooLong)) {
      input.setCustomValidity("Имя должно быть от 2 до 30 символов");
      return false;
    }

    if (input.name === 'password' && (input.validity.tooShort || input.validity.tooLong)) {
      input.setCustomValidity("Пароль должен быть от 8 до 30 символов");
      return false;
    }

    if (input.validity.typeMismatch && input.type === "url") {
      input.setCustomValidity("Здесь должна быть ссылка");
      return false;
    }

    return input.checkValidity();
  }

  _checkCustomValidity = (input) => {
    const error = input.nextElementSibling;
    const correct = this._validateInputElement(input);
    error.textContent = input.validationMessage;
    return correct;
  }

  _setSubmitButtonState = (button, state) => {
    if (state) {
      button.removeAttribute("disabled");
      button.classList.add("popup__button_active");
      button.classList.remove("popup__button_disabled");
    } else {
      button.setAttribute("disabled", "");
      button.classList.add("popup__button_disabled");
      button.classList.remove("popup__button_active");
    }
  }

  setEventListeners = () => {
    this.container.addEventListener("input", this._validateForm);
    this._setHandlers(this.submitButton, this._submit);
  }

  _submit = (event) => {
    event.preventDefault()
    if(this.container.name === 'signup') this._singUp();
    if(this.container.name === 'signin') this._signIn();
  }

  _singUp = () => {
    const values = {}
    this.inputs.forEach((input) => {
      if (input.tagName === 'INPUT') {
        values[input.name] = input.value
      }
    })
    const {email, password, username} = values

    this.api.signUp(email, password, username).then((data) => {
      this.popup.close()
      this._clear()
      this.regPopup.open()
    }).catch((err) => {
      this._setSubmitButtonState(this.submitButton, false)
      if (err === 400) {
        this.error.textContent = 'Поля заполнены неверно'
      } else if (err === 409) {
        this.error.textContent = 'Такой пользователь уже существует';
      } else {
        this.error.textContent = `Упс, ошибка ${err}`
      }
    })
  }

  _signIn = () => {
    const values = {}
    this.inputs.forEach((input) => {
      if (input.tagName === 'INPUT') {
        values[input.name] = input.value
      }
    })

    const {email, password} = values

    this.api.signIn(email, password).then((data) => {
      this.popup.close()
      this._clear()
      localStorage.setItem('loggedIn', 'true');
      window.location.reload();
    }).catch((err) => {
      this._setSubmitButtonState(this.submitButton, false)
      if (err === 401) {
        this.error.textContent = 'Неправильные почта или пароль'
      } else if (err === 400) {
        this.error.textContent = 'Поля заполнены неверно'
      } else {
        this.error.textContent = `Упс, ошибка ${err}`
      }
    })
  }

  _clear = () => {
    this.container.reset()
  }
}
