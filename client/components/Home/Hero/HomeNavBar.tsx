import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import Logo from '@/public/assets/Logo.png';
import Dropdown from './DropDown';

const HomeNavBar = () => {
  return (
    <div className='flex justify-between items-center w-[80%] mx-auto py-4'>
      <Link href='/Home' className="flex gap-x-1 items-center">
        <Image src={Logo} alt='logoImage' />
        <h1 className='font-bold underline'>HibirLink</h1>
      </Link>
      <div className="flex justify-between items-center gap-x-4">
        <Link href='#'>Home</Link>
        <Dropdown/>
        <Link href='#about'>About</Link>
        <Link href='#faq'>FAQ</Link>
      </div>
      <div className="flex gap-x-6 items-center">
        <Link href=''>
          <IoIosHeartEmpty size={20} className='hover:text-primary'/>
        </Link>
        <Link href=''>
          <IoCartOutline size={20}className='hover:text-primary'/>
        </Link>
        <button className='px-4 py-2 bg-primary text-white rounded-2xl text-xm hover:bg-blue-500'>GetStarted</button>
      </div>
    </div>
  )
}

export default HomeNavBar
