import React from 'react'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className="bg-background text-foreground p-8">
      <div className='flex'> 
                  <div className="text-center mb-8 mx-40 ">
                    <h1 className="text-3xl font-bold">Judicial System</h1>
                    <p className="text-muted-foreground px-40">Our mission is to enhance the accessibility and efficiency of the <br/>  judicial system by providing a seamless digital experience.</p>
                    <button className="mt-4 px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded">Read More</button>
                  </div>
                  <div className="flex justify-center mb-8">
                    <Image src="" alt="Gavel and Books" className="rounded-lg shadow-md" width={400} height={100} />
                  </div>
                  </div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">Our Services</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-card p-4 rounded-lg shadow-md">
                      <Image src="" alt="Case Filing and Tracking" className="rounded-lg mb-4" width={400} height={100} />
                      <h3 className="text-xl font-bold">Case Filing and Tracking</h3>
                      <p className="text-muted-foreground">Easily file new cases and track the status of ongoing cases.</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow-md">
                      <Image src="" alt="Judicial Records Access" className="rounded-lg mb-4" width={400} height={100} />
                      <h3 className="text-xl font-bold">Judicial Records Access</h3>
                      <p className="text-muted-foreground">Access and review judicial records with ease.</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow-md">
                      <Image src="" alt="Learning Resource Hub" className="rounded-lg mb-4" width={400} height={100} />
                      <h3 className="text-xl font-bold">Learning Resource Hub</h3>
                      <p className="text-muted-foreground">Explore resources for legal education and training.</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow-md">
                      <Image src="" alt="Online Hearing Schedule" className="rounded-lg mb-4" width={400} height={100} />
                      <h3 className="text-xl font-bold">Online Hearing Schedule</h3>
                      <p className="text-muted-foreground">View and manage your online hearing schedules.</p>
                    </div>
                  </div>
                </div>
  )
}

export default Mission
