import dateToString from '../utils/date-to-string';

export default class SavedCard {
  constructor(mainApi) {
    this.mainApi = mainApi;
  }

  create = (data) => {
    const card = document.createElement('div');
    const cardTemplate = `
    <a href="" class="card__link" target="_blank"></a>
    <img src="<%=require('../../images/cardimage.jpg')%>" alt="изображение новости" class="card__image"/>
          <button class="card__icon card__icon_type_keyword" type="button"></button>
          <button class="card__icon card__icon_type_delete" type="button"></button>
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
    this.buttonDelete = card.querySelector('.card__icon_type_delete');
    const buttonKeyWord = card.querySelector('.card__icon_type_keyword')
    const buttonDescription = card.querySelector('.card__icon_type_description');
    const newsDate = card.querySelector('.card__date');
    const cardTitle = card.querySelector('.card__title');
    const cardText = card.querySelector('.card__text');
    const cardSource = card.querySelector('.card__source');
    const cardLink = card.querySelector('.card__link');

    image.setAttribute('src', data.image);
    cardLink.setAttribute('href', data.link);
    buttonDescription.textContent = 'Убрать из сохранённых';
    newsDate.setAttribute('datetime', data.date);
    buttonKeyWord.textContent = data.keyword;
    newsDate.textContent = dateToString(data.date);
    cardTitle.textContent = data.title;
    cardText.textContent = data.text;
    cardSource.textContent = data.source;
    card.setAttribute('id', data._id)
    this.setEventListeners()

    return card
  }

  setEventListeners = () => {
    this.buttonDelete.addEventListener('click', (event) => this.deleteArticle(event))
  }

  deleteArticle = (event) => {
    const card = event.target.closest('.card')
    this.mainApi.deleteArticle(card.id).then((data) => {
      card.remove()
    }).catch((err) => {
      console.log(err)
    })
  }
}
