import ActiveCases from '@/components/Judge/Activated'
import NavBar from '@/components/Judge/Navbar'
import Reports from '@/components/Judge/Reports'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <NavBar/>
    </div>
        <div class="w-screen h-screen">
      <Reports/>
    </div>
    </div>
  )
}

export default page