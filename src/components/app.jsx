import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root';
import configureStore from './store';

let store = configureStore({});

ReactDOM.render(
  <AppContainer>
    <Root store={ store }/>
  </AppContainer>,
  document.querySelector('.render-target')
);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={ store }/>
      </AppContainer>,
      document.querySelector('.render-target')
    );
  });
}