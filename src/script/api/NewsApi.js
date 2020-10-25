import formatDate from '../utils/format-date';
import previousDate from '../utils/previous-date'

export default class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.key = options.key;
    this.newsLang = options.newsLang;
    this.searchPeriodDays = options.searchPeriodDays;
    this.pageSize = options.pageSize;
    this.sortBy = options.sortBy;
  }

  getNews(keyWord) {
    const currentDate = formatDate(new Date());
    const previousDateValue = formatDate(previousDate(this.searchPeriodDays))
    return fetch(`${this.baseUrl}/${keyWord}&from=${previousDateValue}&to=${currentDate}&language=${this.newsLang}&sortBy=${this.newsLang}&pageSize=${this.searchPeriodDays}&apiKey=${this.key}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(res.status)
      })
  }

}
