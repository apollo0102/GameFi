import { ReactComponent as IconHammer } from "../../../assets/icons/icon-hammer.svg"

const LandingHeader = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center pt-28'>
      <IconHammer />
      <span className='text-[50px] font-black text-white'>Metaverse Web 3.0</span>
      <span className='text-[50px] font-black text-white mb-6'>Gaming Launcepad & IGO</span>
      <span className='text-lg text-white mb-12'>The next generation gaming ecosystem for IGOs and NFT </span>
      <button className='bg-[#A3FF12] text-xl font-bold text-black px-11 py-5 mb-2'>Explore IGO</button>
    </div>
  )
}
export default LandingHeader
