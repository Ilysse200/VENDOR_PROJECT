import React, {useState} from 'react'
import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import UsestateHook from './Usestatehook';

export default function 
() {
  const[modal, setModal] = useState(false);
    const handleLoginForm = () => {
        setModal(!modal);
    }

  return (
    <div>
      <header className='header-container'>
            <h1>Botiga</h1>
            <button className='categoriesButton'>All categories</button>
            <button className='searchButton'>Search Product</button>
            <div className='profile-container'>
              <CgProfile className='profile-icon'onClick={handleLoginForm}/>
            {modal && <UsestateHook handleLoginForm={handleLoginForm}/>
              }
              </div>
            
            
        </header>
    <div className='container'>
        <h3 className='heading'>Trending categories</h3>
        <ul className='listing'>
        
        <Link to ='/content' className='contentLink'>
        <li>Home</li>
        </Link>
        <Link to='/cards' className='contentLink'>
        <li>Shop</li>
        </Link>

        <Link to='/vendor' className='contentLink'>
        <li>Vendors</li>
        </Link>
        
        <Link to='blog' className='contentLink'>
        <li>Blog</li>
        </Link>
        <Link to='/contact' className='contentLink'>
        <li>Contact</li>
        </Link>

        <Link to='/view' className='contentLink'>
        <li>view</li></Link>
        
        
        </ul>
        <div className='search'>
           <p>800-123-4567</p>
           <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
        </div>
    
    </div>
    </div>
  )
}
