import About from './components/About'
import Incubation from './components/Incubation'
import SocialLinks from './components/SocialLinks'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className=' bg-[#090A1A] font-[RussoOne]'>
      <div className='container flex flex-col justify-start pt-10 mx-auto gap-x-7'>
        <Incubation></Incubation>
        <SocialLinks></SocialLinks>
        <About></About>
      </div>
    </footer>
  )
}

export default Footer
