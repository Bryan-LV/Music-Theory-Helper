import React, { useState } from 'react'
import sharp11 from 'sharp11';

import supportedScales from '../../utils/scales'

function Scales(props) {
  const [key, setKey] = useState('');
  const [scaleName, setScaleName] = useState('');
  const [showScale, setShowScale] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // check inputs
    if (key === '') {
      // TODO: handle error
      return
    }
    const getScale = sharp11.scale.create(key, scaleName)
    setShowScale(getScale.scale);
  }

  return (
    <div className="mx-8">
      <div className="max-w-xl  py-4 text-center m-auto">
        <h2 className="text-6xl lg:text font-semibold">Scales</h2>
        <h3 className="pb-3">Scales are just a pattern of intervals that sound nice together. An interval is just the distance between two notes. Each interval has it's own scale degree, which is just a fancy way of saying that each note has a number in the scale</h3>
      </div>
      <div class="w-full max-w-lg m-auto">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Root Note</label>
            <div class="flex items-center border-b border-b-2 border-teal-500 py-2 mr-2">
              <input value={key} placeholder="C" onChange={e => setKey(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
            </div>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Scale</label>
            <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
              <input type="text" value={scaleName} placeholder="Minor" list="scaleList" onChange={e => setScaleName(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
            </div>
            <datalist id="scaleList">
              {supportedScales.map(scale => <option value={scale} />)}
            </datalist>
            <p class="text-red-500 text-xs italic">If not chosen, defaults to natural major.</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Get Scale</button>
          </div>
        </form>
      </div>


      {showScale ? (
        <div className="flex flex-row">
          {showScale.map(note => <p className="text-3xl px-2">{note.name}</p>)}
        </div>
      ) : null}


    </div>
  )
}

export default Scales
