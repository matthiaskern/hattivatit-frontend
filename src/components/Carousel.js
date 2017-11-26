import React, { Component } from 'react';
import Banner from './Banner';
import Slider from 'react-slick';
import InstagramReelContainer from './InstagramReelContainer'
import Offer from './Offer'
import Audio from './Audio'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default class Carousel extends Component {
  state = { 
    
  }

  render() {
    const { currentIndex } = this.state;

    return (
        <Slider className="App" {...settings}>
          {this.props.offers.map((offer, index) => (
            <div key={offer.to} onTouchStart={() => this.setState({ currentIndex: index })} onClick={() => this.setState({ currentIndex: index })}>
            <Audio url={offer.trackUrl} active={index === currentIndex} />
            <Banner src={offer.images && offer.images[0].images.standard_resolution.url} title={offer.artist + ' - ' + offer.trackName} />
            <Offer to={offer.to} price={offer.price} />
            {offer.images && 
            <InstagramReelContainer sources={offer.images.map(i => i.images.standard_resolution.url)}/> }
          </div>
        ))}
      </Slider>
    );
  }
}

