// import { useTotalSupply, useName } from '../../hooks/DDEFIREContract';
import AppLayout from '../AppLayout'
import CardStatistic from './component/CardStatistic'
import CardMenu from './component/CardMenu'
import './Home.scss'

const statisticList = [
  {
    title: 'Total Value Locked',
    value: '$868,163.54',
    type: 1,
  },
  {
    title: 'APY',
    value: '158.52 %',
    type: 2,
  },
  {
    title: 'Number of Stakers',
    value: '6412',
    type: 3,
  },
]
const Home = () => {
  // const name = useName();
  return (
    <AppLayout>
      <main className=' bg-[#090A1A] font-[RussoOne] pb-36'>
        <div className='container flex justify-between items-center pt-[70px] mx-auto gap-x-7'>
          {statisticList.map((item) => (
            <CardStatistic
              title={item.title}
              value={item.value}
              type={item.type}
            ></CardStatistic>
          ))}
        </div>
        <div className='container flex justify-between pt-10 mx-auto gap-x-7'>
          <CardMenu></CardMenu>
          <div className='w-full justify-start flex flex-col '>
            <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[80px] pb-4 mb-5'>
              <ul>
                <li className='text-[24px] font-bold text-white mb-5'>
                  Connected MetaMask
                </li>
                <li className='font-normal text-white/[.2] mb-[35px]'>
                  If not connected, click the "Connect Wallet" button in the top
                  right corner
                </li>
              </ul>
            </div>
            <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[80px] pb-4 mb-5'>
              <ul>
                <li className='text-[24px] font-bold text-white mb-5'>
                  Available Balance
                </li>
                <li className='font-normal text-white/[.2] mb-3'>
                  Current Balance: 38.00
                </li>
                <li className='font-normal text-white/[.2] mb-[35px]'>
                  You must have balance in wallet
                </li>
              </ul>
            </div>
            <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[80px] pb-4 mb-5'>
              <ul>
                <li className='text-[24px] font-bold text-white mb-5'>
                  Eligible to stake
                </li>
                <li className='font-normal text-white/[.2] mb-[35px]'>
                  You cannot stake if you have an active unstake/withdrawal
                  request
                </li>
              </ul>
            </div>
            <button className='text-lg font-normal bg-[#6D4AFE] text-white py-5 mb-5'>NEST</button>
            <button className='text-lg font-normal bg-[#C4C4C4]/[.05]  text-white py-5'>PREVIOUS</button>
          </div>
          <CardMenu></CardMenu>
        </div>
      </main>
    </AppLayout>
  )
}

export default Home
