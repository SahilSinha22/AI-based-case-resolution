import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const intro = () => {
  return (
    <div className='h-auto w-full'>
      <div className='flex w-full'>
      <div className=" bg-red-300  w-1/2 h-full bg-cover bg-center">
        <Image src="/Judicial3.jpg" alt="LAWS" className='w-full h-full object-contain ' width={800} height={100} />
      </div>
      <div>
        <div className=" h-auto w-full  bg-black bg-opacity-50  flex flex-col justify-center items-center text-center ">
          <div className='relative w-full h-full'>
          <Image src="/Judicial.jpg" alt="LAWS" className='w-full h-full object-cover' width={800} height={100} />

         <div className='absolute  p-8 top-0'>
          <h1 className="text-5xl font-bold text-white mb-4">Law office</h1>
          <p className="text-lg text-white mb-8">Bringing the court at your doorsteps, your comprehensive online resource for all judicial information and services.</p>
          <div className="flex flex-col space-y-4">
            <Link href="/User/Registration"><button className="hover:bg-blue-600 bg-white text-destructive-foreground hover:bg-destructive/80 px-6 py-3 rounded-lg"> Registration</button> </Link>
            <Link href="/Lawyer/Login"><button className="hover:bg-blue-600 bg-white text-destructive-foreground hover:bg-destructive/80 px-6 py-3 rounded-lg">Lawyer Login</button> </Link>
            <Link href="/Judge/Login"><button className="hover:bg-blue-600 bg-white text-destructive-foreground hover:bg-destructive/80 px-6 py-3 rounded-lg">Judge Login</button> </Link>

          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default intro
