import Client from '@/components/Lawyer/Client'
import NewCase from '@/components/Lawyer/NewCase'
import Navbar from '@/components/LawyerNav'
import React from 'react'

const Page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <NewCase/>
    </div>
    </div>
  )
}

export default Page