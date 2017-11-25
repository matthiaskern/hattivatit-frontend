import { INIT, RECEIVE_DATA } from '../actions';
function flyVibeApp(state = {}, action) {
    
    switch (action.type) {
        case RECEIVE_DATA: 
            return action.payload; 
        
        default:
            return state
    }

}

export default flyVibeApp
