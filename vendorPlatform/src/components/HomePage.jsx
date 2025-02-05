import React from 'react';
import '../styles/cards.css';
import pods from '../assets/product-category-8-1.jpg.webp'
import blackMouse from '../assets/blackMouse.webp';
import { useNavigate } from 'react-router-dom';

export const productList = [
    {
        id:1,
        image:pods,
        cardTitle: 'bottle'
    },
    {
        id:2,
        image:blackMouse,
        cardTitle: 'shoes'
    }
]
function HomePage(){
    const  navigation = useNavigate();
    const handleNavigate = (id)  => {
        navigation(`/singlecard/${id}`)
    }
    return(
        <div className='container-home'>
            {productList.map((item)=>(
                <div className='arrayCards' key={item.id}>
                    <div className='image-container'><img src={item.image}/></div>
                    <div> {item.cardTitle}</div>
                    <button type='button' className='view-button' onClick={()=>handleNavigate(item.id)}>view</button>
                </div>
            ))}
            
        </div>
    )
}
export default HomePage