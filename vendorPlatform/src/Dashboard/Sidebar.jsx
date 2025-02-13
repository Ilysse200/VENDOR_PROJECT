import React from 'react'
import { useState } from 'react';
import '../Dashboard/dashboard_styles/sidebar.css'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


function Sidebar() {

  //Navigation path
  const navigate = useNavigate();

  // The path to the product table
  const handleNavigate = () => {
    navigate(`/productTable`);
};

//The path to the vendor table
  const handleVendors=() =>{
    navigate(`/vendorTable`);
  } 
  // The path to the blog table
  const handleBlog = () => {
    navigate(`/blogTable`);
  }
  const [expanded, setExpanded] = useState(false);// when menu is not clicked

   // Toggle function
   const toggleMenu = () => {
    setExpanded(!expanded);
  };
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
            <IoMdArrowDropright  className = 'toggle-icon' onClick={toggleMenu}/>
            </div>
            <div>
            
            {expanded &&(
            <ul className='sidebar-list'>
                <li onClick={() => {handleNavigate("/productTable")}}>Products</li>
                <li onClick={() => {handleVendors("/vendorTable")}}>Vendors</li>
                <li onClick={() => {handleBlog("/blogTable")}}>Blog</li>
                <li>Contact</li>
            </ul>
            )}
        </div>
        </div>
          
    </div>
  )
}

export default Sidebar