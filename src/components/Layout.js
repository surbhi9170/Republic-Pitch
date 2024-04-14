import React from 'react'
import './componentstyle.css'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
    
  return (
    <>
    <div className='head'><Header/></div>
    <div className='content'><Outlet/></div>
    <div className='foot'><Footer/></div>
    </>
    
  )
}

export default Layout