import React, { Component } from 'react'

class Offer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(url) {

    }

    render() {
        const { city, price, bookUrl } = this.props

        return(
            <div className="OfferDivMain">
                
                <div className="OfferLeft">
                    <p className="city">san diego</p>
                    <p className="from">from</p>
                    <p className="price">1025 eur</p>
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

/*
                    <h1 className="city">san diego</h1>
                    <h3 className="from">from</h3>
                    <h2 className="price">1025 eur</h2>
*/

export default Offer