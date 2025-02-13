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

  const handleNavigate = () => {
    navigate(`/productTable`);
};

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
                <li>Vendors</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            )}
        </div>
        </div>
          
    </div>
  )
}

export default Sidebar