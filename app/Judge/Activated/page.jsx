"use client";
import ActiveCases from '@/components/Judge/Activated'
import NavBar from '@/components/Judge/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <NavBar/>
    </div>
        <div class="w-screen h-screen">
      <ActiveCases/>
    </div>
    </div>
  )
}

export default page
