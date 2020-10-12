import React from 'react';
import Navbar from './containers/Navbar/Navbar'
import Hero from './containers/Hero/Hero'
import Portfolio from './containers/Portfolio/Portfolio'
import Contact from './containers/contact/contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="body">
        <div className="hero-body">
          <Hero/>
        </div>
        <div className="portfolio-body">
          <Portfolio/>  
        </div>
        <div className='contact-body'>
          <Contact/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
