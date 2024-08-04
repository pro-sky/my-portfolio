import React from 'react'
import Profile from './Container/Home/Profile';
import About from './Container/AboutMe/About';
import Resume from './Container/Resume/Resume';
import Contact from './Container/ContactMe/Contact';

const Main = () => {
  return (
    <div>
      <Profile/>
      <About />
      <Resume/>
      <Contact/>
    </div>
  )
}

export default Main
