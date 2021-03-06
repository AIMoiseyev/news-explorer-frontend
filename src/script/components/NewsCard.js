import dateToString from '../utils/date-to-string';

export default class NewsCard {
  constructor(api, mainApi) {
    this.api = api;
    this.mainApi = mainApi;
  }

  create = (data, keyWord) => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    const card = document.createElement('div');
    const cardTemplate = `
    <a href="" class="card__link" target="_blank"></a>
    <img src="<%=require('../../images/cardimage.jpg')%>" alt="изображение новости" class="card__image"/>
          <button class="card__icon card__icon_type_keyword card__icon_visibility_hidden" type="button"></button>
          <button class="card__icon card__icon_type_save" type="button"></button>
          <button class="card__icon card__icon_type_description" type="button"></button>
          <div class="card__container">
            <time class="card__date" datetime="2020-08-02"></time>
            <h3 class="card__title"></h3>
            <p class="card__text"></p>
            <p class="card__source"></p>
          </div>`
    card.classList.add('card');
    card.insertAdjacentHTML('afterbegin', cardTemplate)

    const image = card.querySelector('.card__image');
    this.buttonSave = card.querySelector('.card__icon_type_save');
    const buttonDescription = card.querySelector('.card__icon_type_description');
    const newsDate = card.querySelector('.card__date');
    const cardTitle = card.querySelector('.card__title');
    const cardText = card.querySelector('.card__text');
    const cardSource = card.querySelector('.card__source');
    const cardLink = card.querySelector('.card__link');

    image.setAttribute('src', data.urlToImage);
    cardLink.setAttribute('href', data.url);
    buttonDescription.classList.remove('card__icon_visibility_hidden');
    buttonDescription.textContent = 'Войдите, чтобы сохранять статьи';
    newsDate.setAttribute('datetime', data.publishedAt);
    newsDate.textContent = dateToString(data.publishedAt);
    cardTitle.textContent = data.title;
    cardText.textContent = data.description;
    cardSource.textContent = data.source.name;


    if (isLoggedIn === 'true') {
      buttonDescription.classList.add('card__icon_visibility_hidden');
      this._setEventListeners(data, keyWord)
    }
    return card
  }

  _setEventListeners = (data, keyWord) => {
    this.buttonSave.addEventListener('click', (event) => this._handleArticles(event, data, keyWord))
  }

  _handleArticles = (event, data, keyWord) => {
    const card = event.target.closest('.card')
    if (!card.id) {
      this._saveArticle(event, data, keyWord, card)
    } else {
      this._deleteArticle(event, card)
    }
  }

  _saveArticle = (event, data, keyWord, card) => {
    this.mainApi.createArticle(data, keyWord).then((data) => {
      console.log('das', data.data.id)
      event.target.classList.remove('card__icon_type_save')
      event.target.classList.add('card__icon_type_saved')
      card.setAttribute('id', data.data.id)
    }).catch((err) => {
      console.log(err)
    })
  }

  _deleteArticle = (event, card) => {
    this.mainApi.deleteArticle(card.id).then((data) => {
      event.target.classList.remove('card__icon_type_saved')
      event.target.classList.add('card__icon_type_save')
      card.removeAttribute('id')
    }).catch((err) => {
      console.log(err)
    })
  }
}
