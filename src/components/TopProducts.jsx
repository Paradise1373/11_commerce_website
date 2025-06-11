import React from 'react'

import Img1 from '../assets/shirt/shirt.png'
import Img2 from '../assets/shirt/shirt2.png'
import Img3 from '../assets/shirt/shirt3.png'

import { FaStar } from 'react-icons/fa6'

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: 'Casual Wear',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Img2,
    title: 'Printed shirt',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Img3,
    title: 'Women shirt',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const TopProducts = () => {
  return (
    <div>
      <div className='container'>
        {/* Header Section */}
        <div className='mb-24 text-left'>
          <p data-aos='fade-up' className='text-sm text-primary'>
            Top Rated Products of you
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            Best Products
          </h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            Lorem Ipsum dolor sit amet consectetur, adipisicing elit. sit
            asperiores modi, sit asperiores modi
          </p>
        </div>
        {/* Body Section */}
        <div className='grid grid-cols-1 gap-20 m-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center'>
          {ProductData.map((data) => (
            <div className='relative bg-white shadow-xl rounded-2xl dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white max-w-[300px] group duration-300'>
              {/* Image Section */}
              <div className='h-[200px]'>
                <img
                  src={data.img}
                  alt=''
                  className='max-w-[150px] block mx-auto transform -translate-y-0 drop-shadow-md duration-300 group-hover:scale-125'
                />
              </div>
              {/* Details Section */}
              <div className='p-4 m-2 text-center'>
                {/* Star Rating */}
                <div className='flex items-center justify-center w-full gap-1'>
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <h1 className='text-xl font-bold'>{data.title}</h1>
                <p className='text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-3'>
                  {data.description}
                </p>
                <button className='px-4 py-1 mt-4 text-white duration-300 rounded-full bg-primary hover:scale-105 group-hover:bg-white group-hover:text-primary'>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
