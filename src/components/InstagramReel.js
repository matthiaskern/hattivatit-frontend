import React, { Component } from 'react'
import Slider from 'react-slick';

class InstagramReel extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index) {

    }

    render() {
        const { sources } = this.props
        return(
            <div className="InstagramReelDiv">
                {sources.map(source => <div className="InstagramBox"><img
                    key={source}
                    src={source} 
                    alt="Instagram image"
                /></div>)}
            </div>
        )
    }
}

export default InstagramReel