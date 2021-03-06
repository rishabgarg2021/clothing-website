import React from 'react'
import "./menu-item.styles.scss"
import {withRouter} from 'react-router-dom'

const MenuItem = (props) => {

    const {title, imageUrl, size, history, match, link} = props;

    return (
        // dynamic string interpolation to give styling /hats
        // /string interpolation
        <div className={ `${size} menu-item` } 
            onClick = {()=> history.push(`${match.url}${link}`)}
        >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
               
        </div>

    )
}
//withRouter is a high order function which takes component and retuen a modified component which has react dom route history

export default withRouter(MenuItem);