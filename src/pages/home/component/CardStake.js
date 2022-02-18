const CardStake = () => {
  return (
    <div className='w-full'>
      <div className='bg-[#C4C4C4]/[.05] pt-[50px] pl-[55px] pb-4 border-b-[1px] border-gray-500'>
        <ul>
          <li className='text-[20px] font-bold text-white mb-5 '><span className='text-[32px]'>256.50 </span> BUSD</li>
          <li className='font-normal text-white/[.5] mb-[20px]'>Your Staked</li>
        </ul>
      </div>
      <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[55px] pb-4'>
        <ul>
          <li className='text-[20px] font-bold text-white mb-5'><span className='text-[32px]'>38.00 </span> BUSD</li>
          <li className='font-normal text-white/[.5] mb-[20px]'>Your Rewards</li>
          <li><button className='text-lg font-normal bg-[#6D4AFE] text-white py-5 w-full mt-12 mb-7'>STAKE</button></li>
          <li><button className='text-lg font-normal bg-[#C4C4C4]/[.05]  text-white py-5 w-full'>WITHDRAW</button></li>
        </ul>
      </div>
    </div>
  )
}
export default CardStake
