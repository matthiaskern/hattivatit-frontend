import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import flyVibeApp from './reducers'
import instagramMiddleware from './middleware/instagramMiddleware'
import initMiddleware from './middleware/initMiddleware'

let store = createStore(flyVibeApp, {}, applyMiddleware(initMiddleware(), instagramMiddleware()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
