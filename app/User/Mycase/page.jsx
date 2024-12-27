import MyCases from '@/components/User/Mycase'
import UserNavBar from '@/components/User/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <UserNavBar/>
    </div>
        <div class="w-screen h-screen">
      <MyCases/>
    </div>
    </div>
  )
}

export default page