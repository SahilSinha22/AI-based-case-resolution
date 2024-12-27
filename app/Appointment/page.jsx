"use client";
import React from 'react'
import Navbar from '@/components/LawyerNav'
import Appointment from "@/components/appointment"
const page = () => {
  return (
    <div className='flex'>
    <div className=''>
      <Navbar/>
    </div>
        <div class="w-screen h-screen">
      <Appointment/>
    </div>
    </div>
  )
}

export default page
