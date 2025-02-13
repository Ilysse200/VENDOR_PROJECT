import React from 'react'
import {blogPosts} from '../components/Blog'
import '../Dashboard/dashboard_styles/productTable.css'
function BlogTable() {
  return (
    <div>
        <table className='product-Table' border={1}>
            <thead>
                <tr>
                    <th className='product-headers'>Image</th>
                    <th className='product-headers'>Date</th>
                    <th className='product-headers'>Title</th>
                    <th className='product-headers'>Description</th>
                </tr>
            </thead>
            <tbody>
                {blogPosts.map((blog)=>(
                <tr>
                    <td className='product-value'><img src={blog.image} className='product-pic'/></td>
                    <td className='product-values'>{blog.date}</td>
                    <td className='product-values'>{blog.title}</td>
                    <td className='product-values'>{blog.description}</td>

                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default BlogTable