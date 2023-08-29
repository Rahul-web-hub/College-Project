import './index.scss';
import React from 'react';
import logo from "../../assets/images/logo.jpg"


const navbar =() =>(
    <div className='nav-bar'>
        <a href='#'>Home</a>
        <a href="#">Blog</a>
        <a href='#'>Course</a>
         
        
        <span className='nav-right'>
            <a href='#'>Login</a>
            <a href='#'>SignUp</a>
        </span>
        
    </div> 
    
)

export default navbar