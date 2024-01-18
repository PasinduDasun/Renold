import React from 'react'
import './hero.css';
import heroimage from '../../Images/welding-1838986_1280.jpg'


function Hero() {
  return (
    <div className='mainHeroSection'>
        <div className="leftsection">
            <h3>Elevating Tea Machinery, Blending Tradition with Innovation</h3>
            <p>Welcome to Renold Engineering, a pioneering force in the heart of Sri Lanka's tea industry. As a leading tea machinery manufacturing company, we take pride in our commitment to excellence, innovation, and the seamless fusion of tradition with cutting-edge engineering.</p>
            <button>Contact Us</button>
        </div>
        <div className="rightsection">
          <img src={heroimage} alt='hero' className='heroimage'/>
        </div>
    </div>
  )
}

export default Hero