import React, { Component } from 'react'

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
                    {price} {to}
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
