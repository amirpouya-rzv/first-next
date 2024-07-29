"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { IoHomeOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { TbMessageChatbot } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { LiaBookOpenSolid } from "react-icons/lia";
import { MdMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        className='fixed top-0 left-0 p-4 text-lg flex flex-col items-center'
        aria-labelledby="menu"
      >
        {!menuOpen && (
          <div
            className='flex items-center mb-4 cursor-pointer'
            onClick={toggleMenu}
            aria-label='Open menu'
          >
            <MdMenu size={25} className='text-white' />
          </div>
        )}
      </div>

      <div
        className={`fixed top-0 left-0 h-screen bg-gradient-to-r from-[#5a57f0] to-[#76b3d4] p-4 text-lg shadow-2xl flex flex-col items-center w-52 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full '
        }`}
        aria-labelledby="menu"
      >
        {menuOpen && (
          <div
            className='flex items-center mb-4 cursor-pointer self-end'
            onClick={toggleMenu}
            aria-label='Close menu'
          >
            <IoIosClose size={28} className='text-white ml-36' />
          </div>
        )}
        {menuOpen && (
          <div className='flex flex-col items-center gap-10 mt-20'>
            <Link href={'/'} className='flex gap-2 items-center mb-4 text-white hover:text-gray-300'>
              <IoHomeOutline /> خانه
            </Link>
            <Link href={'/gallery'} className='flex gap-2 items-center mb-4 text-white hover:text-gray-300'>
              <GrGallery /> گالری
            </Link>
            <Link href={'/essay'} className='flex gap-2 items-center mb-4 text-white hover:text-gray-300'>
              <TbMessageChatbot /> مقالات
            </Link>
            <Link href={'/aboutus'} className='flex gap-2 items-center mb-4 text-white hover:text-gray-300'>
              <LiaBookOpenSolid /> درباره ما
            </Link>
            <Link href={'/contactus'} className='flex gap-2 items-center mb-4 text-white hover:text-gray-300'>
              <FaRegUser /> ارتباط با ما
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
