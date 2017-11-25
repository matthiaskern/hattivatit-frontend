import { connect } from 'react-redux'
import Offer from './Offer'

const mapStateToProps = state => {
    return {
        city: "London",
        price: 235,
        bookUrl: "https://moi"
    }
  }

const OfferContainer = connect(mapStateToProps)(Offer)

export default OfferContainer