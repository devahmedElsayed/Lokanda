import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import { LuUserCircle } from "react-icons/lu";

function Navbar() {
  return (
    <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <AiOutlineGlobal className='h-6 cursor-pointer' />

        <div className='flex space-x-2 border-2 p-2 rounded-full'>
        <MdOutlineMenu className='h-6' />
        <LuUserCircle  className='h-6'/>
   
        </div>
        
    </div>
  )
}

export default Navbar