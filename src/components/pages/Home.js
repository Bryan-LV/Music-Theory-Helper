import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data'

function Home() {
  return (
    <div className="px-8 ">
      <div className="py-16 lg:pl-24">
        <p className="tracking-widest">MUSICWIZARD</p>
        <h2 className="font-semibold text-4xl py-2 leading-tight md:text-5xl">Learning Music Theory <br />Shouldn't Be So Hard...</h2>

        <div className="flex flex-row justify-start items-baseline max-w-screen-xl">
          <div style={{ height: '3px', width: '150px' }} className="bg-gray-700 hidden md:block"></div>
          <p className="text-gray-700 text-xl leading-base py-4 md:w-3/4 max-w-xl md:pl-4">Music Wizard was created as a supplement learning resource for people
          who are learn music theory. Here you can find learning tools to help you create and better understand the concepts.</p>
        </div>

        <button className="py-3 px-10 bg-gray-400 rounded-md mt-4 text-xl font-semibold">Get Started</button>
      </div>

      <div className="lg:flex lg:flex-row lg:justify-start lg:items-baseline lg:items-stretch">
        {
          data.map(item => {
            return (
              <div className="my-4 rounded-lg shadow-xl max-w-sm flex-1 mx-2">
                <div className="bg-gray-700 h-40 w-full rounded-tr-lg rounded-tl-lg"></div>
                <div className="px-4 py-6">
                  <h2 className="text-4xl font-semibold">{item.title}</h2>
                  <div className="pt-2">
                    <p className="pb-2 text-lg">{item.desc}</p>
                    <div className="flex flex-row justify-start pt-2">
                      <Link to={'/tools' + item.linkText} className="mr-2 py-3 px-10 bg-blue-500 rounded-md">
                        <button className="font-semibold text-white text-lg" >{item.btnText}</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
