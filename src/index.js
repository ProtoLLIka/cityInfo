import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { searchStore } from './store/store.js';

ReactDOM.render(
  <Provider store={searchStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
