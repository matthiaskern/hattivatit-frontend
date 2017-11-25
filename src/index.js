import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import flyVibeApp from './reducers'

let store = createStore(flyVibeApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
