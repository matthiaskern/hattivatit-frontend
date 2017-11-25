import { RECEIVE_OFFERS, INIT, RECEIVE_DATA, SET_TOKEN } from '../actions';
function flyVibeApp(state = {}, action) {
    
    switch (action.type) {
        case RECEIVE_DATA: 
            return Object.assign({}, state, { data: action.payload.data })

        case SET_TOKEN:
            const token = action.payload;
            localStorage.setItem('insta_token', token);

            return Object.assign({}, state, { instaToken: token })

        case RECEIVE_OFFERS:
            return Object.assign({}, state, { offers: action.payload })
        
        default:
            return state
    }

}

export default flyVibeApp
