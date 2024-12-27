import Client from '@/components/Lawyer/Client'
import Resources from '@/components/Lawyer/Resources'
import Navbar from '@/components/LawyerNav'
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <Resources/>
    </div>
    </div>
  )
}

export default Page