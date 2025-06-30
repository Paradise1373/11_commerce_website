import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import TopProducts from './components/TopProducts'
import Banner from './components/Banner'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    Aos.refresh()
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
    </div>
  )
}

export default App
