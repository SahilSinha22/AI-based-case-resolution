import React from 'react'
import User from "@/components/user"
import Navbar from '@/components/LawyerNav'
const page = () => {
  return (
    <div className='flex'>
<div className='h-full'>
  <Navbar/>
</div>
    <div class="w-screen h-screen">
  <User/>
</div>
</div>
  )
}

export default page
