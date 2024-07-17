import React from 'react'
import Image from 'next/image'

const ServiceIcon = () => {
  return (
    <div class="bg-primary text-primary-foreground py-8">
    <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <Image  src="" alt="Citizen Services" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Citizen Services</p>
      </div>
      <div>
        <Image  src="" alt="National Judicial Data Grid" class="mx-auto mb-2" width={400 } height={400}   />
        <p>National Judicial Data Grid</p>
      </div>
      <div>
        <Image  src="" alt="Search Judgements & Orders" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Search Judgements & Orders</p>
      </div>
      <div>
        <Image  src="" alt="Virtual Justice Clock" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Virtual Justice Clock</p>
      </div>
      <div>
        <Image  src="" alt="Know Your Case Status" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Know Your Case Status</p>
      </div>
      <div>
        <Image  src="" alt="Live Streaming Of Court Cases" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Live Streaming Of Court Cases</p>
      </div>
      <div>
        <Image  src="" alt="Settle Your Traffic Violation" class="mx-auto mb-2" width={400 } height={400}   />
        <p>Settle Your Traffic Violation</p>
      </div>
    </div>
  </div>
  )
}

export default ServiceIcon
