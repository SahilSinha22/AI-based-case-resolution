"use client";
import Dashboard from '@/components/User/Dashboard'
import UserNavBar from '@/components/User/Navbar'
import Profile from '@/components/User/Profile'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <UserNavBar/>
    </div>
        <div class="w-screen h-screen">
      <Profile/>
    </div>
    </div>
  )
}

export default page