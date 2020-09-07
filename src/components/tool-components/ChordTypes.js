import React from 'react'
import chordGraph from '../../assets/media/chord-shapes.gif'

function ChordTypes({ note = 'c' }) {

  return (
    <div className="px-10 py-8 dark-blue">
      <div className=" text-center">
        <h1 className="text-6xl font-semibold text-white leading-none pb-8">Chord Types</h1>
        <div className="max-w-screen-lg m-auto">
          <p className="text-white">
            The chords we start out learning are great and can get you far when learning how to play guitar, but with time you will start to find that you can't create the sound you really want with just normal major and minor chords.
            That's where chord types come into play. There are SO many different variations of a chord, we won't be able to cover them all. However, I've listed some of the more common chord types here that will help create different moods for your music.
        </p>
        </div>
      </div>
      <div className="w-full max-w-xl mt-4 m-auto">
        <img src={chordGraph} alt="" />
      </div>
    </div>
  )
}

export default ChordTypes
