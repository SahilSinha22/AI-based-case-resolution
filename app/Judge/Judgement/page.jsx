import CaseDetails from '@/components/Judge/Casesid'
import NavBar from '@/components/Judge/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <NavBar/>
    </div>
        <div class="w-screen h-screen">
      <CaseDetails/>
    </div>
    </div>
  )
}

export default page
