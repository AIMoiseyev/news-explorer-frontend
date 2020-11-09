import BaseComponent from "./BaseComponent";

export default class SearchForm extends BaseComponent {
  constructor(props, container, api, notFound, cardList) {
    super(props);
    this.submitButton = props;
    this.container = container;
    this.api = api;
    this.notFound = notFound;
    this.cardList = cardList;

  }

  _setNotFound = (state) => {
    if (state) {
      this.notFound.classList.remove('not-found_hidden')
    } else {
      this.notFound.classList.add('not-found_hidden')
    }
  }

  setEventListeners = () => {
    this._setHandlers(this.submitButton, this.submit)
  }

  submit = (event) => {
    event.preventDefault();
    this.search()

  }

  search = () => {
    const inputs = Array.from(this.container.elements);
    let value = ''
    inputs.forEach((input) => {
      if (input.tagName === 'INPUT') {
        value = input.value
      }
    })
    if (!value.match(/\S+/)) {
      return
    }
    this.cardList.renderLoader(true)
    this.api.getNews(value).then((data) => {
      if (data.articles.length === 0) {
        this.cardList.renderSection(false)
        this.cardList.clearContainer()
        this._setNotFound(true);
        return;
      }
      this.cardList.renderError(false)
      this._setNotFound(false);
      this.cardList.clearContainer()
      this.cardList.renderResults(data.articles, value)
      this.cardList.renderSection(true)

    }).catch((err) => {
      console.log(err)
      this.cardList.renderSection(true)
      this.cardList.renderError(true)
    }).finally(() => this.cardList.renderLoader(false))
  }
}
