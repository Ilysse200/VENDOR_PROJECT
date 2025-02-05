import React from 'react';
import {useParams} from 'react-router-dom';
import { productList } from './HomePage';
function SinglePage() {
  const {id} = useParams();

  // check the ids that are inside the array 
  console.log("productList", id);
  //declare a variable that will help us view particular products 
  const card = productList.find((card)=>card.id==id);
  return (
    <div>
      <div><img src={card.image}/></div>
      <div>{card.cardTitle}</div>
    </div>
  )
}

export default SinglePage