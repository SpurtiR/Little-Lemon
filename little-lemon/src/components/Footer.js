import React from 'react'
import smallLogo from '../images/Logo .svg'

export default function Footer() {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={smallLogo} alt='logosmall'  />
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.</p>
              
            </div>

            <div>
                <h3>Important Links</h3>
                <ul>
                    <li href='/'>Home</li>
                    <li href='/'>About</li>
                    <li href='/'>Menu</li>
                    <li href='/'>Reservations</li>
                    <li href='/'>Order Online</li>
                    <li href='/'>Login</li>
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address <br/>Military town, Yelhanka</li>
                    <li>Phone <br/>(+91) 6346234</li>
                    <li>Email <br/>appetite@littlelemon.com</li>
                </ul>
            </div>

            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li href='/'>Facebook</li>
                    <li href='/'>Instagram</li>
                    <li href='/'>Twitter</li>
                    <li href='/'>Tiktok</li>
                </ul>
            </div>
        </section>
    </footer>
  )
}
