import React, { Component } from 'react'; import logo from './logo.svg';
import './App.css';
import BannerContainer from './components/BannerContainer';
import { INIT } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentWillMount() {
    this.props.fetchInitial();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BannerContainer />
        { this.props.data &&
          <ul>{this.props.data.map(({ location }) => <li>{location.name}</li>)}</ul>
        }

      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    fetchInitial() {
      dispatch({ type: INIT });
    }
  })
)(App);
