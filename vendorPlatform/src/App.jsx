import React, { useState }  from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import Page from './components/Page';
import Content from './components/Content';
import Cards from './components/Cards';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/page' index element={<Page/>}/>
      <Route path='/content'  element={<Content/>}/>
      <Route path='/cards'  element={<Cards/>}/>
      {/* <Route path='/navbar' element={<Navbar/>}/> */}

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
