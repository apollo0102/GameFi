

const CardCommon = (props) =>{

  return(
    <div className='bg-[#C4C4C4]/[.05] pt-[50px] px-[50px] pb-4'>
            <ul>
              <li className='text-[24px] font-bold text-white mb-5'>{props.value}</li>
              <li className='font-normal text-white mb-2'>{props.title}</li>
            </ul>
          </div>
  )
}
export default CardCommon;