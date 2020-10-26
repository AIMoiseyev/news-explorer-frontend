"use strict";
import "./style.css";
import {MAIN_API_OPTIONS, NEWS_API_OPTIONS, MAIN_PATH} from "../../script/config/config";
import Popup from "../../script/components/Popup";
import Form from "../../script/components/Form";
import MainApi from "../../script/api/MainApi";
import Header from "../../script/components/Header";
import NewsApi from "../../script/api/NewsApi";
import SearchForm from "../../script/components/SearchForm";
import NewsCard from "../../script/components/NewsCard";
import NewsCardList from "../../script/components/NewsCardList";
import mobileMenuOpen from "../../script/utils/mobile-menu-open";
import mobileMenuClose from "../../script/utils/mobile-menu-close";

(function () {
  const newsApi = new NewsApi(NEWS_API_OPTIONS);
  const mainApi = new MainApi(MAIN_API_OPTIONS);

  const pageElement = document.querySelector('.page');
  const popupSignContainer = document.querySelector('.popup_type_signup');
  const popupRegisteredContainer = document.querySelector('.popup_type_registered');
  const popupSignInContainer = document.querySelector('.popup_type_signin');
  const headerContainer = document.querySelector('.header');
  const headerNavigation = document.querySelector('.header__navigation');
  const newsContainer = document.querySelector('.news');
  const signForm = document.forms.signup;
  const signInForm = document.forms.signin;
  const searchContainer = document.forms.searchForm;
  const signUpButton = document.querySelector('#signup-button');
  const mobileOpenButton = document.querySelector('.header__menu');
  const mobileCloseButton = document.querySelector('.header__menu-close');
  const signInPopupCloseButton = popupSignInContainer.querySelector('.popup__close');
  const signUpPopupCloseButton = popupSignContainer.querySelector('.popup__close');
  const redirectSignInButton = popupSignInContainer.querySelector('.popup__link');
  const redirectSignUpButton = popupSignContainer.querySelector('.popup__link');
  const redirectRegisteredButton = popupRegisteredContainer.querySelector('.popup__signup-link');
  const registeredPopupCloseButton = popupRegisteredContainer.querySelector('.popup__close');
  const signUpSubmitButton = signForm.querySelector('.button');
  const signInSubmitButton = signInForm.querySelector('.button');
  const searchSubmitButton = searchContainer.querySelector('.search-form__button')
  const logoutButton = headerContainer.querySelector('.header__button-text');
  const preloader = document.querySelector('.preloader');
  const notFound = document.querySelector('.not-found');
  const showMoreButton = document.querySelector('.news__button');

  const header = new Header(logoutButton, headerContainer, mainApi, MAIN_PATH);
  const card = new NewsCard(newsApi, mainApi);
  const cardList = new NewsCardList(showMoreButton, card, newsContainer, preloader)
  cardList.addEventListeners()

  const popupSignIn = new Popup(signInPopupCloseButton, popupSignInContainer, pageElement);
  const popupSignUp = new Popup(signUpPopupCloseButton, popupSignContainer, pageElement);

  const popupRegistered = new Popup(registeredPopupCloseButton, popupRegisteredContainer, pageElement);

  const signUpForm = new Form(signUpSubmitButton, signForm, mainApi, popupSignUp, popupRegistered);
  signUpForm.setEventListeners();

  const loginForm = new Form(signInSubmitButton, signInForm, mainApi, popupSignIn, popupRegistered);
  loginForm.setEventListeners()

  const searchForm = new SearchForm(searchSubmitButton, searchContainer, newsApi, notFound, cardList);
  searchForm.setEventListeners();

  const changePopup = function (currentPopup, newPopup) {
    currentPopup.close();
    newPopup.open();
  }

  mobileOpenButton.addEventListener('click', () => mobileMenuOpen(mobileOpenButton, mobileCloseButton, headerNavigation, pageElement));
  mobileCloseButton.addEventListener('click', () => mobileMenuClose(mobileOpenButton, mobileCloseButton, headerNavigation, pageElement));
  signUpButton.addEventListener('click', popupSignUp.open);
  redirectSignInButton.addEventListener('click', () => changePopup(popupSignIn, popupSignUp));
  redirectSignUpButton.addEventListener('click', () => changePopup(popupSignUp, popupSignIn));
  redirectRegisteredButton.addEventListener('click', () => changePopup(popupRegistered, popupSignIn));

  header.render();
})();



