import React from 'react';
import '../styles/content.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

//import action icons for edit and delete used in tables
import { CiEdit } from "react-icons/ci"; //edit table icon

import { LuDelete } from "react-icons/lu"; //delete table icon

// import arrow icon
import { IoIosArrowDroprightCircle } from "react-icons/io";

//  Import images correctly
import lotion from '../assets/lotion.webp';
import sports from '../assets/sports.webp';
import product3 from '../assets/product-category-3.jpg.webp';
import product8 from '../assets/product-category-8-1.jpg.webp';
import product9 from '../assets/product-category-9.jpg.webp';
import product10 from '../assets/product-category-10.jpg.webp';

import image3 from '../assets/product-wireless-headset-420x420.jpg (1).webp';
import image1 from '../assets/product-water-bottle-420x420.jpg.webp';

import image2 from '../assets/alexa.webp'

//Import vendor images
import vendorA from '../assets/vendorA.webp'
import vendorB from '../assets/vendorB.webp'
import vendorC from '../assets/vendorC.webp'
import vendorD from '../assets/vendorD.webp'
import vendorE from '../assets/vendorE.webp'
import vendorF from '../assets/vendorF.webp'

//import icons images
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'

//  Use imported images in the array
export const categories = [
    { id: 1, name: "Body Lotion", image: lotion, details: "cosmetics", price: "40$-50$" },
    { id: 2, name: "Sports", image: sports,details: "cosmetics", price: "40$-50$" },
    { id: 3, name: "Computer Gadget", image: product3, details: "electronics", price: "40$-50$" },
    { id: 4, name: "Electronics", image: product8,details: "cosmetics", price: "40$-50$" },
    { id: 5, name: "Watch", image: product9, details: "cosmetics", price: "40$-50$" },
    { id: 6, name: "Woman Clothes", image: product10, details: "cosmetics", price: "40$-50$" }
];
const vendorInfo = [
    {
        id:1,
        name: "Santa Monica's Store",
        image:vendorA,
        address: 'New York, NY'
    },
    {
        id:2,
        image:vendorB,
        name:"Josh Doe's Store",
        address: 'New York, NY'
    },
    {
        id:3,
        image:vendorC,
        name: "Digital Good's Store",
        address: 'New York, NY'
    },
    {
        id:4,
        image:vendorD,
        name: "Jessica's Store",
        address: 'New York, NY'
    },
    {
        id:5,
        image:vendorE,
        name:"The Glass Store",
        address: 'New York, NY'
    },
    {
        id:6,
        image:vendorF,
        name: "John Doe's Store",
        address: 'New York, NY'
    },
    

];
export const products =[
    {
        id:1,
        name: "bottle",
        picture:image1,
        price:"$22.00 - $55.00",
        details:"Stay hydrated in style with our sleek, spill-proof bottle! Designed for durability and freshness, it keeps your drinks hot or cold for hours. Perfect for travel, work, or the gym!",
        action_icon: [<CiEdit color='#007AFF'/>, <LuDelete color='red'/>],
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='grey'/>,, <FaStar color='grey'/>
    ]

    }, 
    {
        id:2,
        name: "Windows Alexa",
        picture:image2,
        price:"$49.00 – $69.00",
        details:"Control your home, play music, get weather updates, and much more – all hands-free! Just say “Alexa”, and let the magic happen! ",
        action_icon: [<CiEdit color='#007AFF'/>, <LuDelete color='red'/>],
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, , <FaStar color='orange'/>,, <FaStar color='orange'/>
    ]

    },
    {
        id:3,
        name: "HeadPhones",
        picture:image3,
        price:"$22.00 - $55.00",
        details:"Experience premium sound with our high-fidelity headphones! Crystal-clear audio, deep bass, and all-day comfort—perfect for music, gaming, and calls.",
        action_icon: [<CiEdit color='#007AFF'/>, <LuDelete color='red'/>],
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, , <FaStar color='orange'/>, <FaStar color='grey'/>
    ]

    }
]

//create the array of icons
 const iconsArray =[
    {
        id:1,
        name: "Easy Returns",
        icons:icon1,
        description:"Our return policy is simple and that is why customers love our shop."

    }, 
    {
        id:2,
        name: "Customer Service",
        icons:icon2,
        description:"Our return policy is simple and that is why customers love our shop"

    },
    {
        id:3,
        name: "High Quality",
        icons:icon3,
        description:"Our return policy is simple and that is why customers love our shop."

    },
    
]

export default function Content() {
    const navigation = useNavigate();
    const navigate = useNavigate(); // Use one instance

const handleNavigate = (id) => {
    navigate(`/productsDetails/${id}`);
};

const handleNavigation = (id) => {
    navigate(`/category/${id}`);
};

  return (
    <div>
        <div className='choose-categories'>
            <ul>
                <li>Electronics</li>
                <li>Computer Gadget</li>
                <li>Fashion</li>
                <li>Body Lotion</li>
                <li>Sports</li>
                <li>Woman Clothes</li>
                <li>Shoes</li>
                <li>Watches</li>
            </ul>
            <div className='categories-content'>
            <h2>Explore our latest and <br/>greatest electronics</h2>
            <Link to='/cards' className='link-type'>
            <button type='button' className='categories-button'>shop now</button>
            </Link>
            
            </div> 
        </div>
        <h1 className='categories-heading'>Popular Categories</h1>
        
        <div className="gallery-container">
            {categories.map((item) => (
                <div key={item.id} className="gallery-item">
                    <img src={item.image} alt={item.name} className="gallery-image" onClick={()=>handleNavigation(item.id)}/>
                    <p>{item.name}</p>
                    {/* <div className='view-buttons'>
                    <button type='button'  o>view</button></div> */}
                </div>
            ))}
        </div>
        <h1 className='productTitle'>New Arrival Products</h1>
        <div className='productsClass'>
            {
                products.map((product) => (
                    <div key={product.id} className='product'>
                        <img src={product.picture} alt={product.name} className='productImage'/>
                        {/* <button type='button' className='click-button'>Quick view</button> */}
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <div className='rating'>
                            {product.rating.map((star) => (star))}
                        </div>
                        <button type='button' className='click-button' onClick={()=>handleNavigate(product.id)}>quick view</button>
                    </div>
                ))
            }
        </div>
        <Link to='/cards' className='link-type'>
        <button className='shop-Button'>SHOP NOW</button>
        </Link>
        <h1 className='vendor-heading'>Our Vendor List</h1>
        <div className='vendor-content'>
            {vendorInfo.map((seller) => (
                <div key={seller.id} className='seller-info'>
                    <div className='vendorPic'> <img src={seller.image} className='seller-image'/></div>
                    <div className='vender-information'>
                        <div className='icon-seller'>
                        <p className='seller-name'>{seller.name}</p>
                        <IoIosArrowDroprightCircle className='arrow-icon'/>
                        </div>
                        <p className='adress-component'>{seller.address}</p>
                    </div>
                </div>
            ))}
            <Link to='/vendor' className='link-type'>
            <button type='button' className='vendors-button'>see all vendors</button>
            </Link>
            
        </div>
        <h1 className='marketing-title'>Why people choose us</h1>
        <div className='marketing-reasons'>
            {iconsArray.map((icon)=>(
                <div className='icon-section'>
                    <div><img src={icon.icons} className='icon-modify'/></div>
                    <div className='icon-name'>{icon.name}</div>
                    <div className='icons-details'>{icon.description}</div>
                </div>
            ))}

        </div>
        
    </div>
  );
}
