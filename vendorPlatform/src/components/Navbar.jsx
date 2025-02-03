import React from 'react'
import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

export default function 
() {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div>
      <header className='header-container'>
            <h1>Botiga</h1>
            <button className='categoriesButton'>All categories</button>
            <button className='searchButton'>Search Product</button>
            <CgProfile className='profile-icon'onClick={() => navigate("/auth")}/>
        </header>
    <div className='container'>
        <h3 className='heading'>Trending categories</h3>
        <ul className='listing'>
        
        <Link to ='/content'>
        <li>Home</li>
        </Link>
        <Link to='/cards'>
        <li>Shop</li>
        </Link>

        <Link to='/vendor'>
        <li>Vendors</li>
        </Link>
        
        <Link to='blog'>
        <li>Blog</li>
        </Link>
        <Link to='/contact'>
        <li>Contact</li>
        </Link>
        
        </ul>
        <div className='search'>
           <p>800-123-4567</p>
           <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
        </div>
    
    </div>
    </div>
  )
}
