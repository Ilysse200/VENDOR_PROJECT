import React from 'react';
import '../styles/content.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

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

//  Use imported images in the array
const categories = [
    { id: 1, name: "Body Lotion", image: lotion },
    { id: 2, name: "Sports", image: sports },
    { id: 3, name: "Computer Gadget", image: product3 },
    { id: 4, name: "Electronics", image: product8 },
    { id: 5, name: "Watch", image: product9 },
    { id: 6, name: "Woman Clothes", image: product10 }
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
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='grey'/>,, <FaStar color='grey'/>
    ]

    }, 
    {
        id:2,
        name: "Windows Alexa",
        picture:image2,
        price:"$49.00 – $69.00",
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, , <FaStar color='orange'/>,, <FaStar color='orange'/>
    ]

    },
    {
        id:3,
        name: "HeadPhones",
        picture:image3,
        price:"$22.00 - $55.00",
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, , <FaStar color='orange'/>, <FaStar color='grey'/>
    ]

    }
]

export default function Content() {
    const navigation = useNavigate();
    const handleNavigate = (id) => {
        navigation(`/productsDetails/${id}`)
    }

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
            <button type='button' className='categories-button'>shop now</button>
            </div> 
        </div>
        <h1 className='categories-heading'>Popular Categories</h1>
        
        <div className="gallery-container">
            {categories.map((item) => (
                <div key={item.id} className="gallery-item">
                    <img src={item.image} alt={item.name} className="gallery-image" />
                    <p>{item.name}</p>
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
        <button className='shop-Button'>SHOP NOW</button>
        <h1 className='vendor-heading'>Our Vendor List</h1>
        <div className='vendor-content'>
            {vendorInfo.map((seller) => (
                <div key={seller.id} className='seller-info'>
                    <div className='vendorPic'> <img src={seller.image}/></div>
                    <div className='vender-information'>
                        <p>{seller.name}</p>
                        <p>{seller.address}</p>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  );
}
