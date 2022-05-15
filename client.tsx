import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from '@layouts/App';

import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from '@store/index';

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'https://assignment.alocados.xyz' : 'http://localhost:3090';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </Provider>,
  document.querySelector('#app'),
);