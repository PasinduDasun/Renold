import React from 'react'
import './aboutUs.css';
import WeldingImage from '../../Images/types-of-welding-header-2019_0.jpg';

function AboutUs() {
  return (
    <div className='parentbox'>
        <h3>About Us</h3>
      <div className="aboutleft">
        <img src={WeldingImage} alt='Welding Man' className='leftimage'/>
      </div>
      <div className="aboutRight">
        <p className='aboutus'>Here comes the about paragraph</p>
      </div>
    </div>
  )
}

export default AboutUs
