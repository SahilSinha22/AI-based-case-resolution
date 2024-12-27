"use client";
import Messages from '@/components/Lawyer/Message'
import Navbar from '@/components/LawyerNav'
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <Messages/>
    </div>
    </div>
  )
}

export default Page
