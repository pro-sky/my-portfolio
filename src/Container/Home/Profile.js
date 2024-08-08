import React from 'react'
import "./Profile.css"
import {NavLink} from 'react-router-dom';
// import About from './Container/AboutMe/About';
// import Resume from './Container/Resume/Resume';
// import Contact from './Container/ContactMe/Contact';

export default function Profile() {
  return (
    <>
    <div className='profile-container'>
        <div className='profile-parent'>
              <div className='profile-details'>
                   <div className='colz'>
                     <div className='colz-icon'>

                      <a href='https://instagram.com/sujeetydv.00?igshid=YmMyMTA2M2Y='>
                        <i className='fa fa-instagram'> </i>
                      </a>
                      <a href='https://twitter.com/SujeetYadav1999?t=rk1LGMjWyPRz3ZXBFbLppQ&s=09'>
                        <i className='fa fa-twitter'> </i>
                      </a>
                      
                      <a href='https://www.linkedin.com/in/sujeetyadav1'>
                        <i className='fa fa-linkedin'> </i>
                      </a>
                     </div>
                   </div>
                   <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Sujeet</span>
                    </span>
                   </div>
                   <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                      <h1>
                          <span>Enthusiastic Coder 🖥️</span>
                          <span>Web Developer 💻</span>
                      </h1>
                        <span className='profile-role-tagline'>
                            Knack of building application with front and back end operation
                        </span>
                    </span>
                   </div>
                   <div className='profile-optins'>
                    <button className='btn primary-btn'>
                        {" "}
                        <NavLink to="/contact" exact className='item'>Hire Me</NavLink>{" "}
                    </button>
                    <a href='daffodilscv.pdf' download='Sujeet daffodilscv.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                   </div>
              </div>
              <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
              </div>
        </div>
    </div>
    {/* <About />
      <Resume />
      <Contact /> */}
    </>
  )
}
