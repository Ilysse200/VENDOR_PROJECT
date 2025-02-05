import React from 'react';
import '../styles/content.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


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

//  Use imported images in the array
const categories = [
    { id: 1, name: "Body Lotion", image: lotion },
    { id: 2, name: "Sports", image: sports },
    { id: 3, name: "Computer Gadget", image: product3 },
    { id: 4, name: "Electronics", image: product8 },
    { id: 5, name: "Watch", image: product9 },
    { id: 6, name: "Woman Clothes", image: product10 }
];
export const products =[
    {
        name: "bottle",
        picture:image1,
        price:"$22.00 - $55.00",
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='grey'/>,, <FaStar color='grey'/>
    ]

    }, 
    {
        name: "Windows Alexa",
        picture:image2,
        price:"$49.00 – $69.00",
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, , <FaStar color='orange'/>,, <FaStar color='orange'/>
    ]

    },
    {
        name: "HeadPhones",
        picture:image3,
        price:"$22.00 - $55.00",
        rating: [<FaStar color='orange'/>, <FaStar color='orange'/>, <FaStar color='orange'/>, , <FaStar color='orange'/>, <FaStar color='grey'/>
    ]

    }
]

export default function Content() {
  return (
    <div>
        <h1>Popular Categories</h1>
        
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
                    <div key={product.name} className='product'>
                        <img src={product.picture} alt={product.name} className='productImage'/>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <div className='rating'>
                            {product.rating.map((star) => (star))}
                        </div>
                    </div>
                ))
            }
        </div>
        <button className='shop-Button'>SHOP NOW</button>
        
    </div>
  );
}
