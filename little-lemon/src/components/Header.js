import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

export default function Header() {
  return (
    <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Bangalore</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.</p>
              
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                     
            </div>
            {/* Banner Image */}
            <div className='banner-img'>
              <img src={bannerImg} alt='banner' />
            </div>
        </section>
    </header>
  )
}
