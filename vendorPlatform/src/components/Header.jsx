import React from 'react'
import '../styles/header.css'

export default function Header() {
  return (
    <div>
        
        <div className='container'>
                <h3 className='heading'>Trending categories</h3>
                <ul className='listing'>
                <li>Home</li>
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
