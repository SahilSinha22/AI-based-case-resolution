import React from 'react'

const Form = () => {
  return (
    <div class="relative min-h-screen flex items-center justify-center bg-cover bg-center" >
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
    <h1 class="text-2xl font-bold text-center mb-6">Crime Judgement AI</h1>
    <h2 class="text-lg font-semibold mb-4">Basic Crime Information</h2>
    <form>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="crime-id">Crime ID:</label>
        <input type="text" id="crime-id" class="w-full px-3 py-2 border rounded-md" placeholder="Enter Crime ID" />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="crime-type">Crime Type:</label>
        <input type="text" id="crime-type" class="w-full px-3 py-2 border rounded-md" placeholder="Enter Crime Type" />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="crime-date">Date and Time of Crime:</label>
        <input type="text" id="crime-date" class="w-full px-3 py-2 border rounded-md" placeholder="dd-mm-yyyy --:--" />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="location">Location:</label>
        <input type="text" id="location" class="w-full px-3 py-2 border rounded-md" placeholder="Enter Location" />
      </div>
      <h2 class="text-lg font-semibold mb-4">Victim Details</h2>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="victim-id">Victim ID:</label>
        <input type="text" id="victim-id" class="w-full px-3 py-2 border rounded-md" placeholder="Enter Victim ID" />
      </div>
    </form>
  </div>
</div>
  )
}

export default Form
