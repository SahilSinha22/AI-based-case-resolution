
import Dashboard from '@/components/User/Dashboard'
import UserNavBar from '@/components/User/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <UserNavBar/>
    </div>
        <div class="w-screen h-screen">
      <Dashboard/>
    </div>
    </div>
  )
}

export default page