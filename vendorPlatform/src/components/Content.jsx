import React from 'react';
import '../styles/content.css'

//  Import images correctly
import lotion from '../assets/lotion.webp';
import sports from '../assets/sports.webp';
import product3 from '../assets/product-category-3.jpg.webp';
import product8 from '../assets/product-category-8-1.jpg.webp';
import product9 from '../assets/product-category-9.jpg.webp';
import product10 from '../assets/product-category-10.jpg.webp';

//  Use imported images in the array
const categories = [
    { id: 1, name: "Body Lotion", image: lotion },
    { id: 2, name: "Sports", image: sports },
    { id: 3, name: "Computer Gadget", image: product3 },
    { id: 4, name: "Electronics", image: product8 },
    { id: 5, name: "Watch", image: product9 },
    { id: 6, name: "Woman Clothes", image: product10 }
];

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
    </div>
  );
}
