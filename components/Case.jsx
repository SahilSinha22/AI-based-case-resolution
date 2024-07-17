import React from 'react'

import Link from 'next/link'
const Case = () => {
  return (
    <div class="flex h-screen">
    
  
    <div class="flex-1 p-6 bg-zinc-100">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold">Cases</h1>
        <Link href="/ADDMore">
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add Case</button>
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
