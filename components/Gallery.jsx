import React from 'react'
import Image from 'next/image'


const Gallery = () => {
  return (
    <div class="bg-blue-900 text-white py-8">
  <div class="container mx-auto text-center">
    <h2 class="text-2xl font-semibold mb-4">Photo Gallery</h2>
    <div class="flex justify-center space-x-4 mb-4">
      <Image src="" alt="Photo 1" class="border border-zinc-300" width={400} height={100}/>
      <Image src="" alt="Photo 2" class="border border-zinc-300" width={400} height={100}/>
      <Image src="" alt="Photo 3" class="border border-zinc-300" width={400} height={100} />
    </div>
    <button class="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600">View All</button>
  </div>
  <div class="bg-white py-4 mt-8">
    <div class="container mx-auto flex justify-around">
      <Image src="" alt="Logo 1" width={100} height={10}/>
      <Image src="" alt="Logo 2" width={100} height={10}/>
      <Image src="" alt="Logo 3" width={100} height={10}/>
      <Image src="" alt="Logo 4" width={100} height={10}/>
      <Image src="" alt="Logo 5" width={100} height={10}/>
      <Image src="" alt="Logo 6" width={100} height={10}/>
      <Image src="" alt="Logo 7" width={100} height={10}/>
    </div>
  </div>
</div>
  )
}

export default Gallery
