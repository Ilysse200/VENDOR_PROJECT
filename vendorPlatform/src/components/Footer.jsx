import React from 'react'
import '../styles/footer.css';

export default function 
() {
  return (
    <div className='footer-align'>
        <div className='words-content'>
            <h3>Stay up to date</h3>
            <p>Subscribe to our newsletter and get 20% discount offer in<br/> your first order.</p>
            <div className='input-element'>
            <p className='left-content'>Enter your mail</p>
            <p className='right-content'>SUBMIT</p>
            </div>
        </div>
        <div className='footer-header-list'>
            <div className='item-styling'>
            <h4>SHOP</h4>
            <ul>
                <li>Body Lotion</li>
                <li>Computer Gadget</li>
                <li>Electronics</li>
                <li>Fashion</li>
                <li>General</li>
                <li>Shoes</li>
                <li>Sports</li>
                <li>Watch</li>
                <li>Woman Clothes</li>
            </ul>
            </div>
            <div className='footer-secondList'>
                <h4>COMPANY</h4>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Help</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='footer-thirdList'>
                <h4>ABOUT</h4>
                <ul>
                    <li>Who We Are</li>
                    <li>Reviews</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </div>
        <div className='last-content'>
            <div className='address-content'>
                <ul>
                    <li>1279 Thorn Street, NY</li>
                    <li>Phone: 307-549-2480</li>
                    <li>Mail: demo@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
