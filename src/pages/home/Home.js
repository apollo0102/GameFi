// import { useTotalSupply, useName } from '../../hooks/DDEFIREContract';
import AppLayout from '../AppLayout'
import CardStatistic from './component/CardStatistic'
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
        <div className='container flex justify-between items-center pt-10 mx-auto gap-x-7'>
          <div className='bg-gradient-to-b from-[#C4C4C4]/[.05]   pl-[50px] pr-[101px] pt-[60px] pb-[284px] w-full'>
            <ul className='font-normal text-white menu'>
              <li className=''>
                <a href='/checkpoint'>Checkpoint</a>
              </li>
              <li className=''>
                <a href='/amountStake'>Amount Stake</a>
              </li>
              <li className=''>
                <a href='/preAuth'>Pre-authorization</a>
              </li>
              <li className=''>
                <a href='/confirm'>Confirm</a>
              </li>
              <li className=''>
                <a href='/confirmation'>Confirmation</a>
              </li>
            </ul>
          </div>
          <div className='bg-[#C4C4C4]/[.05] pl-[50px] pr-[101px] pt-[60px] pb-[284px] w-full'>
            <ul className='font-normal text-white menu gap-y-4 '>
              <li className=''>
                <a href='/checkpoint'>Checkpoint</a>
              </li>
              <li className=''>
                <a href='/amountStake'>Amount Stake</a>
              </li>
              <li className=''>
                <a href='/preAuth'>Pre-authorization</a>
              </li>
              <li className=''>
                <a href='/confirm'>Confirm</a>
              </li>
              <li className=''>
                <a href='/confirmation'>Confirmation</a>
              </li>
            </ul>
          </div>
          <div className='bg-[#C4C4C4]/[.05] pl-[50px] pr-[101px] pt-[60px] pb-[284px] w-full'>
            <ul className='font-normal text-white menu gap-y-4 '>
              <li className=''>
                <a href='/checkpoint'>Checkpoint</a>
              </li>
              <li className=''>
                <a href='/amountStake'>Amount Stake</a>
              </li>
              <li className=''>
                <a href='/preAuth'>Pre-authorization</a>
              </li>
              <li className=''>
                <a href='/confirm'>Confirm</a>
              </li>
              <li className=''>
                <a href='/confirmation'>Confirmation</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </AppLayout>
  )
}

export default Home
