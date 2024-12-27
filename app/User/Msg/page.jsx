
"use client";
import Messages from '@/components/User/Message'
import UserNavBar from '@/components/User/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <UserNavBar/>
    </div>
        <div class="w-screen h-screen">
      <Messages/>
    </div>
    </div>
  )
}

export default page