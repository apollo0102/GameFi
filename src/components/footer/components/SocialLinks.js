// import Logo from "../../assets/icons/icon-logo.svg"
import { ReactComponent as IconTwitter } from '../../../assets/icons/icon-twitter.svg'
import { ReactComponent as IconTelegram } from '../../../assets/icons/icon-telegram.svg'
import { ReactComponent as IconMediam } from '../../../assets/icons/icon-mediam.svg'
import { ReactComponent as IconDiscord } from '../../../assets/icons/icon-discord.svg'
import { ReactComponent as IconLinkedIn } from '../../../assets/icons/icon-linkIn.svg'
import { ReactComponent as IconInstagram } from '../../../assets/icons/icon-instagram.svg'
import { ReactComponent as IconFacebook } from '../../../assets/icons/icon-facebook.svg'

const SocialLinks = () => {
  return (
    <div className='pt-[50px] px-[80px] pb-4 mb-28 text-center'>
      <ul>
        <li className='text-base font-bold text-white mb-20'>
          <span className='search'>FIND US ON SOCIAL</span>
        </li>
        <li className=''>
          <div className='flex flex-col gap-y-8 justify-center items-center gap-x-8 sm:flex-row'>
            <div className='linkItem px-[18px] py-[19px]'>
              <IconTwitter></IconTwitter>
            </div>
            <div className='linkItem px-[18px] py-[19px]'>
              <IconTelegram></IconTelegram>
            </div>
            <div className='linkItem px-[15px] py-[19px]'>
              <IconMediam></IconMediam>
            </div>
            <div className='linkItem px-[16px] py-[19px]'>
              <IconDiscord></IconDiscord>
            </div>
            <div className='linkItem px-[18px] py-[19px]'>
              <IconLinkedIn></IconLinkedIn>
            </div>
            <div className='linkItem px-[18px] py-[19px]'>
              <IconInstagram></IconInstagram>
            </div>
            <div className='linkItem px-[18px] py-[19px]'>
              <IconFacebook></IconFacebook>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default SocialLinks
