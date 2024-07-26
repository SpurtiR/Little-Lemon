import React, { useState } from 'react'
import logo from '../images/Logo .svg'


export default function Nav() {

  const [menu, SetMenu] = useState(false);

  const toggleMenu = () =>{
    SetMenu(!menu);
  }

  return (
    <nav className={`navbar ${menu ? "Open" : ""}`}>
        <a href='/' className='logo'>
            <img src={logo} alt='Little Lemon Logo' />
        </a>

            {/*Mobile Navbar*/}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/* nav items */}
            <ul className={`nav-links  ${menu ? "visible" : ""}`}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Services</a>
              </li>
              <li>
                <a href='/'>Menu</a>
              </li>
              <li>
                <a href='/'>Reservations</a>
              </li>
              <li>
                <a href='/'>Order Online</a>
              </li>
              <li>
                <a href='/'>Login</a>
              </li>
            </ul>
        
    </nav>
  )
}
