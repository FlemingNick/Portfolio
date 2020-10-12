import React from 'react';
import NavElement from './NavElement/NavElement';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav>
            <div>Burger</div>
            <div className="navButtons">
                <NavElement linkTo="#">Home</NavElement>
                <NavElement linkTo="#portfolio">Portfolio</NavElement>
                <NavElement linkTo="#contact">Contact</NavElement>
            </div>
            
        </nav>
    )
}

export default Navbar;

