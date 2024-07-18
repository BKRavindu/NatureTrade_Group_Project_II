import React from 'react';
import logo from '../../assets/Untitled design (1) 1.svg';
import tab from '../../assets/Glyph.png';

import profile4 from '../../assets/Malith_Perera_1714318818.jpeg'

function NavBar() {
  return (
    <>
    <nav className="flex sticky top-0 bg-white w-full h-20 items-center px-4">
      <div className="flex items-center">
        <img src={logo} alt="NatureTrade Logo" className='w-12 h-12' />
        <div className="text-xl font-semibold text-center ml-3">NatureTrade</div>
        <i className='bx bx-menu w-5 text-xl h-5 ml-8'></i>
      </div>
      <input 
        type="text" 
        className="w-80 h-8 rounded-md bg-gray-200 px-3 mx-5" 
        placeholder='Search...'
      />
      <div className="flex items-center ml-auto space-x-4">
        <i className='bx bxs-chat text-xl'></i>
        <i className='bx bxs-bell text-xl'></i>
        <i className='bx bxs-moon text-xl'></i>
        <div className="flex flex-col items-left p-2">
          <div className="text-md font-semibold">Jane</div>
          <div className="text-sm font-ligh">Admin</div>
        </div>
        <img src={profile4} alt="Profile" className='w-12 h-12 rounded-full object-cover' />
      </div>
    </nav>
    <div className="w-60 rounded-lg bg-white h-16 rounded-tr-none"></div>
    </>
  );
}

export default NavBar;
