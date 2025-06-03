import React from 'react'

import Logo from '../assets/logo.png'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import { IoMdSearch } from 'react-icons/io'

import DarkMode from './DarkMode'

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '#',
  },
  {
    id: 2,
    name: 'Top rated',
    link: '/#services',
  },
  {
    id: 3,
    name: 'Kids Wear',
    link: '#',
  },
  {
    id: 4,
    name: 'Mens Wear',
    link: '#',
  },
  {
    id: 5,
    name: 'Electronics',
    link: '#',
  },
]

const DropdownLinks = [
  {
    id: 1,
    name: 'Trending Products',
    link: '/#',
  },
  {
    id: 2,
    name: 'Best Selling',
    link: '/#',
  },
  {
    id: 3,
    name: 'Top Rated',
    link: '/#',
  },
]

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
                className='w-[200px] sm-w-[200px] group-hover:w-[300px] px-2 py-1 rounded-full border transition-all duration-300 border-gray-300 focus:outline-none focus:border-1 dark:border-gray-500 dark-bg-gray-800 focus:border-orange-400'
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
      <div className='flex justify-center '>
        <ul className='items-center hidden gap-4 md:flex'>
          {Menu.map((item) => (
            <li
              className='inline-block px-4 duration-300 hover:text-primary'
              key={item.id}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className='relative cursor-pointer group'>
            <a href='#' className='flex gap-[2px] py-2 items-center'>
              Trending Products
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute hidden z-[9999] group-hover:block w-[150px] p-2 bg-white shadow-lg text-black rounded-md'>
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className='inline-block w-full p-3 rounded-md hover:bg-primary/20'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
