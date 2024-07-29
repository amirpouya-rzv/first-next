import React from 'react'
import Link from 'next/link'

function page() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }
  return (
    <div className='mt-52 mb-52'>
      <p className='mt-10 text-center sm:px-10 font-inter text-2xl md:text-4xl  md:px-[350px] font-extrabold '>Trusted by the best companies in the business
      </p>
      <p className='mt-10 text-center px-[24px] mb-5 text-[#C2C6DD] text-2xl md:text-xl  md:px-[380px] font-noto  '>Collaborating with various sectors, we’ve  helped startups and established businesses alike to flourish</p>
        <div className='md:mx-52 grid grid-cols-2 gap-2 md:grid-cols-3 mx-6 '>
          <Link href={'/'} className='md:w-72 md:h-36 w-full mr-5 flex justify-center items-center h-40 mt-5 bg-[#23202A] hover:bg-[#1E1B24] rounded-3xl '>1</Link>
          <Link href={'/'} className='md:w-72 md:h-36 w-full mr-5 flex justify-center items-center h-40 mt-5 bg-[#23202A] hover:bg-[#1E1B24] rounded-3xl '>2</Link>
          <Link href={'/'} className='md:w-72 md:h-36 w-full mr-5 flex justify-center items-center h-40 mt-5 bg-[#23202A] hover:bg-[#1E1B24] rounded-3xl '>3</Link>
          <Link href={'/'} className='md:w-72 md:h-36 w-full mr-5 flex justify-center items-center h-40 mt-5 bg-[#23202A] hover:bg-[#1E1B24] rounded-3xl '>4</Link>
          <Link href={'/'} className='md:w-72 md:h-36 w-full mr-5 flex justify-center items-center h-40 mt-5 bg-[#23202A] hover:bg-[#1E1B24] rounded-3xl '>5</Link>
          <Link href={'/'} className='md:w-72 md:h-36 w-full mr-5 flex justify-center items-center h-40 mt-5 bg-[#23202A] hover:bg-[#1E1B24] rounded-3xl' >6</Link>

        </div>

    </div>
  )
}

export default page


