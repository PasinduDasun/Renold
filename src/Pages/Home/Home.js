import React from "react";
import NavBar from "../../Components/Navigation/NavBar";
import myImage from '../../Images/Harry-Potter-Logo-2001.jpeg';
import './home.css';

export default function Home(){
    return(
        <React.Fragment>
            <NavBar/>
            <h1>pasindu</h1>
            <h1>Dasun</h1>
            <div><img src={myImage} className='reynold-logo' alt='logo'/></div>
        </React.Fragment>
    );
}
