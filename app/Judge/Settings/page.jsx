"use client";
import NavBar from '@/components/Judge/Navbar'
import Settings from '@/components/Judge/Setting'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <NavBar/>
    </div>
        <div class="w-screen h-screen">
      <Settings/>
    </div>
    </div>
  )
}

export default page
