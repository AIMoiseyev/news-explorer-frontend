"use strict";

import "./style.css";
import MainApi from "../../script/api/MainApi";
import Header from "../../script/components/Header";
import {MAIN_API_OPTIONS, MAIN_PATH} from "../../script/config/config";
import SavedCard from "../../script/components/SavedCard";
import SavedCardList from "../../script/components/SavedCardList";
import SearchedNews from "../../script/components/SearchedNews";
import mobileMenuOpen from "../../script/utils/mobile-menu-open";
import mobileMenuClose from "../../script/utils/mobile-menu-close";

(function () {
  const mainApi = new MainApi(MAIN_API_OPTIONS);
  const pageElement = document.querySelector('.page');
  const headerContainer = document.querySelector('.header');
  const newsContainer = document.querySelector('.news');
  const searchedNewsContainer = document.querySelector('.searched-news');
  const headerNavigation = document.querySelector('.header__navigation');
  const logoutButton = headerContainer.querySelector('.header__button-text');
  const showMoreButton = document.querySelector('.news__button');
  const mobileOpenButton = document.querySelector('.header__menu');
  const mobileCloseButton = document.querySelector('.header__menu-close');

  const searchedNews = new SearchedNews(searchedNewsContainer, mainApi);
  const card = new SavedCard(mainApi);
  const cardList = new SavedCardList(showMoreButton, card, newsContainer, mainApi)
  const header = new Header(logoutButton, headerContainer, mainApi, MAIN_PATH);

  searchedNews.render();
  cardList.renderInitialResults();
  header.render()
  mobileOpenButton.addEventListener('click', () => mobileMenuOpen(mobileOpenButton, mobileCloseButton, headerNavigation, pageElement));
  mobileCloseButton.addEventListener('click', () => mobileMenuClose(mobileOpenButton, mobileCloseButton, headerNavigation, pageElement));
})();
