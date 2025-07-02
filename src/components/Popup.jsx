import React from 'react'

import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className='popup'>
          <div className='fixed top-0 left-0 z-50 w-screen h-screen backdrop-blur-sm bg-black/50'>
            <div className='fixed p-4 -translate-x-1/2 -translate-y-1/2 shadow-md top-1/2 left-1/2 w-[300px] duration-200 bg-white dark:bg-gray-900 rounded-md'>
              {/* header */}
              <div className='flex items-center justify-between'>
                <div>
                  <h2>Order Now</h2>
                </div>
                <div>
                  <IoCloseOutline
                    className='text-2xl cursor-pointer'
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className='mt-4'>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full px-2 py-1 pt-4 mb-4 border border-gray-300 rounded-full dark:border-gray-500 dark:bg-gray-800'
                />
                <input
                  type='email'
                  placeholder='E-mail'
                  className='w-full px-2 py-1 pt-4 mb-4 border border-gray-300 rounded-full dark:border-gray-500 dark:bg-gray-800'
                />
                <input
                  type='text'
                  placeholder='Address'
                  className='w-full px-2 py-1 pt-4 mb-4 border border-gray-300 rounded-full dark:border-gray-500 dark:bg-gray-800'
                />
                <div className='flex justify-center'>
                  <button className='px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
