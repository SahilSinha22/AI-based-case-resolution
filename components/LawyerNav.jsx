import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navbar1 from "@/public/Navbar1.png";
import Navbar2 from "@/public/Navbar2.png"
import Navbar3 from "@/public/Navbar3.png"
import Navbar4 from "@/public/Navbar4.png"
import Navbar5 from "@/public/Navbar5.png"
import Navbar6 from "@/public/Navbar6.png"
import Navbar7 from "@/public/Navbar7.png"
import Navbar8 from "@/public/Navbar8.png"
import Navbar9 from "@/public/Navbar9.png"
const LawyerNav = () => {
  return (
    <div className="flex h-full">

        <div className="bg-blue-800 text-white w-64 h-screen p-4 flex flex-col">
          <div className="grid grid-rows-2 items-center ">
            <Image src={Navbar1} alt="User Avatar" className="rounded-full mr-2" width={100} height={10} />
            <span className='text-2xl font-sans font-bold'>Welcome</span>
          </div>
          <nav className="flex-1">
            <ul>
            <li className="mb-2">
                <Link href="/" className="flex items-center p-2 hover:bg-blue-700 rounded">
                  <Image src={Navbar2} alt="Dashboard" className="material-icons mr-2" width={40} height={4}/>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/User" className="flex items-center p-2 hover:bg-blue-700 rounded">
                  <Image src={Navbar1} alt="Dashboard" className="material-icons mr-2" width={40} height={4}/>
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Navbar2} alt="Person" className="material-icons mr-2" width={40} height={5}/>
                  Client
                </a>
              </li>
              <Link href="/Case">
                <li className="mb-2">
                  <Link href="/Case" className="flex items-center p-2 hover:bg-blue-700 rounded">
                  <Image src={Navbar3} alt="Case" className="material-icons mr-2" width={40} height={5}/>
                    Case
                  </Link>
                </li>
              </Link>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Navbar4} alt="Task" className="material-icons mr-2" width={40} height={5}/>
                  Task
                </a>
              </li>
              <Link href="/Appointment">
                <li className="mb-2">
                  <Link href="/Appointment" className="flex items-center p-2 hover:bg-blue-700 rounded">
                  <Image src={Navbar5} alt="CalenderToday" className="material-icons mr-2" width={40} height={5}/>
                    Appointment
                  </Link>
                </li>
              </Link>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Navbar6} alt="Group" className="material-icons mr-2" width={40} height={5}/>
                  Team Members
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Navbar7} alt="money" className="material-icons mr-2" width={40} height={5}/> 
                  Income
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Navbar8} alt="Vendor" className="material-icons mr-2" width={40} height={5}/>
                  Vendor
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Navbar9} alt="Expenses" className="material-icons mr-2" width={40} height={5}/>
                  Expense
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src="" alt="Setting" className="material-icons mr-2" width={40} height={5}/>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default LawyerNav
