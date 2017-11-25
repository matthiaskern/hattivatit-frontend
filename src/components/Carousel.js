import React, { Component } from 'react';
import BannerContainer from './BannerContainer';
import Slider from 'react-slick';
import InstagramReelContainer from './InstagramReelContainer'
import Offer from './Offer'

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
        {this.props.offers.map(offer => (
          <div key={offer.to}>
            <audio controls style={{ display: 'none' }}>
              <source src={offer.trackUrl} />
            </audio>
            <BannerContainer />
            <Offer to={offer.to} price={offer.price} />
            {offer.images && 
            <InstagramReelContainer sources={offer.images.map(i => i.images.standard_resolution.url)}/> }
          </div>
        ))}
      </Slider>
    );
  }
}

