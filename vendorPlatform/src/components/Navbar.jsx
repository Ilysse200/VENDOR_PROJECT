import React from 'react'
import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function 
() {
  return (
    <div>
      <header className='header-container'>
            <h1>Botiga</h1>
            <button className='categoriesButton'>All categories</button>
            <button className='searchButton'>Search Product</button>
        </header>
    <div className='container'>
        <h3 className='heading'>Trending categories</h3>
        <ul className='listing'>
        
        <Link to ='/content'>
        <li>Home</li>
        </Link>
        <li>Shop</li>
        <li>Vendors</li>
        <li>Blog</li>
        <li>Contact</li>
        </ul>
        <div className='search'>
           <p>800-123-4567</p>
           <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
        </div>
    
    </div>
    </div>
  )
}
