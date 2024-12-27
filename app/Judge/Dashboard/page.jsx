"use client";
import Dashboard from '@/components/Judge/Dashboard'
import NavBar from '@/components/Judge/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <NavBar/>
    </div>
        <div class="w-screen h-screen">
      <Dashboard/>
    </div>
    </div>
  )
}

export default page
