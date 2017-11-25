export default function channelsMiddleware(url, channel = "room") {
    // Use ES6 functional currying
    return store => {

        function init() {
            const url = 'https://api.instagram.com/oauth/authorize/?client_id=925edd4e1ada41f0b0e00ab519691d73&redirect_uri=http://localhost:3000&response_type=token&scope=likes+comments+public_content';
            const token = localStorage.getItem('insta_token');
    
            if (token) {
                fetch(
                `https://api.instagram.com/v1/users/self/media/liked?access_token=${token}`
                )
                .then(res => res.json())
                .then(console.log);
        
                ReactDOM.render(<App />, document.getElementById('root'));
                registerServiceWorker();
            } else {
                const [param, token] = window.location.hash.split('=');
    
                if (param === '#access_token') {
                    localStorage.setItem('insta_token', token);
                } else {
                    window.location.replace(url);
                }
            }
        }

        return next => action => {
            // Set up actions to intercept here
            switch (action.type) {
        
                default:
                    break
            }

        return next(action)
    
        }
    }
}