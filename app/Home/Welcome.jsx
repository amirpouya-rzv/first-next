import React from 'react'
import Image from 'next/image'

function page() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }
  return (
    <div>
      <div
      className='md:flex md:items-center md:space-x-52 mx-10 mt-20 py-24 rounded-xl max-w- md:max-w-screen-xl h-full bg-gradient-to-tr  from-[#23202A] via-current to-[#1E1B24]'>
      <div>

        <h1 className='font-bold font-inter px-16 text-black text-2xl'>Let’s make your product a success </h1>
        <p className='ml-16 mt-2 font-noto  text-black'>Crator is your partner in digital innovation. We fuse strategic thinking with standout design and development to deliver uniquely tailored solutions.</p>
      </div>
      <Image

        className='flex p-10 rounded-3xl mt-10 mdmt-0'
        src="/hero-home.webp"
        width={600}
        height={600}
        alt="Picture of the author"
        style={imageStyle}
      />

    </div>
  
    </div>
  )
}

export default page


