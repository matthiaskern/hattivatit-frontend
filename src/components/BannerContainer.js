import { connect } from 'react-redux'
import Banner from './Banner'


const mapStateToProps = state => {
    return {
      src: "http://blank"
    }
  }

const BannerContainer = connect(mapStateToProps)(Banner)

export default BannerContainer