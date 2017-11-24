import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const url =
  'https://api.instagram.com/oauth/authorize/?client_id=925edd4e1ada41f0b0e00ab519691d73&redirect_uri=http://localhost:3000&response_type=token&scope=likes+comments+public_content';

const token = localStorage.getItem('insta_token');

if (token) {
  fetch(
    `https://api.instagram.com/v1/users/self/media/liked?access_token=${token}`
  )
    .then(res => res.json())
    .then(console.log);

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
} else {
  const [param, token] = window.location.hash.split('=');

  if (param === '#access_token') {
    localStorage.setItem('insta_token', token);
  } else {
    window.location.replace(url);
  }
}
