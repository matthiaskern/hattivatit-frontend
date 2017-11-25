import { connect } from 'react-redux'
import InstagramReel from './InstagramReel'

const mapStateToProps = state => {
    return {
      sources: [
          'https://www.interrail.eu/sites/interrail.eu/files/assets/images/2017/01/italy_pass_regular_desktop.jpg',
          'https://www.eurail.com/sites/eurail.com/files/styles/asset_image_images_slider_big/public/assets/images/2017/02/eiffel_tower_paris_france_.jpg?itok=z0o9aKKb'
        ]
    }
  }

const InstagramReelContainer = connect(mapStateToProps)(InstagramReel)

export default InstagramReelContainer