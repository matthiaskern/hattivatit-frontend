import React, { Component } from 'react'

const emptyLike = require('../assets/Empty-like.svg')
const hoverLike = require('../assets/Liked-like.svg')

class Offer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            hover: false
        }
    }

    handleClick(url) {

    }

    render() {
        const { to, price } = this.props
        let hover
        this.state.hover ? hover = hoverLike : hover = emptyLike

        return(
            <div className="OfferDivMain">
                <div className="OfferLeft">
                    <div className="likeWrapper">
                        <img src={hover} className="likeButton" />
                    </div>

                    <div className="offerWrapper">
                        <p className="city">{to}</p>
                        <p className="from">from&nbsp;</p>
                        <p className="price">{price} eur</p>
                    </div>
                </div>

                <div className="OfferRight">
                    <button
                        className="BookNow"
                        onMouseEnter={() => this.setState({hover: true})}
                        onMouseLeave={() => this.setState({hover: false})}
                        >BOOK NOW</button>
                </div>
                
            </div>
        )

    }
}

export default Offer
