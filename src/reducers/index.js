import { RECEIVE_IMAGES, RECEIVE_OFFERS, INIT, RECEIVE_LIKES, SET_TOKEN } from '../actions';

function flyVibeApp(state = {}, action) {
  switch (action.type) {
    case RECEIVE_LIKES:
      return Object.assign({}, state, { data: action.payload.data });

    case SET_TOKEN:
      const token = action.payload;
      localStorage.setItem('insta_token', token);

      return Object.assign({}, state, { instaToken: token });

    case RECEIVE_OFFERS:
      return Object.assign({}, state, { offers: action.payload });

    case RECEIVE_IMAGES:
      const { images, to } = action.payload;

      const newState = Object.assign({}, state, {
        offers: state.offers.map(offer => {
          if (offer.to === to) {
            return Object.assign({}, offer, { images: images.data, bannerImage: images[0] });
          }
          return offer;
        })
      });

      console.log(newState);

    return newState;

    default:
      return state;
  }
}

export default flyVibeApp;
