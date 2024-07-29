import React from 'react'
import Image from 'next/image'

function creative() {
    return (
        <div>
            <p 
            className='mt-32 flex justify-center md:text-center mx-20 text-center font-inter font-extrabold md:text-5xl text-2xl '>
                A small creative team excited to<br/> create beautiful things</p>
            <p className='mt-5 font-inter flex justify-center text-center text-gray-400 text-xl mx-2'>Born out of a shared passion for design and innovation, we're a dedicated team<br/> committed to turning visions into impactful digital realities.</p>
            <Image
      src="/team.webp"
      width={1000}
      height={700}
      alt="Picture of the author"
      className='md:mx-48 px-2  mt-10 rounded-3xl md:px-0'
    />
        </div>

    )
}

export default creative