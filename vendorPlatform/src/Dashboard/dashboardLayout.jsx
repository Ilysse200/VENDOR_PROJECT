import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import DashboardNavbar from './DashboardNavbar'
import DashboardView from './DashboardView'

function DashboardLayout() {
  return (
    <div>
        <DashboardNavbar/>
        <Sidebar/>
        {/* <DashboardView/> */}
        <Outlet/>
    </div>
  )
}

export default DashboardLayout