import React from 'react';
import lotion from '../assets/lotion.webp'
import '../styles/cards.css'
import mouse from '../assets/product-category-3.jpg.webp'
import { CiStar } from "react-icons/ci";
import pods from '../assets/product-category-8-1.jpg.webp'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Cards=()=>{
    const cards=[
        {
            image:lotion,
            cardTitle:'Bottle of lotion',
            cardContent:'This is a bottle of',
            price: "$22.00 – $55.00",
            rating: [<FaStar color="orange" />, <FaStar color="orange" />, <FaStarHalfAlt color="orange" />, <FaRegStar color="gray" />, <FaRegStar color="gray" />], // 3.5-star rating
            // colors: ["#C2B9A3", "#8B6C50", "#EAEAEA", "#FFFFFF"] // Colors as HEX
        },
        {
            image:pods,
            cardTitle:'AirPods',
            cardContent:'This our new bluetooth listener',
            price: "$22.00 – $55.00",
            rating: [<FaStar color="orange" />, <FaStar color="orange" />, <FaStarHalfAlt color="orange" />, <FaRegStar color="gray" />, <FaRegStar color="gray" />], // 3.5-star rating
            // colors: ["#C2B9A3", "#8B6C50", "#EAEAEA", "#FFFFFF"] // Colors as HEX
        },
        {
            image:mouse,
            cardTitle:'late version Cambot',
            cardContent:'This our new tech equipment',
            price: "$22.00 – $55.00",
            rating: [<FaStar color="orange" />, <FaStar color="orange" />, <FaStarHalfAlt color="orange" />, <FaRegStar color="gray" />, <FaRegStar color="gray" />], // 3.5-star rating
            // colors: ["#C2B9A3", "#8B6C50", "#EAEAEA", "#FFFFFF"] // Colors as HEX
        }
    ]
    return (

            
            <div className='holder2'>
            {
                
                cards.map((cards)=>(//index is automatically provided
                    <div className='card-holder'>
                        <img src={cards.image} alt='the image of the card' className='image-viewer'/>
                        <p>{cards.cardTitle}</p>
                        <p>{cards.cardContent}</p>
                        <p>{cards.price}</p>
                        <p>{cards.rating}</p>
                        {/* <p>{cards.colors}</p> */}
                        {/* <div className='content-card'>{cards.cardContent}</div> */}
                    </div>
                    )
                )
            }
            </div>
       
    
    
)

}
export default Cards