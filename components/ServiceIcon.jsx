"use client";
import React from "react";
import Image from 'next/image';


const ServiceIcon = () => {
  return (
    <div class="bg-primary text-primary-foreground my-4 py-8">
    <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <Image  src="/Citzenship.jpeg" alt="Citizen Services" class="mx-auto mb-2  w-96 h-60" width={400 } height={400}   />
        <p  className='text-2xl font-serif'>Citizen Services</p>
      </div>
      <div>
        <Image  src="/National.jpg" alt="National Judicial Data Grid" class="mx-auto mb-2 w-96 h-60" width={400 } height={400}   />
        <p className='text-2xl font-serif'>National Judicial Data Grid</p>
      </div>
      <div>
        <Image  src="/Judgement.jpeg" alt="Search Judgements & Orders" class="mx-auto mb-2 w-96 h-60" width={400 } height={400}   />
        <p className='text-2xl font-serif'>Search Judgements & Orders</p>
      </div>
      <div>
        <Image  src="/VirtualClock.jpg" alt="Virtual Justice Clock" class="mx-auto mb-2 w-96 h-60" width={400 } height={400}   />
        <p className='text-2xl font-serif'>Virtual Justice Clock</p>
      </div>
      <div>
        <Image  src="/CaseLaw.jpg" alt="Know Your Case Status" class="mx-auto mb-2 w-96 h-60" width={400 } height={400}   />
        <p className='text-2xl font-serif'>Know Your Case Status</p>
      </div>
      <div>
        <Image  src="/live.jpg" alt="Live Streaming Of Court Cases" class="mx-auto mb-2 w-96 h-60" width={400 } height={400}   />
        <p className='text-2xl font-serif'>Live Streaming Of Court Cases</p>
      </div>
      <div>
        <Image  src="/traffic.jpg" alt="Settle Your Traffic Violation" class="mx-auto mb-2 w-96 h-60" width={400 } height={400}   />
        <p className='text-2xl font-serif'>Settle Your Traffic Violation</p>
      </div>
    </div>
  </div>
  )
}

export default ServiceIcon
