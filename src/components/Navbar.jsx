import React from 'react'

import Logo from '../assets/logo.png'
import { FaCartShopping } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'

import DarkMode from './DarkMode'

const Navbar = () => {
  return (
    <div className='relative z-40 duration-200 bg-white shadow-lg dark:bg-gray-900 dark:text-white'>
      {/* Upper Navbar */}
      <div className='py-2 bg-primary/40 '>
        <div className='container flex items-center justify-between'>
          <div>
            <a href='#' className='flex gap-2 text-2xl font-bold sm:text-3xl'>
              <img src={Logo} alt='logo' className='w-10 uppercase' />
              Online Shop
            </a>
          </div>
          {/* Search Bar */}
          <div className='flex items-center justify-between gap-4'>
            <div className='relative hidden group sm:block'>
              <input
                type='text'
                placeholder='search...'
                className='w-[200px] sm-w-[200px] group-hover:w-[300px] px-2 py-1 rounded-full border transition-all duration-300 border-gray-300 focus:outline-none focus:border-1 focus:border-orange-400'
              />
              <IoMdSearch className='absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3' />
            </div>
            {/* Order Button */}
            <button
              onClick={() => alert('nothing yet')}
              className='flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full group bg-gradient-to-r from-primary to-secondary'
            >
              <span className='hidden transition-all duration-200 group-hover:block'>
                Order
              </span>
              <FaCartShopping className='text-xl text-white cursor-pointer drop-shadow-md' />
            </button>
            {/* DarkMode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div></div>
    </div>
  )
}

export default Navbar
