import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import App from './components/App';
import reducer from './reducers/reducer';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});