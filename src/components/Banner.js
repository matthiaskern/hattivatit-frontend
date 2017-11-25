import React from 'react'

const Banner = ({ src, title }) => {
    console.log(src)
    return <div className="Banner">
                <img
                className="Portrait" 
                src={src} 
                alt="italy"
                />
                <div id="overlay">{title}</div>
                <svg id="blursvg" width="450" height="100" viewBox="0 0 450 100">
                        <defs>
                                <filter id="blur">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                                </filter>
                        </defs>
                        <image filter="url(#blur)" src={src} x="0" y="0" height="300px" width="450px" />
                </svg>
        </div>
}

export default Banner
