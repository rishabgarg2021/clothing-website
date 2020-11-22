import React  from 'react';
import './homepage.styles.scss';
import MenuItem from "../../components/menu-item/menu-item.component"
import Directory from "../../components/directory/directory.component"
const HomePage = (props) => {
    console.log("home page brpoute is ", props);
    return (
    <div className ="homepage">
        <Directory  {...props}/>
    </div>)
}

export default HomePage;