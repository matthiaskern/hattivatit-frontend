import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BannerContainer from './components/BannerContainer';
import { INIT } from './actions';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Landing from './components/Landing';
import Carousel from './components/Carousel';

class App extends Component {
  componentWillMount() {
    this.props.fetchInitial();
  }
  render() {
    return (
      <div className="App">
        <main>
          {this.props.instaToken && this.props.data ?  (
            <Carousel data={this.props.data} />
          ) : (
            <Landing />
          )}
        </main>
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
