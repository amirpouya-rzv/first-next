import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { LuTwitter } from 'react-icons/lu'
import { SlSocialFacebook } from 'react-icons/sl'

function Footer() {
  return (
    <footer className='bg-[#19181F] text-white py-8 mx-10 mt-20 mb-10'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between gap-8'>
        <div className='flex flex-col md:flex-row md:items-start gap-8'>
          <div className='flex flex-col gap-4  '>
            <span className='text-2xl hover:text-gray-300 transition-colors duration-300'>
              Crator
              <span className='text-gray-300 text-2xl hover:text-white transition-colors duration-300'> Studio</span>
            </span>
            <p className='text-gray-300 font-inter'>© 2023 Crator Studio.<br /> All rights reserved.</p>
          </div>
          <div className='flex flex-col gap-4 '>
            <h2 className='font-noto text-lg mb-2 text-white md:mx-20'>Get in touch</h2>
            <address className='not-italic font-inter text-gray-300 md:mx-20'>
              123 W. Kanye Street<br />
              Los Angeles, CA 90001<br /><br />
              (415) 555-1234<br />
              <a href='mailto:hello@crator.com' className='text-gray-300 hover:underline'>hello@crator.com</a>
            </address>
          </div>
        </div>
        <div className='flex flex-col gap-4 '>
          <h2 className='font-noto text-lg mb-2 text-white'>Company</h2>
          <nav className='flex flex-col gap-2 font-inter text-gray-300'>
            <a href="#" className='hover:text-gray-400'>Home</a>
            <a href="#" className='hover:text-gray-400'>Services</a>
            <a href="#" className='hover:text-gray-400'>About</a>
            <a href="#" className='hover:text-gray-400'>Work</a>
            <a href="#" className='hover:text-gray-400'>Contact us</a>
          </nav>
        </div>
        <div className='flex flex-col gap-4 font-inter text-gray-300  md:mx-10'>
          <h2 className='font-noto text-lg mb-2 text-white '>Follow us on social media</h2>
          <p>Stay connected and updated on<br/> our latest projects.</p>
        </div>
      </div>
      <div >
        </div>
        <div className='flex gap-3 mt-5'>
          
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
    </footer>
  )
}

export default Footer
