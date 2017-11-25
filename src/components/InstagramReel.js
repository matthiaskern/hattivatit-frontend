import React, { Component } from 'react'
import Slider from 'react-slick';
import SET_BANNER from '../actions'

class InstagramReel extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(url) {
        // store.dispatch({ 
        //     type: SET_BANNER, 
        //     url: url
        // })
    }

    render() {
        const { sources } = this.props
        return(
            <div className="InstagramReelDiv">
                {sources.map(source => <div className="InstagramBox" key={source + 1}>
                <img
                    key={source}
                    src={source} 
                    alt="Instagram image"
                    onClick={() => this.handleClick(source)}
                /></div>
                )}
            </div>
        )
    }
}

export default InstagramReel