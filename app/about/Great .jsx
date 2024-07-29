import React from 'react'
import Link from 'next/link'

function Great() {
  return (
    <div
      className=' md:flex  md:items-center md:gap-36 mx-10 mt-20 md:pl-44 py-24 rounded-xl md:max-w-screen-xl h-full bg-gradient-to-tr  from-[#23202A] via-purple-400 to-[#1E1B24]'>

      <h1 className='font-bold font-inter text-center md:text-start text-black text-4xl md:text-5xl '>Let's make something <br />great together.</h1>
      <Link href={'/contact'}>
        <button className='mx-16 md:ml-40 my-6 md:my-0 py-5 mt-20 px-12 bg-white text-[#23202A] rounded-full hover:bg-[#23202A] hover:text-white transition duration-300'>
          Let's talk
        </button>
      </Link>
    </div>
  )
}

export default Great 