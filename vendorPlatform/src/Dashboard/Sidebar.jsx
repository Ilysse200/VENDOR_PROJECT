import React from 'react'
import { useState } from 'react';
import '../Dashboard/dashboard_styles/sidebar.css'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';


function Sidebar() {

  return (
    <div>
        <div className='admin-icon' >
            <IoPersonCircleOutline className='admin-profile'/>
            <p>Admin</p>
        </div>
        <div className='dashboard-menu'>
            <div className='dashboard-icon'>
            <MdOutlineSpaceDashboard className='dashb-icon'/>
            <li className='dashboard-title'>dashboard</li>
      
            </div>
            <div>
            
            
            <ul className='sidebar-list'>
              <Link to='/productTable' className='link-path'>
              <li>Products</li>
              </Link>
              <Link to='/vendorTable' className='link-path'><li>Vendors</li></Link>
              <Link to='/blogTable' className='link-path'><li>Blog</li></Link>
              <Link to='/contactTable'className='link-path'><li>Contact</li></Link>
            </ul>
        </div>
        </div>
          
    </div>
  )
}

export default Sidebar