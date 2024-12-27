import MyCases from '@/components/Lawyer/Mycase'
import Navbar from '@/components/LawyerNav'
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <MyCases/>
    </div>
    </div>
  )
}

export default Page