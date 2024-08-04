import './Navbar.css'
import React from 'react'
import {NavLink} from 'react-router-dom';
// import { FaBars,FaTimes } from 'react-icons/fa'


const Navbar = () => {
  // const [click,setClick]= useState(false);
  // const handleClick = ()=> setClick(!click);
  return (
    <div className='hero'>
      <nav>
        <h2 className='logo'>Portfo<span>lio</span></h2>
        <ul className='nav-menu'>
          {/* <li><a href=''>Home</a></li>
          <li><a  href=''>About</a></li>
          <li><a  href=''>Resume</a></li>
          <li><a  href=''>ContactMe</a></li> */}
          <li>
          <NavLink to="/" exact className='item'>Home</NavLink>
            </li>
            <li>
          <NavLink to="/about" exact className='item'>About</NavLink>
            </li>
            <li>
          <NavLink to="/resume" exact className='item'>Resume</NavLink>
            </li>
            <li>
          <NavLink to="/contact" exact className='item'>ContactMe</NavLink>
            </li>


        </ul>
        {/* <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes  size={20} style={{color:"#fff"}}/>) : (<FaBars  size={20} style={{color:"#fff"}}/>)}

        </div> */}
      </nav>
      
    </div>
  )
}

export default Navbar
