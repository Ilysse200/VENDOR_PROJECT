import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Page from './Page'
import Content from './Content'
import Footer from './Footer'

export default function Layout
() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/> 

    </div>
  )
}
