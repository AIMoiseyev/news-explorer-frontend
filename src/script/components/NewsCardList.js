import BaseComponent from "./BaseComponent";

export default class NewsCardList extends BaseComponent {
  constructor(props, card, container, preloader) {
    super(props)
    this.card = card;
    this.container = container;
    this.errorMessage = container.querySelector('.news__error-message');
    this.preloader = preloader;
    this.showMoreButton = props;
    this.newsContainer = container.querySelector('.news__grid-container')
  }

  _addCard = (card) => {
    this.newsContainer.appendChild(card)
  }

  renderResults = (data, value) => {
    this.data = data;
    this.keyWord = value;
    if (data.length > 3) {
      for (let i = 0; i <= 2; i++) {
        this._addCard(this.card.create(data[i], value))
        this.showMoreButton.classList.add('news__button_visible')
        this._setHandlers(this.showMoreButton, this._showMore)
      }
    } else {
      data.forEach(elem => {
        this._addCard(this.card.create(elem, value))
        this._removeHandlers(this.showMoreButton, this._showMore)
        this.showMoreButton.classList.remove('news__button_visible')
      })
    }
  }

  renderError = (state) => {
    if (state) {
      this.errorMessage.classList.add('news__error-message_visible')
    } else if (this.errorMessage.classList.contains('news__error-message_visible')) {
      this.errorMessage.classList.remove('news__error-message_visible')
    }
  }

  renderSection = (state) => {
    if(state) {
      this.container.classList.add('news_visible')
    } else {
      this.container.classList.remove('news_visible')
    }
  }

  renderLoader = (state) => {
    if (state) {
      this.preloader.classList.remove('preloader_hidden')
    } else {
      this.preloader.classList.add('preloader_hidden')
    }
  }

  _showMore = () => {
    if (this.data.length > 0 && this.data.length <= 3) {
      this.data = this.data.slice(3)
      this.renderResults(this.data, this.keyWord)
    }
    if (this.data.length > 3) {
      this.data = this.data.slice(3)
      this.renderResults(this.data, this.keyWord)
    } else {
      console.log('finish')
    }
  }

  clearContainer = () => {
    while (this.newsContainer.firstChild) {
      this.newsContainer.removeChild(this.newsContainer.firstChild);
    }
  }
}
