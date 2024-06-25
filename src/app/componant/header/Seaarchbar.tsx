'use client'
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import {DateRangePicker, RangeKeyDict} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { MdPeopleAlt } from "react-icons/md";
import Link from 'next/link';

function Seaarchbar({placeholder}:{placeholder?:string}) {
  const [input, setInput]=useState("")
  const [startDate , setStartDate]=useState(new Date())
  const [endDate , setEndDate]=useState(new Date());
  const [numofGuest , setNumOfGuest]=useState(1)
  const selectionRange ={
      startDate,
      endDate,
      key: 'selection',
  }
  const handleSelect=(ranges:RangeKeyDict)=>{
    setStartDate( ranges.selection.startDate as Date)
    setEndDate( ranges.selection.endDate as Date)
  }
  return (
    <>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
         <input type="text"
          placeholder={placeholder||'Start Your Search'}
          value={input}
          onChange={(e)=>setInput(e.target.value)}
    className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none'
    />
        <IoSearch className='hidden md:inline-flex h-8 w-8 bg-[#ec3c46] text-white rounded-full p-2 cursor-pointer md:mx-2 ' />
    </div>    

     {input && <div className=' absolute  top-[100%] left-[50%] flex flex-col col-span-3 mx-auto translate-x-[-50%]'>
        <DateRangePicker ranges={[selectionRange]}
         onChange={handleSelect}
          rangeColors={['#FD5B61']}
          minDate={new Date()}/>
          <div className='flex items-center border-b  bg-white p-4'>
              <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
              <MdPeopleAlt className='text-red-400'/>
            <input type="number" 
            className='w-12 pl-2 text-lg outline-none text-red-400'
            value={numofGuest}
            min={1}
            onChange={(e)=>setNumOfGuest(Number(e.target.value))}/>
          </div>
          <div className='flex items-center bg-white py-4 justify-between'>
        <button type='button'
         className='flex-grow text-gray-500'
         onClick={()=>setInput('')}
         >Cancel</button>

        <Link
         href={{pathname:'/search' , search:`?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuest=${numofGuest}`}}
        onClick={()=>setInput('')}
         className='flex-grow text-red-500'
         >Search</Link>

      </div>
      </div>} 
    
    </>
   
  )
}

export default Seaarchbar