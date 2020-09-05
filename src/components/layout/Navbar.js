import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import wizardLogo from '../../assets/media/wizard.svg'

export default function Navbar() {

  return (
    <div className="mx-10 mt-4 flex justify-between align-baseline items-center">
      <div className="w-12 h-12">
        <Link to="/">
          <img className="" src={wizardLogo} alt="logo" />
        </Link>
      </div>
      <div className="">
        <NavLink to="/" className="text-lg font-semibold mx-4">Home</NavLink>
        {/* <NavLink to="/readings" className="text-lg font-semibold mx-4">Readings</NavLink> */}
        {/* <NavLink to="/tools" className="text-lg font-semibold mx-4">Tools</NavLink> */}
      </div>
    </div >
  );
}
