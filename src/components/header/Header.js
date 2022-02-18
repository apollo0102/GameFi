import './Header.scss'
import Nav from './Nav'
const Header = () => {
  return (
    <header className=' bg-[#090A1A] font-[RussoOne]'>
      <Nav/>
      <div className='bg-[#C4C4C4]/[.05]  px-2'>
        <div className='container mx-auto flex flex-col justify-between items-center py-20 gap-y-10  sm:flex-row'>
          <div className='text-white w-auto'>
            <ul className=''>
              <li className='gap-x-5 mb-8 '>
                <a href='/home' className='font-bold m-2'>
                  HOME .
                </a>
                <a href='#/stake' className='stake font-bold'>
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
