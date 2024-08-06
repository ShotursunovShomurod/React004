import React , { useState } from 'react'

const Header = () => {
  return (
    <div className='Header flex justify-between items-center w-full sticky top-0 left-0 pr-5 pl-5 z-30 bg-white shadow-md'>
      <div className="Header__logo">
        <img className='border-none w-24 h-24' src="/logo.png" alt="Logo" />
      </div>
      <div className="Header__content hidden md:flex">
        <ul className='Header__collection flex gap-4'>
          <li className='Header__title cursor-pointer'>Home</li>
          <li className='Header__title cursor-pointer'>About</li>
          <li className='Header__title cursor-pointer'>Contact</li>
          <li className='Header__title cursor-pointer'>Call me</li>
          <li className='Header__title cursor-pointer'>Telegram</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;