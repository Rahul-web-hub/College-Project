import React from 'react';
import './index.scss';
import Navbar from "../navbar";
import Loader from "react-loaders";
import backg from "../../assets/images/backg.png";
import back02 from "../../assets/images/back02.png";
import back3 from "../../assets/images/back3.png";
import CheckIcon from '@mui/icons-material/Check';
import logo from "../../assets/images/logo.jpg";
import { useState,useEffect } from 'react';
import { FaCertificate } from 'react-icons/fa';
import logo2 from "../../assets/images/c++.png";
import web from "../../assets/images/web.png";
import dsa from "../../assets/images/dsa.png";

const Home = () =>{

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulated delay of 2 seconds
  }, []);

  return (
    <div className="app-container">
      {isLoading ? <Loader type="pacman"/> : <MainContent />}
    </div>
  );
}

   const MainContent =() =>{
    
    return (
        <>   
            <Navbar/>
            <div className='logo-top'>
            <img className="logo" src={logo} alt="loading"></img>
            <h1>CODÂME</h1>
            </div>
            <div className='container-1'>
            <img className='image' src={backg} alt="loading"></img>
            <div>
            <p>Learn to<br></br><span className='skills'>Code</span> Faster</p>
            </div>
            <div className='text-2'>
            Unleash your potential at Codame, where the fusion of creativity and code opens doors to limitless innovation
            <button>Enroll Now</button>
            </div>
            </div>
            <div className='container-fluid'>
             <div className='text-3'>
                <h1>4.5</h1>
                <h2>80 k reviews</h2>
             </div>
             <div className='text-3'>
                <h1>20M</h1>
                <h2>downloads</h2>
             </div>
             <div className='text-3'>
                <h1>20k+</h1>
                <h2>learners</h2>
             </div>
             <div className='text-3'>
                <h1>1k+</h1>
                <h2>viewers</h2>
             </div>
            </div>
            <div className='container-2'>
                <img className='img-2' src={back02}alt='loading'></img>
                <div className='text-3'>
                <h1><span className='head'>We provide </span><br/><span className='smart'>smart</span> online coding lectures</h1>
                </div>
            </div>
            <div className='container-3'>
                <div className='card card-1'>
                   <h1> Our <span className='Features'>Features</span><br/> Special For You</h1>
                </div>
                <div className='card card-2'>
                    <h1> Get Certificate</h1>
                    <p>Add Value to your certificate and increase your chances of getting hired</p>
                </div>
                <div className='Card-3'>
                <div className='card-3'>
                    <h1>Amazing Instructor</h1>
                    <p>Our Amazing Instructor brings experience knowledge and fun on the Table</p>
                </div>
                <div className='card-3'>
                    <h1>Life Time Support</h1>
                    <p>You will have all time access to our resources and also you can contact our mentors</p>
                </div>
                <div className='card-3'>
                    <h1>Video Lectures</h1>
                    <p> Recorded Video lectures from proffessional Instructor to boost your growth</p>
                </div>
                </div>

            </div>
            <div className='container-fluid container-4'>
                <h1>Popular  <span className='course'>Courses</span></h1>
                <div className='cards'>
                    <div className='card-1'>
                         <img src={logo2} alt='loading'></img>
                         <p><span className='heading'>Learn C++ :</span>from scratch to advanced</p>
                    </div>
                    <div className='card-1'>
                    <img src={web} alt="loading"/>
                       <p><span className='heading'>Web development</span> : FRONTEND AND BACKEND</p>
                    </div>
                    <div className='card-1'>
                         <img src={dsa} alt="loading"/>
                        <p><span className='heading'>DSA</span> : Full placement preparation</p>
                    </div>
                    
                </div>
            </div>
            <div className='container-fluid container-5'>
              <div className='text'>
              <img src={back3} alt="loading"></img>
                <h1>Embrace learning as <br></br>your lifelong   <span className='Learning'> journey</span></h1>
                <div>
                <p>Our sign in process lets you start your learning process without much hassle .<br/>Our aim is to create great learning experience for you </p>
                
        <div className='checkContainer'>
        <div className='checkItem'>
          <CheckIcon className='checkSign' fontSize='large' />
          <p>Create Account</p>
        </div>
        <div className='checkItem'>
          <CheckIcon className='checkSign' fontSize='large' />
          <p>Purchase Courses</p>
        </div>
        <div className='checkItem'>
          <CheckIcon className='checkSign' fontSize='large' />
          <p>Start Learning</p>
        </div>
                </div>
              </div>
            </div>
    </div>
   <div className='container-6'>
   j
   <div className='container-7'>
   <h1>CODÂME</h1>
   <p>Speed up your skill acquisition process<br/> by finding unlimited courses on our website
   </p>
    <ul>
        <li>Company
            <li>
             About Us
            </li>
            <li>
                Career
            </li>
            <li>
                Presskit
            </li>
        </li>
        <li>Resources
        <li>x</li>
        <li>y</li>
        <li>z</li></li>
        <li>Product
        <li>m</li>
        <li>n</li>
        <li>o</li>
        </li>
    </ul>
    </div>
   </div>
    
            
        </>
    
    )
    }

    export default Home;