"use strict";

import "./style.css";
import MainApi from "../../script/api/MainApi";
import Header from "../../script/components/Header";
import {MAIN_API_OPTIONS, MAIN_PATH} from "../../script/config/config";


(function () {
  const mainApi = new MainApi(MAIN_API_OPTIONS);
  const headerContainer = document.querySelector('.header');
  const logoutButton = headerContainer.querySelector('.header__button-text');

  const header = new Header(logoutButton, headerContainer, mainApi, MAIN_PATH);
  header.render()

})();
