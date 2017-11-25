import React, { Component } from 'react'

const emptyLike = require('../assets/Empty-like.svg')

class Offer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(url) {

    }

    render() {
        const { to, price } = this.props

        return(
            <div className="OfferDivMain">
                <div className="OfferLeft">
                    <div className="likeWrapper">
                        <img src={emptyLike} className="likeButton" />
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
                        onClick={() => this.handleClick()}
                        >BOOK NOW</button>
                </div>
                
            </div>
        )

    }
}

export default Offer
