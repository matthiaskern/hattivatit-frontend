import React, { Component } from 'react';
import BannerContainer from './BannerContainer';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class Carousel extends Component {
  render() {
    return (
      <Slider className="App" {...settings}>
        <div>
          <audio controls>
            <source src="https://p.scdn.co/mp3-preview/f7a1b8a270f310e43ced2720c9af5f29f6476b79?cid=774b29d4f13844c495f206cafdad9c86" />
          </audio>
          <BannerContainer />
          {this.props.offers &&
          
          <h2>
            { this.props.offers[0].to } - 
            { this.props.offers[0].price }
          </h2>}

          <ul>
            {this.props.data.map(({ location, id }) => (
              <li key={id}>{location && location.name}</li>
            ))}
          </ul>
        </div>
      </Slider>
    );
  }
}
