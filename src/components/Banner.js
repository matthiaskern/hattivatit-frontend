import React from 'react'

const Banner = ({ src }) => {
    console.log(src)
    return <div>
            <img
                className="BannerImage" 
                src={src} 
                alt="italy"
                />
        </div>
}

export default Banner