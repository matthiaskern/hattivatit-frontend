import { connect } from 'react-redux'
import InstagramReel from './InstagramReel'

const italy = require('../assets/italy.jpg')

const mapStateToProps = state => {
    return {
      sources: ['https://www.interrail.eu/sites/interrail.eu/files/assets/images/2017/01/italy_pass_regular_desktop.jpg']
    }
  }

const BannerContainer = connect(mapStateToProps)(Banner)

export default BannerContainer