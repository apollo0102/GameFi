import './Header.scss'
// import Logo from "../../assets/icons/icon-logo.svg"
import { ReactComponent as IconLogo } from '../../assets/icons/icon-logo.svg'
import { ReactComponent as IconConnect } from '../../assets/icons/icon-connect.svg'

const headerLinks = [
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

const Header = () => {
  return (
    <header className=' bg-[#090A1A] font-[RussoOne]'>
      <div className='container flex justify-between items-center py-[30px] mx-auto'>
        <div className='flex items-center gap-x-10'>
          <IconLogo />
          <ul className='flex gap-x-8 text-white'>
            {headerLinks.map((h_link) => (
              <li>
                <a className='' href={h_link.link}>
                  {h_link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center gap-x-10 bg-'>
          <select className='py-4 pl-5 pr-14 bg-inherit border-2 text-white rounded-none border-stone-600'>
            <option>BUY TOKEN</option>
            <option>One</option>
            <option>One</option>
            <option>One</option>
          </select>
          <button className='bg-white px-8 py-4 flex justify-center items-center gap-x-3 '>
            <IconConnect />
            <span className='text-[#090A1A]'>CONNECT</span>
          </button>
        </div>
      </div>
      <div className='bg-[#C4C4C4]/[.05]'>
        <div className='container flex justify-between items-center py-20 mx-auto'>
          <div className='text-white'>
            <ul className=''>
              <li className='gap-x-5 mb-8'>
                <a href='/home' className='font-bold'>
                  HOME .  
                </a>
                <a href='/stake' className='text-[#a7f128] font-bold'>
                  STAKE
                </a>
              </li>
              <li>
                <span className='text-[36px] font-bold'>STAKING</span>
              </li>
            </ul>
          </div>
          <div>
            <button className='font-bold text-white bg-[#C4C4C4]/[.2] py-4 px-6'>
              LEADERBOARD
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
