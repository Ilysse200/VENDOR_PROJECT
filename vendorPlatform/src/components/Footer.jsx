import React from 'react'
import '../styles/footer.css';
// import {faFacebook} from '@fortawesome/free-solid-svg-icons';
// import {faTwitter} from '@fortawesome/free-solid-svg-icons';
// import {faLinkedin} from '@fortawesome/free-solid-svg-icons';
// import {faInstagram} from '@fortawesome/free-solid-svg-icons';

import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import imagesFooter from '../assets/images.webp';
// const imagesFooter=[
//     {}
// ]

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
            <div className='address-content'>
                <p>Happy to help</p>
                <ul>
                    <li>1279 Thorn Street, NY</li>
                    <li>Phone: 307-549-2480</li>
                    <li>Mail: demo@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <div className='last-content'>
            
            <div className='footer-icons'>
                <div className='socialMedia-icons'>
                    <CiFacebook size='45px'/>
                    <FaXTwitter size='45px'/>
                    <FaInstagram size='45px'/>
                    <CiLinkedin size='45px'/>
                </div>
              <div className='images-content'>
                <p>ACCEPT FOR</p>
                    <img src={imagesFooter} alt='footer-icons' className='footer-images'/>
              </div>

            </div>
        </div>
    </div>
  )
}
