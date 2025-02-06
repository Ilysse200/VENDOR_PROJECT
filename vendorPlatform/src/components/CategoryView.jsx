import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from './Content';
import '../styles/viewCategory.css';

function CategoryView() {
    const {id} = useParams();
    const product = categories.find((item) => item.id ===Number(id));
  return (
    <div>
        <div className='container-product'>
        <div className='product-image'><img src={product.image} className='product-pic'/></div>
    <div className='product-info'>
      <div className='poduct-name'> {product.name}</div>
      <div className='product-price'> {product.price}</div>
      {/* <div className='customer-review'> {product.rating} <p className='review-star'>(customer review)</p></div> */}
      <div className='product-details'> {product.details}</div>
    </div>
</div></div>
  )
}

export default CategoryView