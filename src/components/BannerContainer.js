import { connect } from 'react-redux'
import Banner from './Banner'

const italy = require('../assets/italy.jpg')

const mapStateToProps = state => {
    return {
    // src: italy
    }
  }

const BannerContainer = connect(mapStateToProps)(Banner)

export default BannerContainer
