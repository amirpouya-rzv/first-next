import React from 'react'
import Form from './Form'
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

function Touch() {
  return (
    <div className='flex'>
      <span className='md:hidden'><hr /></span>

      <div className='mt-36 mx-4 md:mx-10'>
        <h1 className='text-4xl md:text-5xl font-bold font-inter  mb-3'>Get in touch</h1>
        <p className=' font-inter text-[#C2C6D1] text-xl '>We'd love to hear from you. Fill in<span className='md:hidden'><br /></span> the form and we'll get back to you<br /> shortly.
        </p>
        <div className='md:grid md:grid-cols-2 '>
          <div className='mt-8  '>
            <p className='text-white font-bold font-inter text-lg mb-3'>Los Angeles</p>
            <p className=' font-inter text-[#C2C6D1]  '>123 West Kanye Street<br /> Los Angeles, CA 90001</p>
          </div>
          <div className='mt-5  '>
            <p className='text-white font-bold font-inter text-lg mb-3'>San Francisco</p>
            <p className=' font-inter text-[#C2C6D1]  '>456 East Drake Street<br />San Francisco, CA 94111</p>
          </div>
          <div className='mt-5  '>
            <p className='text-white font-bold font-inter text-lg mb-3'>New York</p>
            <p className=' font-inter text-[#C2C6D1]  '>789 North Weezy Street<br />New York, NY 10001</p>
          </div>
          <div className='mt-5  '>
            <p className='text-white font-bold font-inter text-lg mb-3'>Miami</p>
            <p className=' font-inter text-[#C2C6D1] mb-20 '>101 South Hova Street<br />Miami, FL 33101</p>
          </div>
        </div>

        <div >
        <p className='font-bold'>Follow us</p>
        </div>
        <div className='flex gap-3 '>
          
          <div className='bg-[#23202A] w-12 h-12 pt-3 px-3 rounded-full'>
            <SlSocialFacebook size={22} />

          </div>
          <div className='bg-[#23202A] w-12 h-12 pt-3 px-3 rounded-full'>
            <FaInstagram size={22} />

          </div>
          <div className='bg-[#23202A] w-12 h-12 pt-3 px-3 rounded-full'>
            <LuTwitter size={22} />
          </div>

        </div>
      </div >
      <Form />
    </div>
  )
}

export default Touch