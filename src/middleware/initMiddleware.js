import registerServiceWorker from '../registerServiceWorker';
import { INIT, RECEIVE_DATA } from '../actions';

export  default function instagramMiddleware() {
    // Use ES6 functional currying
    return store => {

        registerServiceWorker()

        function init() {
            const url = 'https://api.instagram.com/oauth/authorize/?client_id=925edd4e1ada41f0b0e00ab519691d73&redirect_uri=http://localhost:3000&response_type=token&scope=likes+comments+public_content';
            const token = localStorage.getItem('insta_token');
    
            if (token) {
              fetchLikes(token);
            } else {

                const [param, token] = window.location.hash.split('=');
    
                if (param === '#access_token') {
                    localStorage.setItem('insta_token', token);
                    fetchLikes(token);
                } else {

                    window.location.replace(url);
                }
            }
        }

        function fetchLikes(token) {
          const url = `https://api.instagram.com/v1/users/self/media/liked?access_token=${token}`;

          return fetch(url).then(res => res.json()).then(data => store.dispatch({type: RECEIVE_DATA, payload: data}))
        }

        return next => action => {
            console.log(action)

            switch (action.type) {
                case INIT:
                  init();
                  break;
        
                default:

                    break
            }

            return next(action)
    
        }
    }
}
