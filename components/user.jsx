import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const user = () => {
  return (
    <div>
      
    <div className="flex h-screen">
  
  <div className="bg-blue-800 text-white w-64 p-4 flex flex-col">
    <div className="flex items-center mb-8">
      <Image src="" alt="User Avatar" className="rounded-full mr-2" width={400} height={100}/>
      <span>Welcome</span>
    </div>
    <nav className="flex-1">
      <ul>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">dashboard</span>
            Dashboard
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">person</span>
            Client
          </a>
        </li>
        <Link href="/Case">
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            
            Case
          </a>
        </li>
        </Link>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">task</span>
            Task
          </a>
        </li>
        <Link href="/Appointment">
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">calendar_today</span>
            Appointment
          </a>
        </li>
        </Link>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">group</span>
            Team Members
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">attach_money</span>
            Income
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">store</span>
            Vendor
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">money_off</span>
            Expense
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="flex items-center p-2 hover:bg-blue-700 rounded">
            <span className="material-icons mr-2">settings</span>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  </div>
  
  <div className="flex-1 bg-zinc-100 p-4">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="material-icons">notifications</button>
        <button className="material-icons">settings</button>
        <button className="material-icons">account_circle</button>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-4 mb-4">
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center">
          <Image src="" alt="Clients Icon" className="mr-2" width={400} height={100}/>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div>Clients</div>
          </div>
        </div>
        <div className="text-zinc-500">Total clients.</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center">
          <Image src="" alt="Cases Icon" className="mr-2" width={400} height={100}/>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div>Cases</div>
          </div>
        </div>
        <div className="text-zinc-500">Total cases.</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center">
          <Image src="" alt="Important Cases Icon" className="mr-2"/>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div>Important Cases</div>
          </div>
        </div>
        <div className="text-zinc-500">Total important cases.</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center">
          <Image src="" alt="Archived Cases Icon" className="mr-2" width={400} height={100}/>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div>Archived Cases</div>
          </div>
        </div>
        <div className="text-zinc-500">Total completed cases.</div>
      </div>
    </div>
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Case Board</h2>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="font-bold">Manage your case</h3>
          <p className="text-zinc-500">Maintain complete case details like case history, case transfer, next hearing date etc.</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Case</button>
      </div>
      <div className="flex items-center">
        <input type="text" className="border p-2 rounded w-full" placeholder="30-05-2024" />
        <span className="material-icons ml-2">calendar_today</span>
      </div>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Appointment</h2>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="font-bold">Manage your Appointment</h3>
          <p className="text-zinc-500">Schedule your appointment with Advocates Diary and we will remind and notify as and when your appointment is due.</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Appointment</button>
      </div>
      <div className="flex items-center">
        <input type="text" className="border p-2 rounded w-full" placeholder="30-05-2024" />
        <span className="material-icons ml-2">calendar_today</span>
      </div>
    </div>
  </div>
</div>
  
    </div>
  )
}

export default user
