"use strict"

export default class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.headers = options.headers
  }

  signUp(email, password, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        email:email,
        password: password,
        name: name,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  signIn(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        email: email,
        password: password,
      })
    }).then((res) => {
      if (res.ok) {
        return  res;
      }
      return Promise.reject(res.status)
    })
  }

  getUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status)
    })
  }

  logout() {
    return fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(res.status)
    })
  }

  createArticle(data, keyWord) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      credentials: 'include',
      headers: this.headers,
      body: JSON.stringify({
        keyword: keyWord,
        title: data.title,
        text: data.description,
        date: data.publishedAt,
        source: data.source.name,
        link: data.url,
        image: data.urlToImage,
      })
    }).then((res) => {
      if (res.ok) {
        return  res.json();
      }
      return Promise.reject(res.status)
    })
  }

  deleteArticle(id) {
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return  res.json();
      }
      return Promise.reject(res.status)
    })
  }

  getArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      credentials: 'include',
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return  res.json();
      }
      return Promise.reject(res.status)
    })
  }
}
