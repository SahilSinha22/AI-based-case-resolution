
import Settings from '@/components/Lawyer/Setting'
import Navbar from '@/components/LawyerNav'
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <Settings/>
    </div>
    </div>
  )
}

export default Page