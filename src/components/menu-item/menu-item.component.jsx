import React from 'react'
import "./menu-item.styles.scss"


const MenuItem = ({title, imageUrl, size}) => {
    console.log("image url is ", imageUrl)
    return (
        // dynamic string interpolation to give styling
        <div className={ `${size} menu-item` } >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>


                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
        </div>

    )
}

export default MenuItem;