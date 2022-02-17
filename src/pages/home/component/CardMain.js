const CardMain = () => {
  return (
    <div className='w-full justify-start flex flex-col '>
      <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[80px] pb-4 mb-5'>
        <ul>
          <li className='text-[24px] font-bold text-white mb-5'>
            Connected MetaMask
          </li>
          <li className='font-normal text-white/[.2] mb-[35px]'>
            If not connected, click the "Connect Wallet" button in the top right
            corner
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
            You cannot stake if you have an active unstake/withdrawal request
          </li>
        </ul>
      </div>
      <button className='text-lg font-normal bg-[#6D4AFE] text-white py-5 mb-5'>
        NEST
      </button>
      <button className='text-lg font-normal bg-[#C4C4C4]/[.05]  text-white py-5'>
        PREVIOUS
      </button>
    </div>
  )
}
export default CardMain
