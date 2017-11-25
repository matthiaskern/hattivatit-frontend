import { INIT } from '../actions';
export default function instagramMiddleware() {
    // Use ES6 functional currying
    return store => {

        return next => action => {
            // Set up actions to intercept here
            switch (action.type) {
                
                case INIT:
                    console.log('init');
        
                default:
                    break
            }

        return next(action)
    
        }
    }
}
