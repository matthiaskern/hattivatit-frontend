import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BannerContainer from './components/BannerContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <BannerContainer />
      </div>
    );
  }
}

export default App;
