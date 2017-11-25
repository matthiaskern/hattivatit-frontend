import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import flyVibeApp from './reducers'
import middleware from './middleware'

let store = createStore(flyVibeApp, undefined, applyMiddleware(middleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
