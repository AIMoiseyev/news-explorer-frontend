export default class SearchedNews {
  constructor(container, api) {
    this.api = api
    this.container = container
    this.firstKey = this.container.querySelector('#first');
    this.secondKey = this.container.querySelector('#second');
    this.thirdKey = this.container.querySelector('#third');
    this.union = this.container.querySelector('.searched-news__union')
  }

  render = () => {
    this.api.getArticles().then((data) => {
      this.newsData = data.data
      this.newsQuantity = data.data.length
      this._renderTitle(this.newsQuantity)
      this._renderSubtitle()
    })
  }

  _renderTitle = (newsQuantity) => {
    this.api.getUser().then((res) => {
      this.newsTitle = this.container.querySelector('.searched-news__title');
      if (newsQuantity === 0) {
        this.newsTitle.textContent = `${res.data.name}, у вас нет сохранённых статей`
      }
      if (newsQuantity === 1) {
        this.newsTitle.textContent = `${res.data.name}, у вас ${newsQuantity} сохранённая статья`
      }
      if (newsQuantity > 1 && newsQuantity < 5) {
        this.newsTitle.textContent = `${res.data.name}, у вас ${newsQuantity} сохранённые статьи`
      }
      if (newsQuantity >= 5) {
        this.newsTitle.textContent = `${res.data.name}, у вас ${newsQuantity} сохранённых статей`
      }
    })
  }

  _renderSubtitle = () => {
    const quantityKeyWords = {}
    const keyWords = this.newsData.map(elem => {
      return elem.keyword
    })
    keyWords.forEach(elem => {
      if (quantityKeyWords[elem] === undefined) {
        quantityKeyWords[elem] = 1
      } else {
        quantityKeyWords[elem]++;
      }
    })
    const sortedKeyWords = Object.keys(quantityKeyWords)
      .sort(function (a, b) {
        return quantityKeyWords[b] - quantityKeyWords[a]
      });
    if (sortedKeyWords.length > 3) {
      [this.firstKey.textContent, this.secondKey.textContent] = sortedKeyWords;
      this.firstKey.textContent += ', '
      this.thirdKey.textContent = `${sortedKeyWords.length - 2} другим`
    }
    if(sortedKeyWords.length === 3) {
      [this.firstKey.textContent, this.secondKey.textContent, this.thirdKey.textContent] = sortedKeyWords;
      this.firstKey.textContent += ', '
    }
    if(sortedKeyWords.length === 2) {
      [this.firstKey.textContent, this.secondKey.textContent] = sortedKeyWords;
      this.firstKey.textContent += ', '
      this.union.textContent = ''
    }
    if(sortedKeyWords.length === 1) {
      [this.firstKey.textContent] = sortedKeyWords;
      this.union.textContent = ''
    }
    if(sortedKeyWords.length === 0) {
      this.union.textContent = ''
    }
  }
}
