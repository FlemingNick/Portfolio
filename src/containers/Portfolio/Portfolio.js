import React from 'react';
import './Portfolio.css';
import PortfolioElement from './PortfolioElement/PortfolioElement';

const Portfolio = () => {
    return(
        <div className="portfolio-container" id="portfolio">
            <div className="header-container">
                <h1 className="section-header header-glow">Portfolio</h1>
            </div>
            <div className="portfolio-body">
                <PortfolioElement title="Ghostboy" image="https://64.media.tumblr.com/0288a1c8ddae9b42a5a413a0589b3624/tumblr_nd5uphw4Tc1rtbl5vo1_400.gifv" alternative="Ghostboy Cover">
                    Handdrawn 2D-Shoot-'em-up inspired by Cuphead. Created in Unreal Engine 4 with a combination of Blueprints and C++. Soundtrack composed by myself using Bosca Ceoil. Animation done in Blender.
                </PortfolioElement>
                <PortfolioElement title="Ghostboy" image="https://64.media.tumblr.com/0288a1c8ddae9b42a5a413a0589b3624/tumblr_nd5uphw4Tc1rtbl5vo1_400.gifv" alternative="Ghostboy Cover">
                    Handdrawn 2D-Shoot-'em-up inspired by Cuphead. Created in Unreal Engine 4 with a combination of Blueprints and C++. Soundtrack composed by myself using Bosca Ceoil. Animation done in Blender.
                </PortfolioElement>
                <PortfolioElement title="Ghostboy" image="https://64.media.tumblr.com/0288a1c8ddae9b42a5a413a0589b3624/tumblr_nd5uphw4Tc1rtbl5vo1_400.gifv" alternative="Ghostboy Cover">
                    Handdrawn 2D-Shoot-'em-up inspired by Cuphead. Created in Unreal Engine 4 with a combination of Blueprints and C++. Soundtrack composed by myself using Bosca Ceoil. Animation done in Blender.
                </PortfolioElement>
                <PortfolioElement title="Ghostboy" image="https://64.media.tumblr.com/0288a1c8ddae9b42a5a413a0589b3624/tumblr_nd5uphw4Tc1rtbl5vo1_400.gifv" alternative="Ghostboy Cover">
                    Handdrawn 2D-Shoot-'em-up inspired by Cuphead. Created in Unreal Engine 4 with a combination of Blueprints and C++. Soundtrack composed by myself using Bosca Ceoil. Animation done in Blender.
                </PortfolioElement>
            </div>
            
        </div>
    )
}
export default Portfolio;