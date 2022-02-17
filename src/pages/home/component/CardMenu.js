const CardMenu = () => {
  return (
    <div className='bg-[#C4C4C4]/[.05] pl-[40px] pr-[101px] pt-[34px] pb-[284px] w-full'>
      <div className='w-16'>
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
    </div>
  )
}

export default CardMenu
