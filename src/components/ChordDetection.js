import React, { useState } from 'react'
import sharp11 from 'sharp11';

export default function ChordDetection(props) {
  // users notes
  const [notes, setNotes] = useState('');
  const [error, setError] = useState({ message: '', show: false });
  // list of users chords so far
  const [chords, setChords] = useState([]);
  // show chord once user submits
  const [showChord, setShowChord] = useState('');
  const [scales, setScales] = useState(null);

  const throwError = (message) => {
    setError({ message: message, show: true });
    setTimeout(() => {
      setError({ message: '', show: false });
    }, 1500);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // check if no notes provided
    if (notes === '') throwError('Please enter notes before submitting');
    //TODO: validate inputs only # & b allowed next to characters
    // trim input
    const t = notes.trim();
    const trimNotes = t.replace(/ +/g, ' ');

    // use sharp11 to detect chord
    const splitNotes = trimNotes.split(' ');
    if (splitNotes.length < 3) {
      throwError('Chords are usually based of 3 or more notes');
      return;
    }
    try {
      const identifyChord = sharp11.chord.identifyArray(splitNotes);
      const chord = new sharp11.chord.create(identifyChord)
      console.log(chord);
      // show chord to user
      setShowChord(identifyChord);
      // then push chord to chords state
      const chordObj = {
        notes: splitNotes,
        chordName: identifyChord
      }
      setChords([...chords, chordObj]);
      // clear input
      setNotes('');
    } catch (error) {
      console.log(error);
      throwError('The notes provided are not valid');
      setNotes('');
    }
  }
  // TODO: wrap in form so user can hit enter instead of having to click button
  return (
    <div className="mx-10">
      <div className=" mt-4">
        <h4 className="text-2xl font-semibold">Chord Detection</h4>
        <p className="text-sm">Find out what chord is being played by stringing together the individual notes (disregard duplicate notes).</p>
      </div>

      <div className="w-full max-w-xs mt-4">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <h2>{showChord}</h2>
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Notes of the chord</label>
            <div className="flex items-center border-b border-b-2 border-teal-500 py-2 mr-2">
              <input className="outline-none" type="text" value={notes} placeholder="C Eb G" onChange={e => setNotes(e.target.value)} />
            </div>
            <p className="text-red-500 text-xs italic">separate each note with a space</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Get Chord</button>
          </div>
        </form>
        {error.show && <p>{error.message}</p>}
      </div>

      <div>

        <div >
          {chords.length > 0 && <h3 className="text-xl font-semibold">Chord History</h3>}
          {chords.length > 0 && chords.map(chordObj => {
            return (<div className="flex flex-row justify-between items-end">
              <h3 className="font-bold text-2xl">{chordObj.chordName}</h3>
              <div>{chordObj.notes.map(note => <p className="inline-block text-lg font-bold pr-1">{note}</p>)}</div>
            </div>)
          })
          }
        </div>
      </div>
    </div>
  )
}
