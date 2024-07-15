import React from 'react'

const Gallery = () => {
  return (
    <div class="bg-blue-900 text-white py-8">
  <div class="container mx-auto text-center">
    <h2 class="text-2xl font-semibold mb-4">Photo Gallery</h2>
    <div class="flex justify-center space-x-4 mb-4">
      <img src="" alt="Photo 1" class="border border-zinc-300" />
      <img src="" alt="Photo 2" class="border border-zinc-300" />
      <img src="" alt="Photo 3" class="border border-zinc-300" />
    </div>
    <button class="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600">View All</button>
  </div>
  <div class="bg-white py-4 mt-8">
    <div class="container mx-auto flex justify-around">
      <img src="" alt="Logo 1" />
      <img src="" alt="Logo 2" />
      <img src="" alt="Logo 3" />
      <img src="" alt="Logo 4" />
      <img src="" alt="Logo 5" />
      <img src="" alt="Logo 6" />
      <img src="" alt="Logo 7" />
    </div>
  </div>
</div>
  )
}

export default Gallery
