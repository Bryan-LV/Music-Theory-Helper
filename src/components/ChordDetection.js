import React, { useState } from 'react'
import { Button, Input, Typography, Divider, Container } from '@material-ui/core';
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


  const handleClick = (e) => {
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
    <Container>
      {error.show && <Typography paragraph={true}>{error.message}</Typography>}
      <Typography paragraph={true}>Enter each note separated by a space</Typography>
      <Typography variant="h2">{showChord}</Typography>
      <Input type="text" value={notes} placeholder="C Eb G" onChange={e => setNotes(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleClick}>Get Chord</Button>
      {chords.length > 0 && <Typography paragraph={true}>Chord History</Typography>}
      {chords.length > 0 && chords.map(chordObj => {
        return (<div>
          <Typography variant="h3" style={{ display: 'inline-block', paddingRight: '6px' }}>{chordObj.chordName}</Typography>
          {chordObj.notes.map(note => <Typography style={{ display: 'inline-block', paddingRight: '6px' }} paragraph={true}>{note}</Typography>)}
        </div>)
      })
      }
      <Divider />

    </Container>
  )
}
