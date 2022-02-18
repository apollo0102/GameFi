import { ReactComponent as IconLogo } from '../../../assets/icons/icon-logo.svg'
import {FaChevronUp} from "react-icons/fa"
const list = [
  'Features',
  'How it works',
  'Token info',
  'About us',
  'Social media',
  'Terms of Service',
  'Privacy Policy',
]
const About = () => {
  return (
    <div className='pt-[50px] px-[80px] pb-4 mb-9 text-center'>
      <ul>
        <li className='mb-20'>
          <div className='flex justify-center'>
            <IconLogo></IconLogo>
          </div>
        </li>
        <li className=''>
          <div className='flex justify-center items-center gap-x-8 text-white mb-3'>
            {list.map((item) => (
              <div className='' key={item}>
                <a className='' href={item}>
                  {item}
                </a>
              </div>
            ))}
          </div>
        </li>
        <li>
          <span className='text-white'>
            Copyright © 2022. All Rights Reserved by GaFi
          </span>
        </li>
        <li>
          <div className='flex justify-center py-10 text-white  pt-20'>
            <FaChevronUp className='h-10 w-10'/>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default About
