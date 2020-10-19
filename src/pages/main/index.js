"use strict";
import "./style.css";
import {MAIN_API_OPTIONS} from "../../script/config/config";
import Popup from "../../script/components/Popup";
import Form from "../../script/components/Form";
import MainApi from "../../script/api/MainApi";

(function () {
const mainApi = new MainApi(MAIN_API_OPTIONS)
const pageElement = document.querySelector('.page');
const signUpButton = document.querySelector('#signup-button');
const popupSignContainer = document.querySelector('.popup_type_signup');
const popupRegisteredContainer = document.querySelector('.popup_type_registered');
const signUpPopupCloseButton = popupSignContainer.querySelector('.popup__close');
const registeredPopupCloseButton = popupRegisteredContainer.querySelector('.popup__close')
const signForm = document.forms.signup;
const signUpSubmitButton = signForm.querySelector('.button');
const signFormRedirectButton = signForm.querySelector('.popup__link')

const popupSignUp = new Popup(signUpPopupCloseButton, popupSignContainer, pageElement);
popupSignUp.setEventListeners();

const popupRegistered = new Popup(registeredPopupCloseButton, popupRegisteredContainer, pageElement);
popupRegistered.setEventListeners()

const signUpForm = new Form({signUpSubmitButton, signFormRedirectButton}, signForm, mainApi, popupSignUp, popupRegistered);
signUpForm.setEventListeners();
// signUpForm.getButtons()

// popupSignUp.open()

  signUpButton.addEventListener('click', popupSignUp.open)
})();



