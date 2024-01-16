import React from 'react'
import './hero.css';
import heroimage from '../../Images/welding-1838986_1280.jpg'


function Hero() {
  return (
    <div className='mainHeroSection'>
        <div className="leftsection">
            <h3>Leading Tea Machinery Manufacturing Company In Southern Provice</h3>
            <button>Contact Us</button>
        </div>
        <div className="rightsection">
          <img src={heroimage} alt='hero' className='heroimage'/>
        </div>
    </div>
  )
}

export default Hero