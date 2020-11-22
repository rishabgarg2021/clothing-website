import React from 'react'
import "./menu-item.styles.scss"
import {withRouter} from 'react-router-dom'

const MenuItem = (props) => {
    console.log(props);
    const {title, imageUrl, size, history, match, link} = props;

    return (
        // dynamic string interpolation to give styling
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

export default withRouter(MenuItem);