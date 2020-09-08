import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {

  return (
    <div className="mx-10 my-4 flex justify-between align-baseline items-center rounded-b-md">
      <div className="w-12 h-12">
        <Logo />
      </div>

      <div className="md:hidden">
        <div className="w-10 border border-black"></div>
        <div style={{ marginTop: '5px' }} className="w-10 border border-black ml-2"></div>
        <div style={{ marginTop: '5px' }} className="w-10 border border-black ml-4"></div>
      </div>

      <div className="hidden md:block">
        <NavLink to="/" className="text-lg mx-4">Home</NavLink>
        <NavLink to="/tools" className="text-lg mx-4">Tools</NavLink>
        <NavLink to="/readings" className="text-lg mx-4">Resources</NavLink>
      </div>
    </div >
  );
}
