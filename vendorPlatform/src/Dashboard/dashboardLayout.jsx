import React from 'react'
import Outlet from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function dashboardLayout() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
    </div>
  )
}

export default dashboardLayout