import React from 'react';
import lotion from '../assets/lotion.webp'
import '../styles/cards.css'
import mouse from '../assets/product-category-3.jpg.webp'
import { CiStar } from "react-icons/ci";
import pods from '../assets/product-category-8-1.jpg.webp'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import mainImage from '../assets/ShopPicture.webp';
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
    const starArray=[
        {
            name:'icon1',
            colors:[<FaStar color='orange'/>,<FaStar color='orange'/>,<FaStar color='orange'/>,<FaStar color='orange'/>,<FaStar color='orange'/>]
        },
        {
            name:'icon2', color:<FaStar color='orange'/>,
            colors:[<FaStar color='orange'/>,<FaStar color='orange'/>,<FaStar color='orange'/>,<FaStar color='orange'/>,<FaStar color='grey'/>]
        },
        {
            name:'icon1', color:<FaStar color='orange'/>,
            colors:[<FaStar color='orange'/>,<FaStar color='orange'/>,<FaStar color='orange'/>,<FaStar color='grey'/>,<FaStar color='grey'/>]
        }
    ]
    return (

            
            <div >
                <div className='positioningImage'>
                <img src={mainImage} alt='Shop Image' className='shop-image'/>
                <p>Shop</p>
                </div>
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
            <div className='side-content'>
                <p>Categories</p>
                <ul>
                    <li>Body Lotion(1)</li>
                    <li>Computer Gadget(3)</li>
                    <li>Electronics(5)</li>
                    <li>Fashion(3)</li>
                    <li>General(1)</li>
                    <li>Shoes(2)</li>
                    <li>Sports(3)</li>
                    <li>Watch(1)</li>
                    <li>Woman Clothes(3)</li>
                </ul>
                <p>Color</p>
                <div class="color-options">
                    <div class="color-circle">
                        <div class="color-inner color1">
                        </div>
                    </div>
                    <div class="color-circle selected">
                        <div class="color-inner color2"></div>
                    </div>
                    <div class="color-circle">
                        <div class="color-inner color3"></div>
                    </div>
                    <div class="color-circle">
                        <div class="color-inner color4"></div>
                    </div>
                </div>
                <p>Ratings</p>
                <div className='star-propery'>
                    {
                        starArray.map((star1) =>(
                            <div key={star1.name} className='star-styling'>
                                <div>{star1.colors}</div>

                            </div>

                        ))
                    }
                </div>

            </div>
            </div>
       
    
    
)

}
export default Cards