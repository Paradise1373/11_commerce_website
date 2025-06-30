import React from 'react'

import Banner from '../assets/website/orange-pattern.jpg'

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
}

const Subscribe = () => {
  return (
    <div
      data-aos='zoom-in'
      style={BannerImg}
      className='mb-20 text-white bg-gray-100 dark:bg-gray-800'
    >
      <div className='container py-10 backdrop-blur-sm'>
        <div className='max-w-xl mx-auto space-y-6'>
          <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>
            Get Notified About New Products
          </h1>
          <input
            data-aos='fade-up'
            type='text'
            placeholder='Enter your email'
            className='w-full p-3'
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
