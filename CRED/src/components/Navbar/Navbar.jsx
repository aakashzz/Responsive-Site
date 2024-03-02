import React from 'react'
import './Navbar.css'
import {  NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className=' h-20 bg-zinc-950 text-white flex justify-between px-9'>
          <div className=' flex p-3 '>
               <h1 className='text-5xl font-bold'>CRED!</h1>
          </div>
          <div className='h-auto w-fit flex justify-center items-center'>
               <ul className=' flex gap-8 text-lg font-semibold'>
                    <li><NavLink to='/' className={({isActive})=>  `${isActive ? 'text-purple-300' : 'text-white'}`}>Home</NavLink> </li>
                    <li><NavLink to='/payments' className={({isActive})=> `${isActive ? 'text-purple-300' : 'text-white'}`}> Payments</NavLink></li>
                    <li><NavLink to='/credit-score' className={({isActive})=> `${isActive ? 'text-purple-300' : 'text-white'}`}>Check Credit Score</NavLink></li>
                    <li>About</li>
                    <li>Help</li>
               </ul>
          </div>
          <div className='flex items-center gap-4'>
               <button class="signupBtn">
                    SIGN UP
               <span class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(183, 128, 255)"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
               </span>
               </button>
          </div>
    </nav>
  )
}

export default Navbar
