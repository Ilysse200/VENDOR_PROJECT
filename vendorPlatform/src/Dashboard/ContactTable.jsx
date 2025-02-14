import React from 'react'
// import {ContactUs} from '../components/Contact'
import '../Dashboard/dashboard_styles/productTable.css'
const Contact = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
    },

]
function ContactTable() {
  return (
    <div className='table-container'>
         <h1 className='product-title'>Contact</h1>
        <table className='product-Table'>
            <thead>
                <tr className='table-row'>
                    <th className='product-headers'>Name</th>
                    <th className='product-headers'>Email</th>
                    <th className='product-headers'>Phone</th>
                </tr>
            </thead>
            <tbody>
                {Contact.map((contact, index) => (
                    <tr key={index}>
                        <td className='product-values'>{contact.firstName}{contact.lastName}</td>
                        <td className='product-values'>{contact.email}</td>
                        <td className='product-values'>{contact.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ContactTable