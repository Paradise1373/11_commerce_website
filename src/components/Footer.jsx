import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa'

import FooterLogo from '../assets/logo.png'
import Banner from '../assets/website/footer-pattern.jpg'

const Footer = () => {
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  }

  const FooterLinks = [
    {
      title: 'Home',
      link: '/#',
    },
    {
      title: 'About',
      link: '/#about',
    },
    {
      title: 'Contact',
      link: '/#contact',
    },
    {
      title: 'Blog',
      link: '/#blog',
    },
  ]

  return (
    <div style={BannerImg} className='text-white '>
      <div className='container'>
        <div data-aos='zoom-in' className='grid pt-5 pb-44 md:grid-cols-3'>
          {/* company details */}
          <div className='px-4 py-8'>
            <h1 className='flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left'>
              <img src={FooterLogo} alt='' className='max-w-[50px]' />
              Shopping
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>
          {/* Footer links */}
          <div className='grid grid-cols-2 col-span-2 md:grid-cols-3 md:pl-10'>
            <div>
              <div className='p-4 py-8'>
                <h1 className='mb-3 text-xl font-bold text-justify md:text-left md:text-3xl'>
                  Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className='text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1'
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className='p-4 py-8'>
                <h1 className='mb-3 text-xl font-bold text-justify md:text-left md:text-3xl'>
                  Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className='text-gray-200 duration-300 cursor-pointer hover:text-primary hover:translate-x-1'
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social links */}
            <div>
              <div className='flex items-center gap-4 mt-6'>
                <a href=''>
                  <FaInstagram className='text-3xl' />
                </a>
                <a href=''>
                  <FaFacebook className='text-3xl' />
                </a>
                <a href=''>
                  <FaLinkedin className='text-3xl' />
                </a>
              </div>
              <div className='mt-6'>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className='flex items-center gap-3'>
                  <FaMobileAlt />
                  <p>+98 9357079762</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
