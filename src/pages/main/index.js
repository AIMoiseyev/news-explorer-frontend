"use strict";
import "./style.css";
import {MAIN_API_OPTIONS, NEWS_API_OPTIONS} from "../../script/config/config";
import Popup from "../../script/components/Popup";
import Form from "../../script/components/Form";
import MainApi from "../../script/api/MainApi";
import Header from "../../script/components/Header";
import NewsApi from "../../script/api/NewsApi";

(function () {
  const newsApi = new NewsApi(NEWS_API_OPTIONS);
  const mainApi = new MainApi(MAIN_API_OPTIONS);
  const pageElement = document.querySelector('.page');
  const signUpButton = document.querySelector('#signup-button');
  const popupSignContainer = document.querySelector('.popup_type_signup');
  const popupRegisteredContainer = document.querySelector('.popup_type_registered');
  const popupSignInContainer = document.querySelector('.popup_type_signin');
  const signInPopupCloseButton = popupSignInContainer.querySelector('.popup__close');
  const signUpPopupCloseButton = popupSignContainer.querySelector('.popup__close');
  const redirectSignInButton = popupSignInContainer.querySelector('.popup__link');
  const redirectSignUpButton = popupSignContainer.querySelector('.popup__link');
  const redirectRegisteredButton = popupRegisteredContainer.querySelector('.popup__signup-link');
  const registeredPopupCloseButton = popupRegisteredContainer.querySelector('.popup__close');
  const signForm = document.forms.signup;
  const signInForm = document.forms.signin;
  const signUpSubmitButton = signForm.querySelector('.button');
  const signInSubmitButton = signInForm.querySelector('.button');
  const headerContainer = document.querySelector('.header');
  const logoutButton = headerContainer.querySelector('.header__button-text');

  const header = new Header(logoutButton, headerContainer, mainApi);
  const popupSignIn = new Popup(signInPopupCloseButton, popupSignInContainer, pageElement);
  const popupSignUp = new Popup(signUpPopupCloseButton, popupSignContainer, pageElement);
// popupSignUp.setEventListeners();

  const popupRegistered = new Popup(registeredPopupCloseButton, popupRegisteredContainer, pageElement);
// popupRegistered.setEventListeners()

  const signUpForm = new Form(signUpSubmitButton, signForm, mainApi, popupSignUp, popupRegistered);
  signUpForm.setEventListeners();

  const loginForm = new Form(signInSubmitButton, signInForm, mainApi, popupSignIn, popupRegistered);
  loginForm.setEventListeners()
// signUpForm.getButtons()
// popupSignUp.open()

  const changePopup = function (currentPopup, newPopup) {
    currentPopup.close();
    newPopup.open();
  }

  signUpButton.addEventListener('click', popupSignUp.open);
  redirectSignInButton.addEventListener('click', () => changePopup(popupSignIn, popupSignUp));
  redirectSignUpButton.addEventListener('click', () => changePopup(popupSignUp, popupSignIn));
  redirectRegisteredButton.addEventListener('click', () => changePopup(popupRegistered, popupSignIn))

  header.render();
})();



