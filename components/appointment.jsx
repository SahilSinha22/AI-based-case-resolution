import React from 'react'
import Image from 'next/image'
const appointment = () => {
  return (
   
      <div class="min-h-screen flex">
  <div class="w-64 bg-blue-700 text-white flex flex-col">
    <div class="flex items-center justify-center h-16 border-b border-blue-800">
      <span class="text-xl font-semibold">LawOffice</span>
    </div>
    <div class="flex flex-col items-center py-4">
      <Image class="w-16 h-16 rounded-full" src="" alt="User profile picture" width={400} height={100}  />
      <span class="mt-2">Welcome</span>
    </div>
    <nav class="flex-1 px-4 space-y-2">
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Dashboard icon" class="mr-3" /> Dashboard </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Client icon" class="mr-3" /> Client </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Case icon" class="mr-3" /> Case </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Task icon" class="mr-3" /> Task </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded bg-blue-600">
        <Image src="" alt="Appointment icon" class="mr-3" width={400} height={100}  /> Appointment
      </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Team Members icon" class="mr-3" /> Team Members </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Income icon" class="mr-3" /> Income </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Vendor icon" class="mr-3" /> Vendor </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Expense icon" class="mr-3" /> Expense </a>
      <a href="#" class="flex items-center p-2 text-blue-100 hover:bg-blue-600 rounded"> <Image src="" alt="Settings icon" class="mr-3" /> Settings </a>
    </nav>
  </div>

  <div class="flex-1 p-6 bg-zinc-100">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-semibold">Appointment</h1>
      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">+ Add Appointment</button>
    </div>
    <div class="bg-white p-4 rounded shadow">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="from-date" class="block text-sm font-medium text-zinc-700">From Date:</label>
          <input type="date" id="from-date" class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label for="to-date" class="block text-sm font-medium text-zinc-700">To Date:</label>
          <input type="date" id="to-date" class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
      </div>
      <div class="flex space-x-2 mb-4">
        <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400">Clear</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">Search</button>
      </div>
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center space-x-2">
          <label for="show-entries" class="block text-sm font-medium text-zinc-700">Show</label>
          <select id="show-entries" class="mt-1 block w-20 border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span class="block text-sm font-medium text-zinc-700">entries</span>
        </div>
        <div>
          <label for="search" class="block text-sm font-medium text-zinc-700">Search:</label>
          <input type="text" id="search" class="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
      </div>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="px-4 py-2 border-b">No</th>
            <th class="px-4 py-2 border-b">Client Name</th>
            <th class="px-4 py-2 border-b">Mobile</th>
            <th class="px-4 py-2 border-b">Date</th>
            <th class="px-4 py-2 border-b">Time</th>
            <th class="px-4 py-2 border-b">Status</th>
            <th class="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="7" class="px-4 py-2 border-b text-center">No data available in table</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between items-center mt-4">
        <div class="text-sm text-zinc-700">Showing 0 to 0 of 0 entries</div>
        <div class="flex space-x-2">
          <button class="bg-zinc-300 text-zinc-700 px-4 py-2 rounded hover:bg-zinc-200">Previous</button>
          <button class="bg-zinc-300 text-zinc-700 px-4 py-2 rounded hover:bg-zinc-200">Next</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default appointment
