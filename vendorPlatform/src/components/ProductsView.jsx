import React from 'react'
import { products } from './Content';
import { useParams } from 'react-router-dom';

function ProductsView() {
  const {id} = useParams();
  const product = products.find((product) => product.id ==id);
  return (
    <div>
        <div> <img src={product.picture}/></div>
        <div> {product.name}</div>
        <div> {product.price}</div>
    </div>
  )
}

export default ProductsView;