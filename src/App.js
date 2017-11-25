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
  componentWillReceiveProps(nextProps) {
    if (!this.props.data && nextProps.data) {
      const locations = nextProps.data.map(
        ({ location }) => location.name.split(',')[0]
      );
      this.props.fetchOffers(locations);
    }
  }
  render() {
    return (
      <div className="App">
        <main>
          {this.props.offers ? (
            <Carousel {...this.props} />
          ) : (
            <Landing {...this.props} />
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
    fetchOffers(locations) {
      dispatch({ type: FETCH_OFFERS, payload: locations });
    }
  })
)(App);
