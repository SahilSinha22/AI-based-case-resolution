"use client";
import Newcase from '@/components/Judge/Newcase'
import NavBar from '@/components/Judge/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <NavBar/>
    </div>
        <div class="w-screen h-screen">
      <Newcase/>
    </div>
    </div>
  )
}

export default page