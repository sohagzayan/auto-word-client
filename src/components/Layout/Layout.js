import React, { useState } from 'react'
import AllRoutes from '../../routes/AllRoutes'
import NavigationBar from '../NavigationBar/NavigationBar'

const Layout = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='bg-[#F5F5F5]'>
      <div className='grid grid-cols-12'>
        <div
          className={
            show
              ? ' lg:sticky bg-[#F5F5F5] top:0 left-[0] lg:top-0 lg:left-0 absolute lg:block lg:col-span-3 h-screen border-r-2 transition-all duration-500 border-[#E6E6E6]  z-50 navigation lg:w-[100%]'
              : ' lg:sticky bg-[#F5F5F5] top:0 transition-all duration-500 left-[-100%] lg:top-0 lg:left-0 absolute lg:block lg:col-span-3 h-screen border-r-2 border-[#E6E6E6]  z-50 navigation'
          }
        >
          <NavigationBar show={show} setShow={setShow} />
        </div>
        <div className='lg:col-span-9 col-span-12 '>
          <AllRoutes show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  )
}

export default Layout
