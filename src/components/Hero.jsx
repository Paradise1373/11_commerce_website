import React from 'react'

import Slider from 'react-slick'

import Image1 from '../assets/hero/women.png'
import Image2 from '../assets/hero/sale.png'
import Image3 from '../assets/hero/shopping.png'

const ImageList = [
  {
    id: 1,
    Image: Image1,
    title: "Up to 50% off on all Men's Wear",
    description:
      'lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 2,
    Image: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    Image: Image3,
    title: '70% off on all Products Sales',
    description:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  }
  
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-300'>
      {/* Background Pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      {/* Hero Section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* Text Content Section */}
                <div className='relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:text-left sm::order-1 sm:pt-0'>
                  <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
                    {data.title}
                  </h1>
                  <p className='text-sm'>
                    {data.description}
                  </p>
                  <div>
                    <button className='px-4 py-2 text-white duration-300 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className='order-1 sm:order-2'>
                  <div className='relative z-10'>
                    <img
                      src={data.Image}
                      alt=''
                      className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
