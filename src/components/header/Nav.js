import React, { useState } from 'react'
import { ReactComponent as IconLogo } from '../../assets/icons/icon-logo.svg'
import { ReactComponent as IconConnect } from '../../assets/icons/icon-connect.svg'
import Select from 'react-select'
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='bg-[#090A1A] font-[RussoOne]'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
    </div>
  )
}
const customStyles = {
  option: (provided, state) => {
    return {
      ...provided,
      color: state.isSelected ? 'gray' : 'white',
      backgroundColor: '#090a1a',
      border: '1px solid #16172b',
    }
  },
  control: (styles) => {
    return {
      ...styles,
      backgroundColor: 'transparent',
      border: '3px solid #2E2F3C',
      width: 170,
      height: 55,
      color: 'red',
      fontSize: 30,
    }
  },
  input: (styles) => ({ ...styles, color: 'white' }),
  placeholder: (styles) => ({ ...styles, color: 'white' }),
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]
const pages = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'IGOs',
    link: '/igos',
  },
  {
    text: 'Staking',
    link: '/staking',
  },
  {
    text: 'Pages',
    link: '/pages',
  },
]

const navLinks = pages.map((page) => (
  <a
    key={page.link}
    className='no-underline text-white -800 font-semibold hover:text-[#a3ff12]'
    href={`#${page.link}`}
  >
    {page.text}
  </a>
))

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className='container mx-auto flex flex-col  gap-y-10 items-center justify-between sm:flex-row sm:flex-wrap  py-5  md:gap-y-10'>
    <div className='flex items-center '>
      <IconLogo />
      <nav className='hidden md:block space-x-6 ml-6'>{navLinks}</nav>
    </div>
    <div className='flex  items-center gap-x-6 gap-y-8 justify-center flex-col sm:flex-row sm:justify-between'>
      {/* <select className='py-4 pl-5 pr-14  border-2  bg-[#090A1A] text-white rounded-none border-stone-600'>
            <option>BUY TOKEN</option>
            <option>One</option>
            <option>One</option>
            <option>One</option>
          </select> */}
      <Select
        className='node-select'
        classNamePrefix='node-select'
        name='form-field-name'
        // value={
        //   inputs.transferNodeName
        //     ? {
        //         value: inputs.transferNodeName,
        //         label: inputs.transferNodeName,
        //       }
        //     : null
        // }
        styles={customStyles}
        options={options}
        // onChange={nodeChanged}
        placeholder='BUY TOKEN'
      />
      <button className='bg-white px-8 py-4 flex justify-center items-center gap-x-3 '>
        <IconConnect />
        <span className='text-[#090A1A]'>CONNECT</span>
      </button>

      <button
      type='button'
      aria-label='Toggle mobile menu'
      onClick={() => setMenuOpen(!menuOpen)}
      className='rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50'
    >
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>

    </div>
  </div>
)

const MobileMenu = ({ children }) => (
  <nav className='p-4 flex flex-col space-y-3 md:hidden'>{children}</nav>
)

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={`transition duration-100 ease h-8 w-8 ${
      menuOpen ? 'transform rotate-90' : ''
    }`}
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
      clipRule='evenodd'
    />
  </svg>
)

export default Nav