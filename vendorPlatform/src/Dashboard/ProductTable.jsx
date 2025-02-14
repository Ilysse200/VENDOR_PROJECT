import React from 'react'
import {products} from '../components/Content'
import '../Dashboard/dashboard_styles/productTable.css'
// import { useParams } from 'react-router-dom';
function ProductTable() {

  return (
    <div className='table-container'>
      <h1>Product List</h1>
        <table className='product-Table' table border={1}>
          <thead>
            <tr className='table-row'>
              <th className='product-headers'>ID</th>
              <th className='product-headers'>Name</th>
              <th className='product-headers'>Picture</th>
              <th className='product-headers'>Price</th>
            </tr>
          </thead>
          <tbody className='table-values'>
            {products.map((product)=>(
            <tr>
              <td className='product-values'>{product.id}</td>
              <td className='product-values'>{product.name}</td>
              <td className='product-value'><img src={product.picture} className='product-pic'/></td>
              <td className='product-values'>{product.price}</td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default ProductTable