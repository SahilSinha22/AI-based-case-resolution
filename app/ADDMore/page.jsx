import React from 'react'
import Navbar from '@/components/LawyerNav'
import Addmore from '@/components/Addmore'
const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <Addmore/>
    </div>
    </div>
  )
}

export default page
