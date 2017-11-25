import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BannerContainer from './components/BannerContainer';
import { FETCH_OFFERS, INIT } from './actions';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Landing from './components/Landing';
import Carousel from './components/Carousel';

class App extends Component {
  componentWillMount() {
    this.props.fetchInitial();
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.data && nextProps.data) {
      this.props.fetchOffers();
    }
  }
  render() {
    return (
      <div className="App">
        <main>
          {this.props.instaToken && this.props.data ?  (
            <Carousel {...this.props} />
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
      },
      fetchOffers() {
        dispatch({ type: FETCH_OFFERS })
      }
  })
)(App);
