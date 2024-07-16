import React from 'react'
import Image from 'next/image'
import Gallery1 from "@/public/Gallery1.jpg";
import Gallery2 from "@/public/Gallery2.jpg";
import Gallery3 from "@/public/Gallery3.jpeg";
import Logo1 from "@/public/Logo1.jpg";
import Logo2 from "@/public/Logo2.png";
import Logo3 from "@/public/Logo3.png";
import Logo4 from "@/public/Logo4.png";
import Logo5 from "@/public/Logo5.png";
import Logo6 from "@/public/Logo6.png";

const Gallery = () => {
  return (
    <div class="bg-blue-900 text-white py-8">
  <div class="container mx-auto text-center">
    <h2 class="text-2xl font-semibold mb-4">Photo Gallery</h2>
    <div class="flex justify-center space-x-4 mb-4">
      <Image src={Gallery1} alt="Photo 1" class="border border-zinc-300" width={400} height={100}/>
      <Image src={Gallery2} alt="Photo 2" class="border border-zinc-300" width={400} height={100}/>
      <Image src={Gallery3} alt="Photo 3" class="border border-zinc-300" width={400} height={100} />
    </div>
    <button class="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600">View All</button>
  </div>
  <div class="bg-white py-4 mt-8">
    <div class="container mx-auto flex justify-around">
      <Image src={Logo1} alt="Logo 1" width={100} height={10}/>
      <Image src={Logo2} alt="Logo 2" width={100} height={10}/>
      <Image src={Logo3} alt="Logo 3" width={100} height={10}/>
      <Image src={Logo4} alt="Logo 4" width={100} height={10}/>
      <Image src={Logo5} alt="Logo 5" width={100} height={10}/>
      <Image src={Logo6} alt="Logo 6" width={100} height={10}/>
      <Image src={Logo2} alt="Logo 7" width={100} height={10}/>
    </div>
  </div>
</div>
  )
}

export default Gallery
