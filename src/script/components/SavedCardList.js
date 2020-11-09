import BaseComponent from "./BaseComponent";

export default class SavedCardList extends BaseComponent {
  constructor(props, card, container, api) {
    super(props)
    this.card = card;
    this.container = container;
    this.showMoreButton = props;
    this.newsContainer = container.querySelector('.news__grid-container')
    this.api = api
  }

  _addCard = (card) => {
    this.newsContainer.appendChild(card)
  }

  _renderResults = (data) => {
    if (data.length > 3) {
      for (let i = 0; i <= 2; i++) {
        this._addCard(this.card.create(data[i]))
        this.showMoreButton.classList.add('news__button_visible')
      }
    } else {
      data.forEach(elem => {
        this._addCard(this.card.create(elem))
        this.showMoreButton.classList.remove('news__button_visible')
        this._removeHandlers(this.showMoreButton, this._showMore)
      })
    }
    this._renderSection(true)
  }

  renderInitialResults = () => {
    this.api.getArticles().then((res) => {
      if(res.data.length === 0) {
        this._renderSection(false);
        return;
      }
      this.data = res.data
      this._renderResults(res.data)
      this._setHandlers(this.showMoreButton, this._showMore)
    }).catch((err) => {
      console.log(err)
    })

  }

  _renderSection = (state) => {
    if(state) {
      this.container.classList.add('news_visible')
    } else {
      this.container.classList.remove('news_visible')
    }
  }

  _showMore = () => {
    if (this.data.length > 0 && this.data.length <= 3) {
      this.data = this.data.slice(3)
      this._renderResults(this.data)
    }
    if (this.data.length > 3) {
      this.data = this.data.slice(3)
      this._renderResults(this.data)
    } else {
      console.log('finish')
    }
  }
}
