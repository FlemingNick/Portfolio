import React from 'react';
import './Button.css';

const Button = (props) => {
    return(
        <div className="custom-button">
            <a href={props.destination} className="custom-button-link">{props.name}</a>
        </div>
    )
}
export default Button;