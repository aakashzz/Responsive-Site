import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav className=' h-20 bg-zinc-950 text-white flex justify-between px-9'>
          <div className=' flex p-3 '>
               <h1 className='text-5xl font-bold'>CRED!</h1>
          </div>
          <div className='h-auto w-fit flex justify-center items-center'>
               <ul className=' flex gap-8 text-lg font-semibold'>
                    <li>Home</li>
                    <li>Payments</li>
                    <li>Check Credit Score</li>
                    <li>About</li>
                    <li>Help</li>
               </ul>
          </div>
          <div className='flex items-center gap-2'>
               <button className='text-white text-lg font-bold border sticky py-1 px-4 rounded-md  '>Log</button>
               <button className='text-white bg-orange-700 hover:bg-orange-800  font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none text-sm'>Sign-In</button>
          </div>
    </nav>
  )
}

export default Navbar
