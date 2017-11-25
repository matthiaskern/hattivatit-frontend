import { connect } from 'react-redux'
import InstagramReel from './InstagramReel'

const mapStateToProps = state => {
    return {
      sources: [
          'https://www.interrail.eu/sites/interrail.eu/files/assets/images/2017/01/italy_pass_regular_desktop.jpg',
          'https://www.eurail.com/sites/eurail.com/files/styles/asset_image_images_slider_big/public/assets/images/2017/02/eiffel_tower_paris_france_.jpg?itok=z0o9aKKb',
          'http://static5.businessinsider.com/image/56410ed2bd86ef135c8bd715/32-things-everyone-should-do-in-germany.jpg',
          'http://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg'
        ]
    }
  }

const InstagramReelContainer = connect(mapStateToProps)(InstagramReel)

export default InstagramReelContainer