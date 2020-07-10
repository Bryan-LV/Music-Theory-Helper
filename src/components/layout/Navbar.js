import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="mx-10 mt-2">
      <Link to="/"><h2 className="text-xl">Music Theory Helper</h2></Link>

    </div >
  );
}
