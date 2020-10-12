import React from 'react';
import './PortfolioElement.css';
import Button from '../../../Button/Button';

const PortfolioElement = (props) => {
    return(
        <div className="portfolio-element">
            <div className="portfolio-headline-container">
                <h3 className="portfolio-headline">{props.title}</h3>
            </div>
            <img src={props.image} alt={props.alternative} className="portfolio-image"/>
            <p className="portfolio-text">{props.children}</p>
            <div className="button-container">
                <Button name="More" destination="#"/>   
            </div>
            

        </div>
    )
};

export default PortfolioElement;