import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const intro = () => {
  return (
    <div>
      <div className="relative h-screen bg-cover bg-center">
        <Image src="" alt="LAWS" className='w-full h-screen' width={500} height={100} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-5xl font-bold text-white mb-4">Law office</h1>
        <p className="text-lg text-white mb-8">Bringing the court at your doorsteps, your comprehensive online resource for all judicial information and services.</p>
        <div className="flex space-x-4">
        <Link href="/User"><button className="bg-red-600 text-destructive-foreground hover:bg-destructive/80 px-6 py-3 rounded-lg">User Login</button> </Link> 
          <button className="bg-card text-card-foreground hover:bg-card/80 px-6 py-3 rounded-lg">Lawyer Login</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default intro
