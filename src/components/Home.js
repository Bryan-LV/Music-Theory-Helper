import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="px-8">
      <div className="px-4 py-6 my-4 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold">Scales</h2>
        <div style={{ height: '1px' }} className="w-full bg-black"></div>
        <div className="pt-2">
          <p className="pb-2">Find any scale for any note.</p>
          <div className="flex flex-row justify-start">
            <Link to="/scales" className="mr-2 py-2 px-4 bg-blue-500 rounded-md text-sm">
              <button className="font-bold text-white" >Take me there</button>
            </Link>
            <button className="py-2 px-4 bg-gray-800 rounded-md text-white text-sm font-bold">Learn More</button>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 my-4 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold">Chord Detection</h2>
        <div style={{ height: '1px' }} className="w-full bg-black"></div>
        <div className="pt-2">
          <p className="pb-2">Find out what chord you are playing by it's individual notes.</p>
          <div className="flex flex-row justify-start">
            <Link to="/chordDetection" className="mr-2 py-2 px-4 bg-blue-500 rounded-md text-sm font-bold">
              <button className="font-bold text-white">Take me there</button>
            </Link>
            <button className="py-2 px-4 bg-gray-800 rounded-md text-white text-sm font-bold">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
