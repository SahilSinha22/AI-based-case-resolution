import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Case = () => {
  return (
    <div class="flex h-screen">
    <div class="bg-blue-700 text-white w-64 p-4">
      <div class="flex items-center mb-8">
        <span class="text-2xl font-bold">LawOffice</span>
      </div>
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <Image class="w-10 h-10 rounded-full" src="" alt="User Avatar" width={400} height={100} />
          <span>Welcome</span>
        </div>
        <nav class="space-y-2">
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">dashboard</span>
            <span class="ml-2">Dashboard</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">person</span>
            <span class="ml-2">Client</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded bg-blue-600">
            <span class="material-icons">folder</span>
            <span class="ml-2">Case</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">task</span>
            <span class="ml-2">Task</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">event</span>
            <span class="ml-2">Appointment</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">group</span>
            <span class="ml-2">Team Members</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">attach_money</span>
            <span class="ml-2">Income</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">store</span>
            <span class="ml-2">Vendor</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">money_off</span>
            <span class="ml-2">Expense</span>
          </a>
          <a href="#" class="flex items-center p-2 rounded hover:bg-blue-600">
            <span class="material-icons">settings</span>
            <span class="ml-2">Settings</span>
          </a>
        </nav>
      </div>
    </div>
  
    <div class="flex-1 p-6 bg-zinc-100">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold">Cases</h1>
        <Link href="/ADDMore">
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">+ Add Case</button>
        </Link>
      </div>
      <div class="bg-white p-6 rounded shadow">
        <div class="flex space-x-4 mb-4">
          <input type="date" class="border p-2 rounded w-full" placeholder="From Next Date" />
          <input type="date" class="border p-2 rounded w-full" placeholder="To Next Date" />
          <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400">Clear</button>
          <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">Search</button>
        </div>
        <div class="border-b mb-4">
          <ul class="flex space-x-4">
            <li class="pb-2 border-b-2 border-blue-600">Running Cases</li>
            <li class="pb-2">Important Cases</li>
            <li class="pb-2">No Board Cases</li>
            <li class="pb-2">Archived Cases</li>
          </ul>
        </div>
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center space-x-2">
            <label for="entries" class="text-zinc-700">Show</label>
            <select id="entries" class="border p-2 rounded">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span class="text-zinc-700">entries</span>
          </div>
          <div>
            <input type="text" class="border p-2 rounded" placeholder="Search" />
          </div>
        </div>
        <table class="w-full text-left border-collapse">
          <thead>
            <tr>
              <th class="border-b p-2">No.</th>
              <th class="border-b p-2">Client & Case Detail</th>
              <th class="border-b p-2">Court Detail</th>
              <th class="border-b p-2">Petitioner vs Respondent</th>
              <th class="border-b p-2">Next Date</th>
              <th class="border-b p-2">Status</th>
              <th class="border-b p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2" colspan="7">No data available in table</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between items-center mt-4">
          <span class="text-zinc-700">Showing 0 to 0 of 0 entries</span>
          <div class="flex space-x-2">
            <button class="border px-4 py-2 rounded hover:bg-zinc-200">Previous</button>
            <button class="border px-4 py-2 rounded hover:bg-zinc-200">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Case
