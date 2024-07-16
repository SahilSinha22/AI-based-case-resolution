import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Testimonial from "@/public/Testinomial2.png";
import Homes from "@/public/Home.png";
import Dashboard from "@/public/Navbar1.png";
import Clients from "@/public/Navbar2.png";
import Case from "@/public/Navbar3.png";
import Taskss from "@/public/Navbar4.png";
import Appointment from "@/public/Navbar5.png";

import Team from "@/public/Navbar6.png";
import Income from "@/public/Navbar7.png";
import Vendor from "@/public/Navbar8.png";
import Expense from "@/public/Navbar9.png";
import Settingss from "@/public/settings.png";
const LawyerNav = () => {
  return (
    <div className="flex h-full">

        <div className="bg-blue-800 text-white w-64 h-screen p-4 flex flex-col">
          <div className="grid grid-rows-2 items-center ">
            <Image src={Testimonial} alt="User Avatar" className="rounded-full mr-2" width={100} height={10} />
            <span className='text-2xl font-sans font-bold'>Welcome</span>
          </div>
          <nav className="flex-1">
            <ul>
            <li className="mb-2">
                <Link href="/" className="flex items-center p-2 hover:bg-blue-700 rounded">
                  <Image src={Homes} alt="Dashboard" className="material-icons mr-2" width={40} height={4}/>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/User" className="flex items-center p-2 hover:bg-blue-700 rounded">
                  <Image src={Dashboard} alt="Dashboard" className="material-icons mr-2" width={40} height={4}/>
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Clients} alt="Person" className="material-icons mr-2" width={40} height={5}/>
                  Client
                </a>
              </li>
              <Link href="/Case">
                <li className="mb-2">
                  <Link href="/Case" className="flex items-center p-2 hover:bg-blue-700 rounded">
                  <Image src={Case} alt="Case" className="material-icons mr-2" width={40} height={5}/>
                    Case
                  </Link>
                </li>
              </Link>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Taskss} alt="Task" className="material-icons mr-2" width={40} height={5}/>
                  Task
                </a>
              </li>
              <Link href="/Appointment">
                <li className="mb-2">
                  <Link href="/Appointment" className="flex items-center p-2 hover:bg-blue-700 rounded">
                  <Image src={Appointment} alt="CalenderToday" className="material-icons mr-2" width={40} height={5}/>
                    Appointment
                  </Link>
                </li>
              </Link>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Team} alt="Group" className="material-icons mr-2" width={40} height={5}/>
                  Team Members
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Income} alt="money" className="material-icons mr-2" width={40} height={5}/> 
                  Income
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Vendor} alt="Vendor" className="material-icons mr-2" width={40} height={5}/>
                  Vendor
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Expense} alt="Expenses" className="material-icons mr-2" width={40} height={5}/>
                  Expense
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
                <Image src={Settingss} alt="Setting" className="material-icons mr-2" width={40} height={5}/>
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
