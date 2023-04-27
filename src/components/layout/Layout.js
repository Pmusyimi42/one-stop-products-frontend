import React from 'react'
import { Outlet } from 'react-router-dom'
// import Home from '../Home'

import Footer from './Footer'
import Navbar from '../Navbar'

function Layout() {
  return (
    <section className='bg-zinc-300'>
        {/* <Navbar />
        <div className='min-h-[80vh]'>
            <Outlet />
        </div>
        
        
        <Footer /> */}
    </section>

  )
}

export default Layout