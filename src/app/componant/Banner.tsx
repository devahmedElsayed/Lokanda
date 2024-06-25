import Image from 'next/image'
import React from 'react'
import banner from '../assets/banner.jpg'
const Banner = () => {
  return (
    <div className='relative  h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500] '>
        <Image src={banner}
        alt='banner'
        className=' object-cover object-left'
                fill

        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-[#fff] text-sm sm:text-3xl '>not sure where to go? Perfect.</p>
            <button type='button'
             className='text-purple-500 bg-white px-10 mt-5 py-4 shadow-md rounded-full font-bold'>
                I am flexible
             </button>
        </div>
    </div>
  )
}

export default Banner