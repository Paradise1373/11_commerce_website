import React from 'react'

import BannerImage from '../assets/women/women2.jpg'

import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='flex min-h-[550px] py-12 sm:py-0 items-center justify-center'>
      <div className='container'>
        <div className='grid items-center grid-cols-1 gap-6 sm:grid-cols-2'>
          {/* Image Section */}
          <div data-aos='zoom-in'>
            <img
              src={BannerImage}
              alt=''
              className='max-w-[400px] h-[350px] w-full mx-auto object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'
            />
          </div>
          {/* Text Details Section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos='fade-up' className='text-3xl font-bold sm:text-4xl'>
              Winter Sale Upto 50% Off
            </h1>
            <p
              data-aos='fade-up'
              className='text-sm leading-5 tracking-wide text-gray-500'
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className='flex flex-col gap-4'>
              <div data-aos='fade-up' className='flex items-center gap-4'>
                <GrSecure className='p-4 text-4xl rounded-full shadow-sm w-14 h-14 bg-violet-100 dark:bg-violet-400' />
                <p>Quality Products</p>
              </div>
              <div data-aos='fade-up' className='flex items-center gap-4'>
                <IoFastFood className='p-4 text-4xl bg-orange-100 rounded-full shadow-sm w-14 h-14 dark:bg-orange-400' />
                <p>Fast Delivery</p>
              </div>
              <div data-aos='fade-up' className='flex items-center gap-4'>
                <GiFoodTruck className='p-4 text-4xl bg-green-100 rounded-full shadow-sm w-14 h-14 dark:bg-green-400' />
                <p>Easy Payment Method</p>
              </div>
              <div data-aos='fade-up' className='flex items-center gap-4'>
                <GiFoodTruck className='p-4 text-4xl bg-yellow-100 rounded-full shadow-sm w-14 h-14 dark:bg-yellow-400' />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
