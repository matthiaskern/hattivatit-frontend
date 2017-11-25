import { INIT, RECEIVE_IMAGES, FETCH_IMAGES } from '../actions';
export default function instagramMiddleware() {
  // Use ES6 functional currying
  return store => {
    return next => action => {
      // Set up actions to intercept here
      switch (action.type) {
        case FETCH_IMAGES: 
          const { instaToken } = store.getState();
          const to = action.payload;
          const trimmedTo = to.replace(/\s/g, '');
          const url = `https://api.instagram.com/v1/tags/${trimmedTo}/media/recent?access_token=${instaToken}`;
          fetch(url)
            .then(res => res.json())
            .then(images => store.dispatch({ type: RECEIVE_IMAGES, payload: { images, to } }));

          break;
                           
        case INIT:
          console.log('init');
          break;

        default:
          break;
      }

      return next(action);
    };
  };
}
