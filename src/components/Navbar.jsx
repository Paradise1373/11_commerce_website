import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      {/* Upper Navbar */}
      <div>
        <div>
          <div>
            <a href='#' className=''>
              <img src={Logo} alt='logo' />
            </a>
          </div>
          <div className='group'>
            <input
              type='text'
              placeholder='search...'
              className='w-[200px] sm-w-[200px] group-hover:w-[300px] px-2 py-1 rounded-full border transition-all duration-300 border-gray-300 focus:outline-none focus:border-1 focus:border-orange-400'
            />
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div></div>
    </div>
  )
}

export default Navbar
