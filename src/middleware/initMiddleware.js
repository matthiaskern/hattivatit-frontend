import registerServiceWorker from '../registerServiceWorker';
import { RECEIVE_OFFERS, FETCH_OFFERS, INIT, RECEIVE_DATA, SET_TOKEN } from '../actions';

const CLIENT_ID = '925edd4e1ada41f0b0e00ab519691d73';

export  default function instagramMiddleware() {
    // Use ES6 functional currying
    return store => {

        registerServiceWorker()

        function init() {
        const url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${window.location.origin}&response_type=token&scope=likes+comments+public_content`;
            const token = store.getState().instaToken;    

            if (token) {
              fetchLikes(token);
            } else {

                const [param, token] = window.location.hash.split('=');
    
                if (param === '#access_token') {
                    store.dispatch({ type: SET_TOKEN, payload: token })
                    fetchLikes(token);
                } else {

                    setTimeout( () => { 
                        window.location.replace(url);
                    }, 500);
                }
            }
        }

        function fetchLikes(token) {
          const url = `https://api.instagram.com/v1/users/self/media/liked?access_token=${token}`;

          return fetch(url).then(res => res.json()).then(data => store.dispatch({type: RECEIVE_DATA, payload: data}))
        }
        
        const offersUrl = 'https://hattivatit.azurewebsites.net/api/getoffer';

        function fetchOffers(locations = ['Berlin']) {
          const headers = new Headers();
          headers.append("Content-Type", "application/json");

          return fetch(offersUrl, { method: 'POST', headers, body: JSON.stringify({from: 'Helsinki', to: locations[0],
            dateFrom: '2018-01-01',
            dateTo: '2018-02-08'
          })}).then(res => res.json()).then(data => store.dispatch({type: RECEIVE_OFFERS, payload: data}))
        }

        return next => action => {
            console.log(action)

            switch (action.type) {
                case INIT:
                  init();
                  break;
        
                case FETCH_OFFERS:
                  fetchOffers();
                  break;

                default:

                    break
            }

            return next(action)
    
        }
    }
}
