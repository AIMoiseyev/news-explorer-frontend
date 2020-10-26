!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}));var o=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_setHandlers",(function(e,t){e.addEventListener("click",t)})),r(this,"_removeHandlers",(function(e,t){n.domElement.removeEventListener("click",t)})),this.domElement=t}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var r={baseUrl:"https://news-explorer-api.ml",headers:{"Content-Type":"application/json"}},o={baseUrl:"https://nomoreparties.co/news/v2/everything?q=",key:"6530199df185419887bef11270be9f05",newsLang:"ru",searchPeriodDays:7,pageSize:100,sortBy:"popularity"},i="/news-explorer-frontend/"},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return o}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n,o;return t=e,(n=[{key:"signUp",value:function(e,t,n){return fetch("".concat(this.baseUrl,"/signup"),{method:"POST",credentials:"include",headers:this.headers,body:JSON.stringify({email:e,password:t,name:n})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"signIn",value:function(e,t){return fetch("".concat(this.baseUrl,"/signin"),{method:"POST",credentials:"include",headers:this.headers,body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e:Promise.reject(e.status)}))}},{key:"getUser",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"logout",value:function(){return fetch("".concat(this.baseUrl,"/logout"),{method:"POST",credentials:"include",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"createArticle",value:function(e,t){return fetch("".concat(this.baseUrl,"/articles"),{method:"POST",credentials:"include",headers:this.headers,body:JSON.stringify({keyword:t,title:e.title,text:e.description,date:e.publishedAt,source:e.source.name,link:e.url,image:e.urlToImage})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"deleteArticle",value:function(e){return fetch("".concat(this.baseUrl,"/articles/").concat(e),{method:"DELETE",credentials:"include",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getArticles",value:function(){return fetch("".concat(this.baseUrl,"/articles"),{method:"GET",credentials:"include",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}}])&&r(t.prototype,n),o&&r(t,o),e}()},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return l}));var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(n,e);var t=i(n);function n(e,r,o,i){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),u(c(a=t.call(this,e)),"_setUserName",(function(e){a.userName.textContent=e})),u(c(a),"_logout",(function(){return a.mainApi.logout().then((function(e){window.location.pathname===a.mainPath?(a.headerList.classList.remove("header__list_logged_in"),a.headerList.classList.add("header__list_logged_out"),localStorage.setItem("loggedIn","false"),window.location.reload()):window.location.replace(a.mainPath)})).catch((function(e){throw new Error(e)}))})),u(c(a),"_setLoginHeader",(function(e){a.headerList.classList.remove("header__list_logged_out"),a.headerList.classList.add("header__list_logged_in"),a._setUserName(e.data.name),a._setHandlers(a.userName,a._logout)})),u(c(a),"_setLogoutHeader",(function(){a.headerList.classList.remove("header__list_logged_in"),a.headerList.classList.add("header__list_logged_out")})),u(c(a),"render",(function(){return a.mainApi.getUser().then((function(e){e?(a._setLoginHeader(e),localStorage.setItem("loggedIn","true")):(a._setLogoutHeader(),localStorage.setItem("loggedIn","false"),window.location.pathname!==a.mainPath&&window.location.replace(a.mainPath))})).catch((function(e){if(a._setLogoutHeader(),console.log(window.location.pathname),localStorage.setItem("loggedIn","false"),window.location.pathname===a.mainPath)throw new Error(e);window.location.replace(a.mainPath)}))})),a.container=r,a.mainApi=o,a.headerList=a.container.querySelector(".header__list"),a.userName=e,a.mainPath=i,a}return n}(n(0).a)},function(e,t,n){"use strict";t.a=function(e){var t=new Date(e);return"".concat(t.toLocaleString("ru",{day:"numeric",month:"long"}),", ").concat(t.getFullYear())}},function(e,t,n){"use strict";t.a=function(e,t,n,r){e.classList.add("header__menu_hidden"),t.classList.remove("header__menu-close_hidden"),n.classList.add("header__navigation_mobile-opened"),r.classList.add("page_scroll-off")}},function(e,t,n){"use strict";t.a=function(e,t,n,r){t.classList.add("header__menu-close_hidden"),e.classList.remove("header__menu_hidden"),n.classList.remove("header__navigation_mobile-opened"),r.classList.remove("page_scroll-off")}},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);n(8);var r=n(2),o=n(3),i=n(1),a=n(4);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"create",(function(e){var t=document.createElement("div");t.classList.add("card"),t.insertAdjacentHTML("afterbegin",'\n    <a href="" class="card__link" target="_blank"></a>\n    <img src="<%=require(\'../../images/cardimage.jpg\')%>" alt="изображение новости" class="card__image"/>\n          <button class="card__icon card__icon_type_keyword" type="button"></button>\n          <button class="card__icon card__icon_type_delete" type="button"></button>\n          <button class="card__icon card__icon_type_description" type="button"></button>\n          <div class="card__container">\n            <time class="card__date" datetime="2020-08-02"></time>\n            <h3 class="card__title"></h3>\n            <p class="card__text"></p>\n            <p class="card__source"></p>\n          </div>');var r=t.querySelector(".card__image");n.buttonDelete=t.querySelector(".card__icon_type_delete");var o=t.querySelector(".card__icon_type_keyword"),i=t.querySelector(".card__icon_type_description"),c=t.querySelector(".card__date"),s=t.querySelector(".card__title"),u=t.querySelector(".card__text"),l=t.querySelector(".card__source"),d=t.querySelector(".card__link");return r.setAttribute("src",e.image),d.setAttribute("href",e.link),i.textContent="Убрать из сохранённых",c.setAttribute("datetime",e.date),o.textContent=e.keyword,c.textContent=Object(a.a)(e.date),s.textContent=e.title,u.textContent=e.text,l.textContent=e.source,t.setAttribute("id",e._id),n.setEventListeners(),t})),c(this,"setEventListeners",(function(){n.buttonDelete.addEventListener("click",(function(e){return n.deleteArticle(e)}))})),c(this,"deleteArticle",(function(e){var t=e.target.closest(".card");n.mainApi.deleteArticle(t.id).then((function(e){t.remove()})).catch((function(e){console.log(e)}))})),this.mainApi=t};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(n,e);var t=d(n);function n(e,r,o,i){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),y(h(a=t.call(this,e)),"_addCard",(function(e){a.newsContainer.appendChild(e)})),y(h(a),"_renderResults",(function(e){if(e.length>3)for(var t=0;t<=2;t++)a._addCard(a.card.create(e[t])),a.showMoreButton.classList.add("news__button_visible");else e.forEach((function(e){a._addCard(a.card.create(e)),a.showMoreButton.classList.remove("news__button_visible"),a._removeHandlers(a.showMoreButton,a._showMore)}));a._renderSection(!0)})),y(h(a),"renderInitialResults",(function(){a.api.getArticles().then((function(e){0!==e.data.length?(a.data=e.data,a._renderResults(e.data),a._setHandlers(a.showMoreButton,a._showMore)):a._renderSection(!1)})).catch((function(e){console.log(e)}))})),y(h(a),"_renderSection",(function(e){e?a.container.classList.add("news_visible"):a.container.classList.remove("news_visible")})),y(h(a),"_showMore",(function(){a.data.length>0&&a.data.length<=3&&(a.data=a.data.slice(3),a._renderResults(a.data)),a.data.length>3?(a.data=a.data.slice(3),a._renderResults(a.data)):console.log("finish")})),a.card=r,a.container=o,a.showMoreButton=e,a.newsContainer=o.querySelector(".news__grid-container"),a.api=i,a}return n}(n(0).a);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v,w,S,j,O,x,L,C,P,k,E,T,q,A,R=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"render",(function(){r.api.getArticles().then((function(e){r.newsData=e.data,r.newsQuantity=e.data.length,r._renderTitle(r.newsQuantity),r._renderSubtitle()}))})),g(this,"_renderTitle",(function(e){r.api.getUser().then((function(t){r.newsTitle=r.container.querySelector(".searched-news__title"),0===e&&(r.newsTitle.textContent="".concat(t.data.name,", у вас нет сохранённых статей")),1===e&&(r.newsTitle.textContent="".concat(t.data.name,", у вас ").concat(e," сохранённая статья")),e>1&&e<5&&(r.newsTitle.textContent="".concat(t.data.name,", у вас ").concat(e," сохранённые статьи")),e>=5&&(r.newsTitle.textContent="".concat(t.data.name,", у вас ").concat(e," сохранённых статей"))}))})),g(this,"_renderSubtitle",(function(){var e={};r.newsData.map((function(e){return e.keyword})).forEach((function(t){void 0===e[t]?e[t]=1:e[t]++}));var t=Object.keys(e).sort((function(t,n){return e[n]-e[t]}));if(t.length>3){var n=m(t,2);r.firstKey.textContent=n[0],r.secondKey.textContent=n[1],r.firstKey.textContent+=", ",r.thirdKey.textContent="".concat(t.length-2," другим")}if(3===t.length){var o=m(t,3);r.firstKey.textContent=o[0],r.secondKey.textContent=o[1],r.thirdKey.textContent=o[2],r.firstKey.textContent+=", "}if(2===t.length){var i=m(t,2);r.firstKey.textContent=i[0],r.secondKey.textContent=i[1],r.firstKey.textContent+=", ",r.union.textContent=""}if(1===t.length){var a=m(t,1);r.firstKey.textContent=a[0],r.union.textContent=""}0===t.length&&(r.union.textContent="")})),this.api=n,this.container=t,this.firstKey=this.container.querySelector("#first"),this.secondKey=this.container.querySelector("#second"),this.thirdKey=this.container.querySelector("#third"),this.union=this.container.querySelector(".searched-news__union")},U=n(5),I=n(6);v=new r.a(i.a),w=document.querySelector(".page"),S=document.querySelector(".header"),j=document.querySelector(".news"),O=document.querySelector(".searched-news"),x=document.querySelector(".header__navigation"),L=S.querySelector(".header__button-text"),C=document.querySelector(".news__button"),P=document.querySelector(".header__menu"),k=document.querySelector(".header__menu-close"),E=new R(O,v),T=new s(v),q=new p(C,T,j,v),A=new o.a(L,S,v,i.b),E.render(),q.renderInitialResults(),A.render(),P.addEventListener("click",(function(){return Object(U.a)(P,k,x,w)})),k.addEventListener("click",(function(){return Object(I.a)(P,k,x,w)}))}]);