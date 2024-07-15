import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import G20 from "@/public/G20.png";
import Azadi from "@/public/Azadi.png";
import Emblem from "@/public/emblem.svg"
const Navbar = () => {
  return (
    <div class="bg-zinc-100">
    <div class="flex justify-between items-center bg-zinc-200 text-zinc-700 p-2 text-sm">
      <div>हिंदी | श्री गणेशाय नमः | सत्यमेव जयते</div>
      <div>MINISTRY OF LAW AND JUSTICE, GOVERNMENT OF INDIA</div>
      <div class="flex space-x-4">
        <a href="#" class="hover:underline">SKIP TO MAIN CONTENT</a>
        <a href="#" class="hover:underline">🔍</a>
        <a href="#" class="hover:underline">📞</a>
        <a href="#" class="hover:underline">📧</a>
        <a href="#" class="hover:underline">ENGLISH</a>
      </div>
    </div>
  
    <div class="flex justify-between items-center bg-white p-4">
      <div class="flex items-center space-x-4">
        <Image src={Emblem} alt="India Emblem" class="h-24 w-full object-contain"  width={600} height={400}/>
        <div>
          <div class="text-lg font-bold">न्याय विभाग</div>
          <div class="text-2xl font-bold">DEPARTMENT OF JUSTICE</div>
          <div class="text-sm">भारत सरकार</div>
        </div>
      </div>
      <div class="flex space-x-4">
        <Link href="https://www.g20.org/en/">
        <Image src={G20} alt="G20 Logo" class="h-12" width={200} height={100}/>
        </Link>
        <Link href="https://amritmahotsav.nic.in/">
        <Image src={Azadi} alt="Azadi Ka Amrit Mahotsav Logo" class="h-12" width={200} height={100} />
        </Link>
      </div>
    </div>
  
    <div class="bg-zinc-100">
      <nav class="flex justify-between items-center p-2">
        <div class="flex space-x-4">
          <a href="#" class="hover:underline">Home</a>
          <a href="#" class="hover:underline">About Us</a>
          <a href="#" class="hover:underline">Administration of Justice</a>
          <a href="#" class="hover:underline">National Mission</a>
          <a href="#" class="hover:underline bg-yellow-500 text-white p-1 rounded">eCourts MMP</a>
          <a href="#" class="hover:underline">Access to Justice</a>
          <a href="#" class="hover:underline">Samvidhan@75</a>
          <a href="#" class="hover:underline">Media Corner</a>
        </div>
        <button class="text-2xl">☰</button>
      </nav>
    </div>
  </div>
  )
}

export default Navbar
