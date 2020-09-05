import React from 'react'
import data from '../../data'
import { Link } from 'react-router-dom'

function Tools({ setTool }) {

  return (
    <div>
      <div className="text-center py-10">
        <h2 className="text-6xl">Tools</h2>
      </div>
      <div className="flex flex-col justify-center items-center md:grid-col-2">
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
                      <Link to={'/tools' + item.linkText} onClick={() => setTool(item.linkText)} className="mr-2 py-3 px-10 bg-blue-500 rounded-md">
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

export default Tools
