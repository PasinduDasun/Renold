import React from 'react'
import './hero.css';
import heroImange from '../../Images/png-transparent-ginseng-tea-white-tea-green-tea-cup-tea-food-tea-teacup.png';

function Hero() {
  return (
    <div className='mainHeroSection'>
        <div className="leftsection">
            <h3>Leading Tea Machinery Manufacturing Company In Southern Provice</h3>
            <button>Contact Us</button>
        </div>
        <div className="rightsection">
            <img src={heroImange} className='heroImage' alt='Tea machine'/>
        </div>
    </div>
  )
}

export default Hero