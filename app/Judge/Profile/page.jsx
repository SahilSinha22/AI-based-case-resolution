import ActiveCases from '@/components/Judge/Activated'
import NavBar from '@/components/Judge/Navbar'
import Profile from '@/components/Judge/Profile'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <NavBar/>
    </div>
        <div class="w-screen h-screen">
      <Profile/>
    </div>
    </div>
  )
}

export default page