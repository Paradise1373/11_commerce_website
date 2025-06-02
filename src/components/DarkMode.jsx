import React, { useEffect, useState } from 'react'

import LightButton from '../assets/website/light-mode-button.png'
import DarkButton from '../assets/website/dark-mode-button.png'

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('light') : 'dark'
  )

  const element = document.documentElement

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <div className='relative'>
      <img
        src={LightButton}
        alt=''
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all absolute right-0 z-10 duration-200 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={DarkButton}
        alt=''
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200'
      />
    </div>
  )
}

export default DarkMode
