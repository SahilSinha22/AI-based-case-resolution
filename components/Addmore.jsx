import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Addmore = () => {
  return (
    <div class="flex h-screen">
   
  
    <main class="flex-1 p-6 bg-zinc-100">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold">Add Case</h1>
        <Link href="/Case">
        <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Back</button>
        </Link>
      </div>
      <div class="bg-white p-6 rounded shadow">
        <section class="mb-6">
          <h2 class="text-xl font-semibold mb-4">Client Detail</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block mb-1">Client *</label>
              <select class="w-full border p-2 rounded">
                <option>Select Client Name</option>
              </select>
            </div>
            <div>
              <label class="block mb-1">Respondent Name*</label>
              <input type="text" class="w-full border p-2 rounded" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block mb-1">Petitioner</label>
              <input type="radio" name="role" class="mr-2" /> Petitioner <input type="radio" name="role" class="ml-4 mr-2" /> Respondent
            </div>
            <div>
              <label class="block mb-1">Respondent Advocate*</label>
              <input type="text" class="w-full border p-2 rounded" />
            </div>
          </div>
          <button class="bg-green-500 text-white px-4 py-2 rounded">+ Add More</button>
        </section>
  
        <section>
          <h2 class="text-xl font-semibold mb-4">Case Detail</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block mb-1">Case No*</label>
              <input type="text" class="w-full border p-2 rounded" />
            </div>
            <div>
              <label class="block mb-1">Case Type*</label>
              <select class="w-full border p-2 rounded">
                <option>Select Case Type</option>
              </select>
            </div>
            <div>
              <label class="block mb-1">Case Sub Type</label>
              <select class="w-full border p-2 rounded">
                <option>Select Case Sub Type</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block mb-1">Stage of Case*</label>
              <select class="w-full border p-2 rounded">
                <option>Select Stage of Case</option>
              </select>
            </div>
            <div>
              <label class="block mb-1">Act*</label>
              <input type="text" class="w-full border p-2 rounded" />
            </div>
            <div>
              <label class="block mb-1">Filing Number*</label>
              <input type="text" class="w-full border p-2 rounded" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block mb-1">Filing Date*</label>
              <input type="date" class="w-full border p-2 rounded" />
            </div>
            <div>
              <label class="block mb-1">Registration Number*</label>
              <input type="text" class="w-full border p-2 rounded" />
            </div>
            <div>
              <label class="block mb-1">Registration Date*</label>
              <input type="date" class="w-full border p-2 rounded" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block mb-1">First Hearing Date*</label>
              <input type="date" class="w-full border p-2 rounded" />
            </div>
            <div>
              <label class="block mb-1">Priority</label>
              <div class="flex items-center">
                <input type="radio" name="priority" class="mr-2" /> High <input type="radio" name="priority" class="ml-4 mr-2" /> Medium <input type="radio" name="priority" class="ml-4 mr-2" /> Low
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
  )
}

export default Addmore
