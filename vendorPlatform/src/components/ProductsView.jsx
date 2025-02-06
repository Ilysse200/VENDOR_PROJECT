import React from 'react'
import { products } from './Content';
import { useParams } from 'react-router-dom';
import '../styles/viewProducts.css';

function ProductsView() {
  const {id} = useParams();
  const product = products.find((product) => product.id ==id);
  return (
    <div className='container-product'>
        <div className='product-image'><img src={product.picture} className='product-pic'/></div>
        <div className='product-info'>
          <div className='poduct-name'> {product.name}</div>
          <div className='product-price'> {product.price}</div>
          <div className='customer-review'> {product.rating} <p className='review-star'>(customer review)</p></div>
          <div className='product-details'> {product.details}</div>
        </div>
    </div>
  )
}

export default ProductsView;