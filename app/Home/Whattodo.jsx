import React from 'react'
import Image from 'next/image'

function Whattodo() {
  return (
    <div className='md:grid md:grid-cols-2 md:m-8 '>
      <p className='mt-20 mb-10  text-center font-inter text-2xl md:text-start md:text-4xl font-extrabold '>We create digital products that help you get ahead</p>
      <p className='mt-3 text-center px-[30px] mb-5 text-[#C2C6DD] text-2xl md:text-xl md:mt-[88px] md:mx-16 md:text-start font-noto  '>From fresh ideas to fully-realized designs, we cover every aspect of your digital presence.</p>



      <div className='flex flex-col text-start  '>
        <div className='md:w-[500px] md:h-36 mr-5  flex flex-col justify-center items-center h-40 mt-5 bg-[#23202A] shadow-xl rounded-3xl md:ml-20 mx-3 ml-5'>
            <h1 className='font-noto text-xl font-bold md:mr-52 mb-2 md:text-start'>Web Design</h1>
          <p className='md:px-20 -mx-1  md:mx-2 text-center text-white md:text-start   '>
            We craft visually stunning, unforgettable experiences with responsive design at the forefront.</p>
        </div>

         <div className='md:w-[500px] md:h-36 ml-5 mr-5 flex flex-col justify-center items-center h-40 mt-5 bg-[#23202A] shadow-xl rounded-3xl '>
            <h1 className='font-noto text-xl font-bold flex  md:mr-40 mb-2 md:text-start '>Web Development</h1>
          <p className='md:px-20 text-white mx-1 text-center  md:-mx-1 md:text-start'>
            We excell at converting eye-catching designs into high-functioning, user-friendly web applications.
            </p>
        </div>

        
        <div className='md:w-[500px] md:h-36 mr-5  flex flex-col justify-center items-center h-40 mt-5 bg-[#23202A] shadow-xl rounded-3xl md:ml-20 mx-3 ml-5'>
            <h1 className='font-noto text-xl font-bold md:mr-14 mb-2'>Maintenance & Optimization</h1>
            <p className=' text-white md:px-20 text-center md:-mx-1 md:text-start'>
          We ensure your site remains an effective, optimized tool for your business needs, goals and growth.</p>
        </div> 
        
      </div>
      <div className='flex flex-col md:flex-row gap-5 mb-32'>
  <Image
    src="/what-we-do-image-01.webp"
    width={310}
    height={360}
    alt="Picture of the author"
    className='rounded-3xl mx-7 mt-5 md:w-72  '
  />
  <div className='flex flex-col mt-6 gap-7'>
    <Image
      src="/what-we-do-image-02.webp"
      width={450}
      height={450}
      alt="Picture of the author"
      className=' md:-mx-8 w-80 mx-7 rounded-3xl md:h-56 '
    />
     <Image
      src="/what-we-do-image-03.webp"
      width={450}
      height={450}
      alt="Picture of the author"
      className=' md:-mx-8 w-80 mx-7 rounded-3xl md:h-56 mt-6 md:mt-0'
    />
  </div> 
</div>

    </div>
  )
}

export default Whattodo