const CardMenu = () => {
  return (
    // <div className='bg-gradient-to-b from-[#C4C4C4]/[.05]   pl-[50px] pr-[101px] pt-[60px] pb-[284px] w-full'>
    <div className='bg-gradient-to-b from-[#C4C4C4]/[.05]  w-full'>
      <ul className='font-normal text-white menu pl-[50px] pr-[101px] pt-[60px] pb-[284px]'>
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
  )
}

export default CardMenu
