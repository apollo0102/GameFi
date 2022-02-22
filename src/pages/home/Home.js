// import { useTotalSupply, useName } from '../../hooks/DDEFIREContract';
import AppLayout from '../AppLayout'
import './Home.scss'
import LandingHeader from './component/LandingHeader'

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
      {/* <main className=' bg-[#090A1A] font-[RussoOne] pb-36  px-2'> */}
      <main className="bg-[url('../../assets/images/hear_0.jpg')]">
        <LandingHeader/>
      </main>
    </AppLayout>
  )
}

export default Home
