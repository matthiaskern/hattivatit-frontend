import { connect } from 'react-redux'
import InstagramReel from './InstagramReel'

const mapStateToProps = (state, ownProps) => {
    return {
    }
  }

const InstagramReelContainer = connect(mapStateToProps)(InstagramReel)

export default InstagramReelContainer
