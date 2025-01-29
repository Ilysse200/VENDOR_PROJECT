import React from 'react';
import lotion from '../assets/lotion.webp'
import '../styles/cards.css'
import mouse from '../assets/product-category-3.jpg.webp'
const Cards=()=>{
    const cards=[
        {
            image:lotion,
            cardTitle:'Bottle of lotion',
            cardContent:'This is a bottle of'
        },
        {
            image:mouse,
            cardTitle:'late version Cambot',
            cardContent:'This our new tech equipment'
        }
    ]
    return (

            <div className='holder2'>
            {
                cards.map((cards)=>(//index is automatically provided
                    <div className='card-holder'>
                        <img src={cards.image} alt='the image of the card' className='image-viewer'/>
                        <p>{cards.cardTitle}</p>
                        <div className='content-card'>{cards.cardContent}</div>
                    </div>
                    )
                )
            }
            </div>
       
    
    
)

}
export default Cards