import React from 'react'
// import {ContactUs} from '../components/Contact'
import '../Dashboard/dashboard_styles/productTable.css'
//import action icons for edit and delete used in tables
import { CiEdit } from "react-icons/ci"; //edit table icon

import { LuDelete } from "react-icons/lu"; //delete table icon
const Contact = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        action_icon: [<CiEdit color='#007AFF'/>, <LuDelete color='red'/>]
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        action_icon: [<CiEdit color='#007AFF'/>, <LuDelete color='red'/>]

    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        action_icon: [<CiEdit color='#007AFF'/>, <LuDelete color='red'/>]
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
                    <th className='product-headers'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {Contact.map((contact, index) => (
                    <tr key={index}>
                        <td className='product-values'>{contact.firstName}{contact.lastName}</td>
                        <td className='product-values'>{contact.email}</td>
                        <td className='product-values'>{contact.phone}</td>
                        <td className='product-values'>{contact.action_icon}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ContactTable