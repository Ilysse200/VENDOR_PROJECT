import React from 'react'
import { stores } from '../components/Vendor'
import '../Dashboard/dashboard_styles/productTable.css'
function Vendor_Table() {
  return (
    <div className='table-container'>
         <h1 className='product-title'>Blogs</h1>
        <table className='product-Table'>
            <thead>
                
                <tr className='table-row'>
                    <th className='product-headers'>Vendor Name</th>
                    <th className='product-headers'>Vendor Profile</th>
                    <th className='product-headers'>Vendor Location</th>
                    <th className='product-headers'>Vendor Rating</th>
                    <th className='product-headers'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Vendor Data */}
                {stores.map((vendor) =>(
                <tr>
                    <td className='product-values'>{vendor.name}</td>
                    <td className='product-values'><img src={vendor.profilePic} alt="vendor Profile Pic" className='product-pic' /></td>
                    <td className='product-values'>{vendor.location}</td>
                    <td className='product-values'>{vendor.rating}</td>
                    <td className='product-values'>{vendor.action_icon}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Vendor_Table