import React from 'react';
import './NavElement.css';

const NavElement = (props) => {

    return(
        <div className="navElement">
            <a href={props.linkTo} className="navLink">{props.children}</a>
        </div>
    )
}

export default NavElement;