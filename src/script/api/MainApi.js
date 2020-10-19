"use strict"

export default class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.headers = options.headers
  }

  signup(email, password, name) {
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
}
