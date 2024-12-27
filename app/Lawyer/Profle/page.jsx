"use client";
import Profile from '@/components/Lawyer/Profile'
import Navbar from '@/components/LawyerNav'
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <Profile/>
    </div>
    </div>
  )
}

export default Page