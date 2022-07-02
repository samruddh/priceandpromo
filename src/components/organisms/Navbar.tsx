import React from 'react';
import logo from "../../assets/images/samyaLogo.png";

export function Navbar() {
  return (
    <nav className='h-16 bg-white flex'>
        <div className='border border-slate-400'>
          <span className='w-8 h-16'>
            <img src={logo} alt="logo"/>
          </span>
        </div>
        <div className='flex items-center justify-between w-full border border-slate-400'>
          <div className='font-medium text-4xl text-sky-800 m-3'>Mars</div>
          <div className='flex justify-center m-3'>
            <a className='bg-sky-300 w-10 h-10 rounded-full flex text-xl justify-center items-center text-black'>Js</a>
          </div>
        </div>
    </nav>
  )
}
