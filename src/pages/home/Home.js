// import { useTotalSupply, useName } from '../../hooks/DDEFIREContract';
import AppLayout from '../AppLayout'
import CardStatistic from './component/CardStatistic'
import CardMenu from './component/CardMenu'
import './Home.scss'
import CardMain from './component/CardMain'
import CardStake from './component/CardStake'

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
          <CardMain></CardMain>
          <CardStake></CardStake>
        </div>
      </main>
    </AppLayout>
  )
}

export default Home
