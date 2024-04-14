import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
// import About from './pages/About'
// import Applications from './pages/Applications'
// import Careers from './pages/Careers'
// import ContactUs from './pages/ContactUs'
// import Products from './pages/Products'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      {/* <Route path="about" element={<About/>}/>
      <Route path="applications" element={<Applications/>}/>
      <Route path="careers" element={<Careers/>}/>
      <Route path="contactus" element={<ContactUs/>}/>
      <Route path="products" element={<Products/>}/> */}
      </Route>
      {/* <Route path="/about" element={<About/>}/> */}

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;