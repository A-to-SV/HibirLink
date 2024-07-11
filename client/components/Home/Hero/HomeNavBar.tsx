import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import Logo from '@/public/assets/Logo.png';
import Dropdown from './DropDown';

const HomeNavBar = () => {
  return (
    <div className='flex justify-between items-center w-[80%] mx-auto py-4'>
      <div className="flex gap-x-1 items-center">
        <Link href='/Home'><Image src={Logo} alt='logoImage' /></Link>
        <div className='font-bold underline'>HibirLink</div>
      </div>
      <div className="flex justify-between items-center gap-x-4">
        <Link href='#'>Home</Link>
        <Dropdown/>
        <Link href='#about'>About</Link>
        <Link href='#faq'>FAQ</Link>
      </div>
      <div className="flex gap-x-6 items-center">
        <IoIosHeartEmpty size={20}/>
        <IoCartOutline size={20} />
        <button className='px-4 py-2 bg-primary text-white rounded-2xl text-xm'>GetStarted</button>
      </div>
    </div>
  )
}

export default HomeNavBar
