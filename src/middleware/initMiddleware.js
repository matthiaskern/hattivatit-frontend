import registerServiceWorker from '../registerServiceWorker';
import { FETCH_LIKES, RECEIVE_OFFERS, FETCH_OFFERS, INIT, RECEIVE_LIKES, SET_TOKEN } from '../actions';

const CLIENT_ID = '925edd4e1ada41f0b0e00ab519691d73';


const unique = array => [...new Set(array)]

export  default function instagramMiddleware() {
    // Use ES6 functional currying
    return store => {

        registerServiceWorker()

        function init() {
            const url = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${window.location.origin}&response_type=token&scope=likes+comments+public_content`;

                const [param, token] = window.location.hash.split('=');
    
                if (param === '#access_token') {
                    store.dispatch({ type: SET_TOKEN, payload: token })
                } else {

                    setTimeout( () => { 
                        window.location.replace(url);
                    }, 500);
                }
        }

        function fetchLikes() {
          const token = store.getState().instaToken;
          const url = `https://api.instagram.com/v1/users/self/media/liked?access_token=${token}`;

          return fetch(url).then(res => res.json()).then(data => store.dispatch({type: RECEIVE_LIKES, payload: data}))
        }
        
        const offersUrl = 'https://hattivatit.azurewebsites.net/api/getofferlist';

        function fetchOffers(locations = ['Berlin']) {
          const headers = new Headers();
          headers.append("Content-Type", "application/json");

          const commonPayload = {
            from: 'Helsinki', 
            dateFrom: '2018-01-01',
            dateTo: '2018-02-08'
          };

          const uniqueLocations = unique(locations )
          const payloads = uniqueLocations.filter(name => !name.toLowerCase().startsWith('rey')).map(to => ({...commonPayload, to}));



          return fetch(offersUrl, { method: 'POST', headers, body: JSON.stringify(payloads)}).then(res => res.json()).then(data => store.dispatch({type: RECEIVE_OFFERS, payload: data}))
        }

        return next => action => {
            console.log(action)

            switch (action.type) {
                case INIT:
                  init();
                  break;
        
                case FETCH_LIKES:
                  fetchLikes();

                case FETCH_OFFERS:
                  fetchOffers(action.payload);
                  break;

                default:

                    break
            }

            return next(action)
        }
    }
}
