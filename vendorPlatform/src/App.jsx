import React, { useState }  from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Page from './components/Page';
import Content from './components/Content';
import Cards from './components/Cards';
import Vendor from './components/Vendor';
import AuthPage from './components/AuthPage';
import Blog from './components/Blog';
import Contact from './components/Contact';
import UsestateHook from './components/Usestatehook';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/page' index element={<Page/>}/>
      <Route path='/content'  element={<Content/>}/>
      <Route path='/cards'  element={<Cards/>}/>
      <Route path='/vendor'  element={<Vendor/>}/>
      {/* <Route path='/navbar' element={<Navbar/>}/> */}
      <Route path='/auth'  element={<AuthPage/>}/>
      <Route path='/blog'  element={<Blog/>}/>
      <Route path='/contact'  element={<Contact/>}/>
      {/* <Route path='/usestatehook'  element={<UsestateHook/>}/> */}
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
