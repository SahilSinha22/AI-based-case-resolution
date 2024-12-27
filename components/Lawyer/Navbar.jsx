import React from 'react'
import Image from 'next/image';
import Link from 'next/link';



const LawyerNavBar = () => {
  return (
   

<div className="flex h-full">

<div className="bg-blue-800 text-white w-64 h-screen p-4 flex flex-col">
  <div className="grid grid-rows-2 items-center ">
    <Image src="/Testinomial2.png" alt="User Avatar" className="rounded-full mr-2" width={100} height={10} />
    <span className='text-2xl font-sans font-bold'>Welcome</span>
  </div>
  <nav className="flex-1">
    <ul>
    <li className="mb-2">
        <Link href="/" className="flex items-center p-2 hover:bg-blue-700 rounded">
          <Image src="/Home.png" alt="Dashboard" className="material-icons mr-2" width={40} height={4}/>
          Home
        </Link>
      </li>
      <li className="mb-2">
        <Link href="/User" className="flex items-center p-2 hover:bg-blue-700 rounded">
          <Image src="/Navbar1.png" alt="Dashboard" className="material-icons mr-2" width={40} height={4}/>
          Dashboard
        </Link>
      </li>
      <li className="mb-2">
        <Link href="/Lawyer/Client" className="flex items-center p-2 hover:bg-blue-700 rounded">
        <Image src="/Navbar2.png" alt="Person" className="material-icons mr-2" width={40} height={5}/>
          Client
        </Link>
      </li>
      <Link href="/Case">
        <li className="mb-2">
          <Link href="/Case" className="flex items-center p-2 hover:bg-blue-700 rounded">
          <Image src="/Navbar3.png" alt="Case" className="material-icons mr-2" width={40} height={5}/>
           My Case
          </Link>
        </li>
      </Link>
      <li className="mb-2">
        <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
        <Image src="/Navbar4.png" alt="Task" className="material-icons mr-2" width={40} height={5}/>
         New Cases
        </a>
      </li>
      <Link href="/Appointment">
        <li className="mb-2">
          <Link href="/Appointment" className="flex items-center p-2 hover:bg-blue-700 rounded">
          <Image src="/Navbar5.png" alt="CalenderToday" className="material-icons mr-2" width={40} height={5}/>
            Appointment
          </Link>
        </li>
      </Link>
      <li className="mb-2">
        <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
        <Image src="/Navbar6.png" alt="Group" className="material-icons mr-2" width={40} height={5}/>
          Message
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
        <Image src="/Navbar7.png" alt="money" className="material-icons mr-2" width={40} height={5}/> 
          Profile
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
        <Image src="/Navbar7.png" alt="money" className="material-icons mr-2" width={40} height={5}/> 
          Resources
        </a>
      </li>
     
      <li className="mb-2">
        <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
        <Image src="/settings.png" alt="Setting" className="material-icons mr-2" width={40} height={5}/>
          Settings
        </a>
      </li>
    </ul>
  </nav>
</div>
</div>
  );
};

export default LawyerNavBar;
