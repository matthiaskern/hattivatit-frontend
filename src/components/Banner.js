import React from 'react'

const Banner = ({ src }) => {
    console.log(src)
    return <div className="Banner">
            <img
                className="Portrait" 
                src={src} 
                alt="italy"
                />
        </div>
}

export default Banner