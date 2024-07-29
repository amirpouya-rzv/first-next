import React from 'react'

function Form() {
  return (
    <div className='mt-[950px] -ml-[311px] -px-5 mr-[15px] w-11/12 bg-[#5f5675] md:bg-[#23202A]   md:mt-20  md:ml-8 md:w-[600px] md:h-[700px]  rounded-3xl'>
      <form className='mt-20'>
        <div className="flex flex-col ">
          <label className="md:mx-16 mx-7 mb-2 text-gray-400 text-sm font-bold" htmlFor='name'>
            Name *
          </label>
          <input className="bg-[#1E1B24] py-3.5 mx-5 md:mx-16 px-2 rounded-2xl 
          border-2 border-[#1E1B24] focus:outline-none focus:border-[#333139] mb-10 dark:bg-gray-700"
            placeholder='Enter your name'
            name='name'
            id='name'
            type='text'
            required />
        </div>

        <div className="flex flex-col ">
          <label className="md:mx-16 mx-7 mb-2 text-gray-400 text-sm font-bold" htmlFor='Email'>
            Email *
          </label>
          <input className="bg-[#1E1B24] py-3.5 mx-5 md:mx-16 px-2 rounded-2xl 
          border-2 border-[#1E1B24] focus:outline-none focus:border-[#333139] mb-10 dark:bg-gray-700"
            placeholder='Example@email.com'
            name='Email'
            id='Email'
            type='text'
            required />
        </div>

        <div className="flex flex-col ">
          <label className="md:mx-16 mx-7 mb-2 text-gray-400 text-sm font-bold" htmlFor='Phone'>
            Phone
          </label>
          <input className="bg-[#1E1B24] py-3.5 mx-5 md:mx-16 px-2 rounded-2xl 
          border-2 border-[#1E1B24] focus:outline-none focus:border-[#333139] mb-10 dark:bg-gray-700"
            placeholder='Enter your Phon'
            name='Phone'
            id='Phone'
            type='text'
            required />
        </div>

        <div className="flex flex-col ">
          <label className="md:mx-16 mx-7 mb-2 text-gray-400 text-sm font-bold" htmlFor='Message'>
            Message *
          </label>
          <textarea className="bg-[#1E1B24] py-3.5 mx-5 md:mx-16 px-2 rounded-2xl 
          border-2 border-[#1E1B24] focus:outline-none focus:border-[#333139] md:mb-10 dark:bg-gray-700"
            placeholder='Write your Message'
            name='Message'
            id='Message'
            type='text'
            required />
        </div>
        <button className='mx-5 md:ml-52 my-6 md:my-0 py-5 mt-20 px-12 bg-white text-[#23202A] rounded-full hover:bg-[#23202A] hover:text-white transition duration-300'>
          Let's talk
        </button>
      </form>
    </div>
  )
}

export default Form
