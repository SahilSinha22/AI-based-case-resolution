import React from 'react'
import Case from "@/components/Case";
import Navbar from "@/components/LawyerNav";
const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <Case/>
    </div>
    </div>
  )
}

export default page
