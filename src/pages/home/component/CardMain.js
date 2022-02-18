const CardMain = () => {
  return (
    <div className='flex flex-col justify-start'>
      <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[80px] pb-4 mb-5'>
        <ul>
          <li className='text-[24px] font-bold text-white mb-5 w-[150px] sm:w-auto'>
            Connected MetaMask
          </li>
          <li className='font-normal text-white/[.2] mb-[35px] w-[150px] sm:w-[250px]'>
            If not connected, click the "Connect Wallet" button in the top right
            corner
          </li>
        </ul>
      </div>
      <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[80px] pb-4 mb-5'>
        <ul>
          <li className='text-[24px] font-bold text-white mb-5 w-[150px] sm:w-auto'>
            Available Balance
          </li>
          <li className='font-normal text-white/[.2] mb-3 w-[150px] sm:w-[250px]'>
            Current Balance: 38.00
          </li>
          <li className='font-normal text-white/[.2] mb-[35px] w-[150px] sm:w-[250px]'>
            You must have balance in wallet
          </li>
        </ul>
      </div>
      <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[80px]  pb-4 mb-5'>
        <ul>
          <li className='text-[24px] font-bold text-white mb-5 w-[150px] sm:w-auto'>
            Eligible to stake
          </li>
          <li className='font-normal text-white/[.2] mb-[35px] w-[150px] sm:w-[250px]'>
            You cannot stake if you have an active unstake/withdrawal request
          </li>
        </ul>
      </div>
      <button className='text-lg font-normal bg-[#6D4AFE] text-white py-5 mb-8'>
        NEXT
      </button>
      <button className='text-lg font-normal bg-[#C4C4C4]/[.05]  text-white py-5 mb-8'>
        PREVIOUS
      </button>
    </div>
  )
}
export default CardMain
