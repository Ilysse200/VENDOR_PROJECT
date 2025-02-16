import React from 'react'
import {products} from '../components/Content'
import '../Dashboard/dashboard_styles/productTable.css'
// import { useParams } from 'react-router-dom';
function ProductTable() {

  return (
    <div className='table-container'>
      <button type='button' className='product-button'>Add product</button>
      <h1 className='product-title'>Product List</h1>
        <table className='product-Table' >
          <thead>
            <tr className='table-row'>
              <th className='product-headers'>ID</th>
              <th className='product-headers'>Name</th>
              <th className='product-headers'>Picture</th>
              <th className='product-headers'>Price</th>
              <th className='product-headers'>Actions</th>
            </tr>
          </thead>
          <tbody className='table-values'>
            {products.map((product)=>(
            <tr className=''>
              <td className='product-values'>{product.id}</td>
              <td className='product-values'>{product.name}</td>
              <td className='product-value'><img src={product.picture} className='product-pic'/></td>
              <td className='product-values'>{product.price}</td>
              <td className='action-icons'>{product.action_icon}</td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default ProductTable