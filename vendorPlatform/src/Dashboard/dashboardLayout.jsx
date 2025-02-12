import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import DashboardNavbar from './DashboardNavbar'

function DashboardLayout() {
  return (
    <div>
        <DashboardNavbar/>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout