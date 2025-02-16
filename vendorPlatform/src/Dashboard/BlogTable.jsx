import React from 'react'
import {blogPosts} from '../components/Blog'
import '../Dashboard/dashboard_styles/productTable.css'
function BlogTable() {
  return (
    <div className='table-container'>
         <h1 className='product-title'>Blogs</h1>
        <table className='product-Table'>
            <thead>
                <tr className='table-row'>
                    <th className='product-headers'>Image</th>
                    <th className='product-headers'>Date</th>
                    <th className='product-headers'>Title</th>
                    <th className='product-headers'>Description</th>
                    <th className='product-headers'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {blogPosts.map((blog)=>(
                <tr>
                    <td className='product-value'><img src={blog.image} className='product-pic'/></td>
                    <td className='product-values'>{blog.date}</td>
                    <td className='contact-styles'>{blog.title}</td>
                    <td className='contact-styles'>{blog.description}</td>
                    <td className='contact-styles'>{blog.action_icon}</td>

                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default BlogTable