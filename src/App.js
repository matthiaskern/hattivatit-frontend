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
          Finnair Personalized Flight Search
        </header>
        {this.props.instaToken ? 
          <div>
            <BannerContainer />
            { this.props.data &&
              <ul>{this.props.data.map(({ location }) => <li>{location.name}</li>)}</ul>
            }
          </div>

          : <div>
              You're not logged in yet. Redirecting...
            </div>
        
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
