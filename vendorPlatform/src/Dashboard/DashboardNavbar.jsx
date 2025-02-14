import React from 'react'
import '../Dashboard/dashboard_styles/dashboard_nav.css'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
function DashboardNavbar() {
  return (
    <div className='navigation-container'>
        <div className='nav-bar'>
          <div className='nav-content'>
          <p className='dashboard-text'>Dashboard</p>
          <FiMenu />
          </div>
          <div className='navbar-rightcontent'>
          <p className='search-border'>Type to search<CiSearch className='search-icon'/></p>
          <div className='notification-bar'><IoIosNotificationsOutline className='notification-icon' /></div>
          <div className='notification-bar'><RxAvatar className='notification-icon' /></div>
          
          </div>
        </div>
    </div>
  )
}

export default DashboardNavbar