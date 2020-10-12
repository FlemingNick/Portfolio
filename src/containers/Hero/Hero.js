import React from 'react';
import './Hero.css';
import Button from '../../Button/Button';

const Hero = () => {
    return(
        <div className="hero-container">
            <div className="hero-text-container">
            <h1 className="hero-header header-glow">Welcome!</h1>
            <p className="hero-text">Thank you for visiting my Page and showing interest into me and my work.<br/> My name is Jan-Fleming Nickelsen and I am a 25 year old developer from Germany</p>
            <Button name="Contact" destination="#contact"/>
            </div>
        </div>
    )
}

export default Hero;