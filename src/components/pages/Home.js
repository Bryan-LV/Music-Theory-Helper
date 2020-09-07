import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data'
import HeroImg from '../../assets/media/HeroImg.svg'
import chevron from '../../assets/media/chevron.svg'

function Home() {
  return (
    <div className="px-4 md:px-8 pb-8 bg-black" style={{ backgroundColor: '#00013D' }}>
      {/* Hero */}
      <section className="relative pt-8 pb-8 h-full md:pt-12 md:flex md:flex-row-reverse md:items-center max-w-screen-xl">

        <div className="w-full flex justify-end items-end">
          <div className="w-64 md:w-full" style={{ maxWidth: '500px' }}>
            <img src={HeroImg} className="md:w-full" alt="" />
          </div>
        </div>

        <div className="lg:pl-10 w-full max-w-screen-md relative z-10">
          <p className="tracking-widest text-white font-bold">MUSICWIZARD</p>
          <h2 className="font-semibold py-2 leading-tight text-4xl lg:text-5xl text-white">Learning Music  <br /> Theory Shouldn't  <br /> Be So Hard...</h2>
          <div className="flex flex-row justify-start items-baseline max-w-screen-xl">
            <div className="bg-gray-700 hidden md:block"></div>
            <p className="text-lg lg:text-xl text-white leading-base py-4 md:pr-4 lg:pr-12">Music Wizard was created as a supplement learning resource for people who are learn music theory. Here you can find learning tools to help you create and better understand the concepts.</p>
          </div>
        </div>

      </section>

      {/* Tools Section */}
      <div className="bg-white py-8 rounded-lg px-2">
        <h2 className="text-4xl font-bold text-center">Tools</h2>

        <div className="lg:grid lg:grid-cols-3 lg:gap-2">
          {
            data.map(item => {
              return (
                <div className="my-4 rounded-lg shadow-xl max-w-sm flex-1 m-auto w-full" style={{ backgroundColor: '#00013D' }}>
                  <div className="h-56 flex justify-center items-center flex-col">
                    <h2 className="text-5xl font-semibold text-white">{item.title}</h2>
                    <Link to={'/tools' + item.linkText} className="">
                      <div className=" w-12 h-12 rounded-full bg-white flex justify-center items-center">
                        <div className="w-full pl-1">
                          <img src={chevron} alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <div className="pt-2">
                    <p className="pb-2 text-lg">{item.desc}</p>
                    <div className="flex flex-row justify-start pt-2">
                      <Link to={'/tools' + item.linkText} className="mr-2 py-3 px-10 bg-blue-500 rounded-md">
                        <button className="font-semibold text-white text-lg" >{item.btnText}</button>
                      </Link>
                    </div>
                  </div> */}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
