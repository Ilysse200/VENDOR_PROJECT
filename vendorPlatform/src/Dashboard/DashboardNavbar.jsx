import React from 'react'
import '../Dashboard/dashboard_styles/dashboard_nav.css'
import { TbGraphFilled } from "react-icons/tb";
function DashboardNavbar() {
  return (
    <div>
        <div className='nav-bar'>
          <div className='nav-content'>
          <p>Dashboard UI</p>
          <TbGraphFilled />
          </div>
        </div>
    </div>
  )
}

export default DashboardNavbar