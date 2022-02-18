const CardMenu = () => {
  return (
    <div className='w-full'>
      <ul className='bg-gradient-to-b from-[#C4C4C4]/[.05] font-bold text-white menu pl-[50px]  pt-[60px] pb-[320px]'>
        <li className=''>
          <a href='#/checkpoint'>Checkpoint</a>
        </li>
        <li className=''>
          <a href='#/amountStake'>Amount Stake</a>
        </li>
        <li className=''>
          <a href='#/preAuth'>Pre-authorization</a>
        </li>
        <li className=''>
          <a href='#/confirm'>Confirm</a>
        </li>
        <li className=''>
          <a href='#/confirmation'>Confirmation</a>
        </li>
      </ul>
    </div>
  )
}

export default CardMenu
