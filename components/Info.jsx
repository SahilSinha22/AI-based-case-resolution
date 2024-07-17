import React from 'react'
import Image from 'next/image'
import Annual from "@/public/Annual.png";
import Budget from "@/public/Budget.png";

const Info = () => {
  return (
    <div class="flex flex-wrap justify-around p-4">
  <div class="w-full md:w-1/4 p-2">
    <h2 class="text-lg font-semibold mb-4">Reports & Documents</h2>
    <div class="space-y-4">
      <div class="flex items-center p-4 bg-card rounded-lg shadow-md">
        <Image src={Annual} alt="Annual Reports" class="mr-4" width={100} height={10}/>
        <span class="text-card-foreground">Annual Reports</span>
      </div>
      <div class="flex items-center p-4 bg-card rounded-lg shadow-md">
        <Image src={Budget} alt="Budget Information" class="mr-4" width={100} height={20} />
        <span class="text-card-foreground">Budget Information</span>
      </div>
      <div class="flex items-center p-4 bg-card rounded-lg shadow-md">
        <Image src="" alt="Law Commission Reports Having DOJ Interface" class="mr-4" width={100} height={10}/>
        <span class="text-card-foreground">Law Commission Reports Having DOJ Interface</span>
      </div>
    </div>
  </div>

  <div class="w-full md:w-1/4 p-2">
    <h2 class="text-lg font-semibold mb-4">Divisions</h2>
    <ul class="list-disc list-inside text-xl">
      <li>Appointments</li>
      <li>National Mission for Justice Delivery & Legal Reforms</li>
      <li>Access to Justice</li>
      <li>eCourts</li>
      <li>Justice I</li>
      <li>Justice II</li>
      <li>Administration</li>
    </ul>
  </div>

  <div class="w-full md:w-1/4 p-2">
    <h2 class="text-lg font-semibold mb-4">Important Links</h2>
    <ul class="list-disc list-inside text-xl">
      <li>Department of Legal Affairs</li>
      <li>Legislative Department</li>
      <li>Supreme Court of India</li>
      <li>India Code</li>
      <li>National Judicial Academy</li>
      <li>National Legal Services Authority</li>
      <li>e-Committee, Supreme Court of India</li>
      <li>Legal Information Management & Briefing System (LIMBS)</li>
    </ul>
  </div>

  <div class="w-full md:w-1/4 p-2 h-40">
    <h2 class="text-lg font-semibold mb-4">Tweets</h2>
    <div class="bg-card rounded-lg shadow-md p-4">
      <a class="twitter-timeline" href="https://twitter.com/MLJ_GoI">Posts from @MLJ_GoI</a>
      <div className="h-40">
      {/*<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>*/}
      </div>
    </div>
  </div>
</div>
  )
}

export default Info
