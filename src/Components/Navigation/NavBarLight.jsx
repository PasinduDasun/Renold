import React from 'react'
import { NavLink } from 'react-router-dom';
import renoldLogo from '../../Images/logo.png';
import './navBarLight.css';

function NavBarLight() {
  return (
    <div className='navBarBox'>
        <div className="navBarLeft">
          <img src={renoldLogo} className='companyLogo' alt='company logo'/>
          <span className="logo">Renold Engineering</span>
        </div>
        <nav className="navBarRight">
          <ul className="menuItems">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Products'>Products</NavLink></li>
            <li><NavLink to='/OurCustomers'>Our Customers</NavLink></li>
            <li><NavLink to='/ContactUs'>Contact Us</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBarLight