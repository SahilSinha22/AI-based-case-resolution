import React from 'react'
import Image from 'next/image'


import Client from "@/public/Client.png";
import Important from "@/public/Important.png";
import Archived from "@/public/Archivied.png";
import Cases from "@/public/Cases.png";

const user = () => {
  return (
    <div>

      <div className='h-screen'>

        <div className="flex-1 bg-zinc-100 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="material-icons">notifications</button>
              <button className="material-icons">settings</button>
              <button className="material-icons">account_circle</button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <Image src={Client} alt="Clients Icon" className="mr-2" width={100} height={10} />
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div>Clients</div>
                </div>
              </div>
              <div className="text-zinc-400">Total clients.</div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <Image src={Cases} alt="Cases Icon" className="mr-2" width={100} height={20} />
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div>Cases</div>
                </div>
              </div>
              <div className="text-zinc-400">Total cases.</div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <Image src={Important} alt="Important Cases Icon" className="mr-2"  width={100} height={10}/>
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div>Important Cases</div>
                </div>
              </div>
              <div className="text-zinc-400">Total important cases.</div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center">
                <Image src={Archived} alt="Archived Cases Icon" className="mr-2" width={100} height={10} />
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div>Archived Cases</div>
                </div>
              </div>
              <div className="text-zinc-400">Total completed cases.</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-bold mb-2">Case Board</h2>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-bold">Manage your case</h3>
                <p className="text-zinc-400">Maintain complete case details like case history, case transfer, next hearing date etc.</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add Case</button>
            </div>
            <div className="flex items-center">
            
              <input type="date" id="from-date" className="border p-2 rounded w-full" placeholder="30-05-2024" />
              <span className="material-icons ml-2">calendar_today</span>
            </div>
            

          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Appointment</h2>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-bold">Manage your Appointment</h3>
                <p className="text-zinc-400">Schedule your appointment with Advocates Diary and we will remind and notify as and when your appointment is due.</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add Appointment</button>
            </div>
            <div className="flex items-center">
              <input type="date" id="from-date" className="border p-2 rounded w-full" placeholder="30-05-2024" />
              <span className="material-icons ml-2">calendar_today</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default user
