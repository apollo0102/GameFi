import { ReactComponent as StatisticGraphOne } from '../../../assets/icons/icon-statistic-graph-1.svg'
import { ReactComponent as StatisticGraphTwo } from '../../../assets/icons/icon-statistic-graph-2.svg'
import { ReactComponent as StatisticGraphThree } from '../../../assets/icons/icon-statistic-graph-3.svg'

const CardStatistic = (props) => {
  const graph = () => {
    switch (props.type) {
      case 1:
        return <StatisticGraphOne />
      case 2:
        return <StatisticGraphTwo />
      case 3:
        return <StatisticGraphThree />
      default:
        return <StatisticGraphOne />
    }
  }

  return (
      <div className='bg-[#C4C4C4]/[.05] pt-6 px-5 pb-4 sm:pt-[50px] sm:px-[70px]'>
        <ul>
          <li className='text-[24px] font-bold text-white mb-5'>
            {props.value}
          </li>
          <li className='font-normal text-white mb-2'>{props.title}</li>
          <li>{graph()}</li>
        </ul>
      </div>
  )
}
export default CardStatistic
