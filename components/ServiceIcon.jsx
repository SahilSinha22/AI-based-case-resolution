import React from 'react'
import Image from 'next/image';
import Citizen from "@/public/Citzenship.jpeg";
import Liv from "@/public/live.jpg";
import Traffic from "@/public/traffic.jpg";

import Naty from "@/public/NationalJudicial.jpg";
import Judge from "@/public/Judgement.jpeg";
import Cases from "@/public/caseLaw.jpg"

const ServiceIcon = () => {
  return (
    <div class="bg-primary text-primary-foreground py-8">
    <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <Image  src={Citizen} alt="Citizen Services" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Citizen Services</p>
      </div>
      <div>
        <Image  src={Naty} alt="National Judicial Data Grid" class="mx-auto mb-2" width={400 } height={400}   />
        <p>National Judicial Data Grid</p>
      </div>
      <div>
        <Image  src={Judge} alt="Search Judgements & Orders" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Search Judgements & Orders</p>
      </div>
      <div>
        <Image  src="" alt="Virtual Justice Clock" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Virtual Justice Clock</p>
      </div>
      <div>
        <Image  src={Cases} alt="Know Your Case Status" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Know Your Case Status</p>
      </div>
      <div>
        <Image  src={Liv} alt="Live Streaming Of Court Cases" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Live Streaming Of Court Cases</p>
      </div>
      <div>
        <Image  src={Traffic} alt="Settle Your Traffic Violation" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Settle Your Traffic Violation</p>
      </div>
    </div>
  </div>
  )
}

export default ServiceIcon
