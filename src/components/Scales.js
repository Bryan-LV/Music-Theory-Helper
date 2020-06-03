import React, { useState } from 'react'
import sharp11 from 'sharp11';
import { Input, Button, Typography, makeStyles } from '@material-ui/core';

import supportedScales from '../utils/scales'

const myStyles = makeStyles({
  scaleNotes: {
    padding: '10px 5px',
    display: 'inline-block'
  }
})

function Scales(props) {
  const [key, setKey] = useState('');
  const [scaleName, setScaleName] = useState('');
  const [showScale, setShowScale] = useState(null);
  const c = myStyles();

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
    <div>
      <form onSubmit={handleSubmit}>
        <Input value={key} placeholder="C" onChange={e => setKey(e.target.value)} />
        <br />
        <input type="text" value={scaleName} placeholder="minor" list="scaleList" onChange={e => setScaleName(e.target.value)} />
        <datalist id="scaleList">
          {supportedScales.map(scale => <option value={scale} />)}
        </datalist>
        <br />
        <Button variant="contained" type="submit">Get Scale</Button>
      </form>
      <div>
        {showScale ? (
          <div>
            {showScale.map(note => <Typography className={c.scaleNotes} paragraph>{note.name}</Typography>)}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Scales
