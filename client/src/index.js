import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
// Delete these in production
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
/*
const myNav = document.getElementById('mynav');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        // myNav.classList.add("nav-colored");
        myNav.classList.remove("nav");
    }
    else {
        myNav.classList.add("nav");
        // myNav.classList.remove("nav-colored");
    }
};
*/
