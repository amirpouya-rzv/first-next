import React from 'react'
import Image from 'next/image'
import { MdOutlineSecurity } from "react-icons/md";
import { GiLampreyMouth } from "react-icons/gi";

function Vision() {
    return (
        <div>
            <p className='mt-32 mx-10 text-center md:text-start  font-inter font-extrabold  text-3xl md:text-5xl '>We believe in the power of creative <br />ideas</p>
            <p className='mt-5 mx-10 font-inter flex text-center md:text-start text-gray-400 text-xl '>In the heart of our company lies a strong belief in the transformative power of ideas.<br /> Leveraging innovation and originality, we aim to deliver results that exceed<br /> expectations.</p>

           
            <div className='md:flex '>
                <div className='mt-10 mx-7'>
                    <span className='flex flex-col md:items-center '>
                        <GiLampreyMouth className='bg-[#23202A] w-12 h-12 mx-auto px-3 rounded-2xl ' />
                        <p className=' text-xl font-noto font-bold mx-16 mt-2'>
                            Product Mindset</p>
                        <p className=' text-gray-400 text-xl text-center mt-2'>Our focus: user-centric, engaging, and valuable products with purpose.</p>
                    </span>
                </div>
                <div className='mt-10 mx-7'>
                    <span className='flex flex-col md:items-center '>
                        <MdOutlineSecurity className='bg-[#23202A] w-12 h-12 mx-auto px-3 rounded-2xl ' />
                        <p className=' text-xl font-noto font-bold mx-16 mt-2'>
                            Full transparency</p>
                        <p className=' text-gray-400 text-xl text-center mt-2'>Trust is key; we uphold honesty. Every step is communicated for clarity.</p>
                    </span>

                </div>
            </div>


        </div>
    )
}

export default Vision