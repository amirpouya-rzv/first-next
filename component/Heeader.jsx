"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Page() {
  const [open, SetOpen] = useState(false);

  const toggleShow = () => {
    SetOpen(!open);
  }

  return (
    <nav className='md:flex items-center md:justify-between mx-5 mt-5 mb-5'>
      <div className='flex justify-between items-center text-4xl '>
        <span className='hover:text-gray-300 group-hover:text-white transition-colors duration-300'>Crator
          <span className='text-gray-300 hover:text-white group-hover:text-white transition-colors duration-300'> Studio</span>
        </span>
        <span className='md:hidden'><hr/></span>

        <span onClick={toggleShow} className='text-3xl cursor-pointer md:hidden block mx-2'>
          {
            open ? <IoMdClose /> : <MdMenu />
          }
        </span>
      </div>
    <ul className={`p-5 md:flex md:items-center z-50 md:justify-between bg-[#1A1920]  md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500 ${open ? 'opacity-100 top-16 text-gray-300 flex justify-center ' : 'opacity-0 top-[-400px] flex justify-center'} md:opacity-100 md:top-10 `}>
        <div className='md:flex md:justify-end items-center text-lg'>
          <li className='mx-10 my-2 md:my-0'>
            <Link className=' -mx-1 hover:text-gray-300 duration-500' href={'/'}>HOME</Link>
          </li>
          <li className='mx-8 my-6 md:my-0 hover:text-gray-300 duration-500'>
            <Link href={'/Services'}>Services</Link>
          </li>
          <li className='mx-10 my-6 md:my-0'>
            <Link className=' hover:text-gray-300 duration-500' href={'/about'}>About</Link>
          </li>
          <li className='mx-11 my-6 md:my-0 '>
            <Link className=' hover:text-gray-300 duration-500' href={'/work'}>Work</Link>
          </li>
          <li className='mx-6 my-6 md:my-0'>
            <Link className=' hover:text-gray-300 duration-500' href={'/Casestudy'}>Case study</Link>
          </li>
          <Link href={'/contact'}>
          <button className='mx-4 md:ml-40 my-6 md:my-0  py-2.5 px-5 bg-white text-[#23202A] rounded-full hover:bg-[#23202A] hover:text-white transition duration-300'>
            Let's talk
          </button></Link>
        </div>
      </ul>
    </nav>
  )
}

export default Page;
