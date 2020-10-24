const MAIN_API_OPTIONS = {
  baseUrl: 'https://news-explorer-api.ml',
  headers: {
    "Content-Type": "application/json",
  }
}

const NEWS_API_OPTIONS = {
  baseUrl: 'https://newsapi.org/v2/top-headlines?q=',
  key: '6530199df185419887bef11270be9f05',
  newsLang: 'ru',
  searchPeriodDays: 7,
  pageSize: 100,
  sortBy: 'popularity',
}

export {MAIN_API_OPTIONS, NEWS_API_OPTIONS}
